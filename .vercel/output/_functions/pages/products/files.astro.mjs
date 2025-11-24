import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/Page_DeKniRRT.mjs';
import { $ as $$ThemeWrapper } from '../../chunks/ThemeWrapper_CgZKznlE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Files = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "File Manager | Sibera", "description": "Securely store, share, and manage your business files with Sibera." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeWrapper", $$ThemeWrapper, { "category": "Tools" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto py-16 px-4"> <h1 class="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
Secure File Management
</h1> <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
Centralize your documents and files. Access them from anywhere, share securely with clients, and keep everything organized.
</p> <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-cloud-arrow-up text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Cloud Storage</span> <span class="text-gray-600 text-sm">Secure cloud storage for all your business files.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-share-nodes text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Easy Sharing</span> <span class="text-gray-600 text-sm">Share files with external stakeholders securely.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-lock text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Advanced Security</span> </li> </ul> <div class="text-center"> <a href="/signup" class="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
Get Started with Files
</a> </div> </main> ` })} ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/files.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/files.astro";
const $$url = "/products/files";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Files,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
