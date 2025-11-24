import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/Page_DeKniRRT.mjs';
import { $ as $$ThemeWrapper } from '../../chunks/ThemeWrapper_CgZKznlE.mjs';
export { renderers } from '../../renderers.mjs';

const $$Iot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "IoT | Sibera", "description": "Integrate and manage your IoT devices with Sibera." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeWrapper", $$ThemeWrapper, { "category": "IoT" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto py-16 px-4"> <h1 class="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
Integrated IoT Management
</h1> <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
Connect and manage your IoT devices directly from your business dashboard. Monitor status, receive alerts, and automate workflows.
</p> <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-microchip text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Device Monitoring</span> <span class="text-gray-600 text-sm">Real-time status updates for all connected devices.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-bell text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Smart Alerts</span> <span class="text-gray-600 text-sm">Get notified instantly when issues are detected.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-gears text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Automation</span> </li> </ul> <div class="text-center"> <a href="/signup" class="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
Get Started with IoT
</a> </div> </main> ` })} ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/iot.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/iot.astro";
const $$url = "/products/iot";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Iot,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
