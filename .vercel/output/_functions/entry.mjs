import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_cOFw5pLj.mjs';
import { manifest } from './manifest_CTxvHsL6.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/agents/_id_.astro.mjs');
const _page2 = () => import('./pages/agents.astro.mjs');
const _page3 = () => import('./pages/offres/add.astro.mjs');
const _page4 = () => import('./pages/offres/favoris.astro.mjs');
const _page5 = () => import('./pages/offres/prix.astro.mjs');
const _page6 = () => import('./pages/offres/surface.astro.mjs');
const _page7 = () => import('./pages/offres/_id_.astro.mjs');
const _page8 = () => import('./pages/offres.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/agents/[id].astro", _page1],
    ["src/pages/agents/index.astro", _page2],
    ["src/pages/offres/add.astro", _page3],
    ["src/pages/offres/favoris/index.astro", _page4],
    ["src/pages/offres/prix/index.astro", _page5],
    ["src/pages/offres/surface/index.astro", _page6],
    ["src/pages/offres/[id].astro", _page7],
    ["src/pages/offres/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "e9e9e2ef-be93-4e83-9853-524e5c5a1c41",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
