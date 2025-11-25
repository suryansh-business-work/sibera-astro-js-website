import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/Page_2SQK7YvS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Cookies = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Cookies Policy | Botify Life", "description": "Read our cookies policy for Botify Life.", "pageUrl": "cookies-policy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-3xl mx-auto py-16 px-4"> <h1 class="text-3xl md:text-4xl font-bold mb-6 text-blue-700">Cookies Policy</h1> <p class="mb-6 text-gray-700">
This Cookies Policy explains how Botify Life ("we", "us", or "our") uses cookies and similar technologies on our website.
</p> <h2 class="text-xl font-semibold mt-8 mb-2 text-blue-600">What Are Cookies?</h2> <p class="mb-4 text-gray-700">
Cookies are small text files stored on your device by your web browser. They help us remember your preferences, improve your experience, and analyze how our website is used.
</p> <h2 class="text-xl font-semibold mt-8 mb-2 text-blue-600">How We Use Cookies</h2> <ul class="list-disc list-inside mb-4 text-gray-700 space-y-1"> <li>To remember your preferences and settings</li> <li>To keep you logged in and secure</li> <li>To analyze website traffic and usage patterns</li> <li>To improve our services and website functionality</li> </ul> <h2 class="text-xl font-semibold mt-8 mb-2 text-blue-600">Managing Cookies</h2> <p class="mb-4 text-gray-700">
You can control and delete cookies through your browser settings. Please note that disabling cookies may affect your experience and some features may not work as intended.
</p> <h2 class="text-xl font-semibold mt-8 mb-2 text-blue-600">Updates to This Policy</h2> <p class="mb-4 text-gray-700">
We may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated revision date.
</p> <p class="mt-8 text-gray-600">
If you have any questions about our use of cookies, please contact us at <a href="/contact" class="text-blue-600 underline">Contact Us</a>.
</p> </main> ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/policies/cookies.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/policies/cookies.astro";
const $$url = "/policies/cookies";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cookies,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
