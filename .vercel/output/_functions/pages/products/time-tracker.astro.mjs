import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/Page_2SQK7YvS.mjs';
import { $ as $$ThemeWrapper } from '../../chunks/ThemeWrapper_BSNsu3Bt.mjs';
export { renderers } from '../../renderers.mjs';

const $$TimeTracker = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Time Tracker | Sibera", "description": "Track time and monitor productivity with Sibera's time tracking module." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeWrapper", $$ThemeWrapper, { "category": "Productivity Suite" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto py-16 px-4"> <h1 class="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
Track Time & Productivity
</h1> <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
Gain insights into how your team spends time. Track billable hours, monitor productivity, and generate detailed reports.
</p> <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-stopwatch text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Real-time Tracking</span> <span class="text-gray-600 text-sm">Start and stop timers with a single click.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-file-lines text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Timesheets</span> <span class="text-gray-600 text-sm">Review and approve employee timesheets easily.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-chart-bar text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Productivity Reports</span> </li> </ul> <div class="text-center"> <a href="/signup" class="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
Get Started with Time Tracking
</a> </div> </main> ` })} ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/time-tracker.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/time-tracker.astro";
const $$url = "/products/time-tracker";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TimeTracker,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
