import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'node:path';
import type { Connect, Plugin } from 'vite';
import { configuredOrigin, renderDocument } from './site.mjs';

const readRequest = (request: IncomingMessage) => request.method === 'GET' || request.method === 'HEAD';

function send(request: IncomingMessage, response: ServerResponse, status: number, mime: string, body: string) {
  response.writeHead(status, { 'Content-Type': `${mime}; charset=utf-8`, 'Content-Length': Buffer.byteLength(body) });
  response.end(request.method === 'HEAD' ? undefined : body);
}

const cleanUrls: Connect.NextHandleFunction = (request, response, next) => {
  if (!readRequest(request)) return next();
  const target = request.url ?? '/';
  // Interpret leading slashes as a local request path, including malformed duplicate slashes.
  const url = new URL(target.startsWith('/') ? 'http://localhost' + target : target, 'http://localhost');
  const pathname = url.pathname.replace(/^\/+/, '/').replace(/\/+$/, '');
  const clean = pathname.replace(/\/index(?:\.html)?$/, '').replace(/\.html$/, '') || '/';
  if (clean === url.pathname) return next();
  response.writeHead(308, { Location: clean + url.search }).end();
};

export function pageServer(): Plugin {
  return {
    name: 'dailypulse-pages',
    configureServer(server) {
      const publicOrigin = configuredOrigin(server.config.mode, server.config.root);
      return () => {
        // Vite has already handled module transforms, HMR and public assets.
        server.middlewares.use(cleanUrls);
        server.middlewares.use(async (request, response, next) => {
          if (!readRequest(request)) return next();
          try {
            const origin = publicOrigin ?? `http://${request.headers.host ?? 'localhost:3001'}`;
            const requestUrl = request.url ?? '/';
            const { pathname } = new URL(requestUrl, origin);
            const renderer = await server.ssrLoadModule('/src/entry-server.tsx') as typeof import('../src/entry-server');
            if (pathname === '/sitemap.xml') return send(request, response, 200, 'application/xml', renderer.sitemapXml(origin));
            if (pathname === '/robots.txt') return send(request, response, 200, 'text/plain', renderer.robotsTxt(origin));

            const page = renderer.renderPage(requestUrl, origin);
            if (page.redirect) {
              response.writeHead(308, { Location: page.redirect }).end();
              return;
            }
            const source = await readFile(path.join(server.config.root, 'index.html'), 'utf8');
            const template = await server.transformIndexHtml('/index.html', source, requestUrl);
            send(request, response, page.status, 'text/html', renderDocument(template, page));
          } catch (error) {
            if (error instanceof Error) server.ssrFixStacktrace(error);
            next(error);
          }
        });
      };
    },
    configurePreviewServer(server) {
      const dist = path.resolve(server.config.root, server.config.build.outDir);
      server.middlewares.use(cleanUrls);
      server.middlewares.use((request, _response, next) => {
        if (!readRequest(request)) return next();
        const url = new URL(request.url ?? '/', 'http://localhost');
        const file = url.pathname === '/' ? '/index.html' : `${url.pathname}.html`;
        if (url.pathname !== '/404' && !path.extname(url.pathname) && existsSync(path.join(dist, file))) {
          request.url = file + url.search;
        }
        next();
      });
      return () => {
        server.middlewares.use(async (request, response, next) => {
          if (!readRequest(request)) return next();
          try {
            send(request, response, 404, 'text/html', await readFile(path.join(dist, '404.html'), 'utf8'));
          } catch (error) {
            next(error);
          }
        });
      };
    },
  };
}
