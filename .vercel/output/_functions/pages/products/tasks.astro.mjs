import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/Page_2SQK7YvS.mjs';
import { $ as $$ThemeWrapper } from '../../chunks/ThemeWrapper_BSNsu3Bt.mjs';
export { renderers } from '../../renderers.mjs';

const $$Tasks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "Tasks | Sibera", "description": "Manage projects and tasks efficiently with Sibera's task management module." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ThemeWrapper", $$ThemeWrapper, { "category": "Tools" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto py-16 px-4"> <h1 class="text-3xl md:text-5xl font-bold text-blue-700 mb-6 text-center">
Efficient Task Management
</h1> <p class="text-lg text-gray-700 mb-8 text-center max-w-2xl mx-auto">
Stay organized and keep your projects on track. Assign tasks, set deadlines, and collaborate with your team in real-time.
</p> <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-list-check text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Kanban Boards</span> <span class="text-gray-600 text-sm">Visualize your workflow with customizable boards.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-users text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Team Collaboration</span> <span class="text-gray-600 text-sm">Comment, attach files, and mention team members.</span> </li> <li class="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow flex flex-col items-center text-center"> <i class="fa-solid fa-calendar-check text-3xl text-blue-500 mb-3"></i> <span class="font-semibold text-blue-700 mb-1">Deadline Tracking</span> </li> </ul> <div class="text-center"> <a href="/signup" class="inline-block px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
Get Started with Tasks
</a> </div> </main> ` })} ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/tasks.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/products/tasks.astro";
const $$url = "/products/tasks";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tasks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
