import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'vite';
import { configuredOrigin, renderDocument } from './site.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const origin = configuredOrigin('production', root, process.argv.includes('--deployment')) ?? 'http://localhost:3001';

await build({ root });
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
// Keep the renderer beside installed packages for Node's module resolution and outside the public output.
const serverDir = await mkdtemp(path.join(root, 'node_modules', '.dailypulse-ssr-'));
try {
  await build({
    root,
    build: {
      ssr: 'src/entry-server.tsx',
      outDir: serverDir,
      copyPublicDir: false,
      rolldownOptions: { output: { entryFileNames: 'entry-server.mjs' } },
    },
  });
  const { renderPage, indexablePaths, sitemapXml, robotsTxt } = await import(pathToFileURL(path.join(serverDir, 'entry-server.mjs')).href);
  const paths = [...indexablePaths(), '/search', '/404'];
  for (const pathname of paths) {
    const page = renderPage(pathname, origin);
    if (page.status !== (pathname === '/404' ? 404 : 200)) {
      throw new Error(`Unexpected status ${page.status} while generating ${pathname}`);
    }
    const file = path.join(dist, pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`);
    if (!file.startsWith(dist + path.sep)) throw new Error(`Invalid output path for ${pathname}`);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, renderDocument(template, page));
  }
  await writeFile(path.join(dist, 'sitemap.xml'), sitemapXml(origin));
  await writeFile(path.join(dist, 'robots.txt'), robotsTxt(origin));
  console.log(`Generated ${paths.length} HTML pages, sitemap.xml, and robots.txt for ${origin}`);
} finally {
  await rm(serverDir, { recursive: true, force: true });
}
