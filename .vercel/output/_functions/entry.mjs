import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C8wPXRQ-.mjs';
import { manifest } from './manifest_DZBjWbbV.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/app/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/careers/openpositions.astro.mjs');
const _page5 = () => import('./pages/careers.astro.mjs');
const _page6 = () => import('./pages/contact.astro.mjs');
const _page7 = () => import('./pages/policies/cookies.astro.mjs');
const _page8 = () => import('./pages/policies/data.astro.mjs');
const _page9 = () => import('./pages/policies/privacy.astro.mjs');
const _page10 = () => import('./pages/policies/terms.astro.mjs');
const _page11 = () => import('./pages/pricing.astro.mjs');
const _page12 = () => import('./pages/products/files.astro.mjs');
const _page13 = () => import('./pages/products/invoice.astro.mjs');
const _page14 = () => import('./pages/products/iot.astro.mjs');
const _page15 = () => import('./pages/products/support.astro.mjs');
const _page16 = () => import('./pages/products/tasks.astro.mjs');
const _page17 = () => import('./pages/products/time-tracker.astro.mjs');
const _page18 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/app/[slug].astro", _page2],
    ["src/pages/blog.astro", _page3],
    ["src/pages/careers/OpenPositions.astro", _page4],
    ["src/pages/careers/index.astro", _page5],
    ["src/pages/contact.astro", _page6],
    ["src/pages/policies/cookies.astro", _page7],
    ["src/pages/policies/data.astro", _page8],
    ["src/pages/policies/privacy.astro", _page9],
    ["src/pages/policies/terms.astro", _page10],
    ["src/pages/pricing.astro", _page11],
    ["src/pages/products/files.astro", _page12],
    ["src/pages/products/invoice.astro", _page13],
    ["src/pages/products/iot.astro", _page14],
    ["src/pages/products/support.astro", _page15],
    ["src/pages/products/tasks.astro", _page16],
    ["src/pages/products/time-tracker.astro", _page17],
    ["src/pages/index.astro", _page18]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f4b100ee-e910-4722-a736-a4f2b3775e56",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
