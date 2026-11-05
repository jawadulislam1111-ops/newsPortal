import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import type { PageState } from './types';
import { canonicalPath, legacyHashPath, resolveRoute } from './lib/routes';
import './index.css';

function migrateBookmark() {
  const path = location.pathname === '/' && legacyHashPath(location.hash);
  if (!path) return false;
  location.replace(path);
  return true;
}

if (!migrateBookmark()) {
  window.addEventListener('hashchange', migrateBookmark);
  const root = document.getElementById('root')!;
  const initial = document.getElementById('page-state')?.textContent;
  let state: PageState;
  if (initial) {
    state = JSON.parse(initial) as PageState;
  } else {
    const route = resolveRoute(location.pathname, new URLSearchParams(location.search));
    const path = canonicalPath(route);
    state = { route, canonicalUrl: path && new URL(path, location.origin).href };
  }
  const app = <App state={state} />;
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
