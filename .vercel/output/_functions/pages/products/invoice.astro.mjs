import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/Page_2SQK7YvS.mjs';
import { $ as $$ThemeWrapper } from '../../chunks/ThemeWrapper_BSNsu3Bt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Invoice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Invoice | Sibera", "description": "Create professional invoices and manage billing with Sibera." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeWrapper", $$ThemeWrapper, { "category": "Finance & Accounts Suite" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto py-16 px-4"> <h1 class="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
Professional Invoicing
</h1> <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
Get paid faster with professional invoices. Automate recurring billing, track payments, and manage your finances effortlessly.
</p> <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-file-invoice-dollar text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Custom Templates</span> <span class="text-gray-600 text-sm">Create branded invoices that look professional.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-arrows-rotate text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Recurring Billing</span> <span class="text-gray-600 text-sm">Automate subscriptions and retainer billing.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-credit-card text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Online Payments</span> </li> </ul> <div class="text-center"> <a href="/signup" class="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
Get Started with Invoices
</a> </div> </main> ` })} ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/invoice.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/invoice.astro";
const $$url = "/products/invoice";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Invoice,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
