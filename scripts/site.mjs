import { loadEnv } from 'vite';

export function configuredOrigin(mode, root, requirePublic = false) {
  const env = loadEnv(mode, root, ['SITE_URL', 'VERCEL', 'VITE_VERCEL']);
  const projectDomain = env.VERCEL_PROJECT_PRODUCTION_URL || env.VITE_VERCEL_PROJECT_PRODUCTION_URL;
  const value = env.SITE_URL?.trim() || (projectDomain && `https://${projectDomain}`);
  const environment = env.VERCEL_ENV || env.VITE_VERCEL_ENV;
  const deploying = requirePublic || environment === 'production' || environment === 'preview' || (env.VERCEL === '1' && environment !== 'development');

  if (!value) {
    if (deploying) throw new Error('Set SITE_URL to your public HTTPS origin or enable Vercel system environment variables before building.');
    return undefined;
  }

  const url = new URL(value);
  const local = ['localhost', '0.0.0.0', '[::]', '[::1]'].includes(url.hostname)
    || url.hostname.endsWith('.localhost') || /^127\.\d+\.\d+\.\d+$/.test(url.hostname);
  if (url.username || url.password || url.pathname !== '/' || url.search || url.hash) {
    throw new Error('SITE_URL must contain only the origin, for example https://news.example.com.');
  }
  if ((deploying && local) || (url.protocol !== 'https:' && !(local && url.protocol === 'http:'))) {
    throw new Error('Use a public HTTPS origin for deployments. HTTP is supported for local development.');
  }
  return url.origin;
}

export function renderDocument(template, page) {
  if (!template.includes('<!--page-head-->') || !template.includes('<!--page-html-->')) {
    throw new Error('The HTML template is missing its page-head or page-html placeholder.');
  }
  return template
    .replace('<!--page-head-->', () => page.head)
    .replace('<!--page-html-->', () => page.html);
}
