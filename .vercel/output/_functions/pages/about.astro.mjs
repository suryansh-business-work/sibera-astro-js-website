import { c as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/Page_2SQK7YvS.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": "About | Sibera", "description": "Learn more about Sibera, our mission, and how we help you streamline your business operations with our all-in-one platform.", "pageUrl": "/about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gradient-to-b from-indigo-50 to-white min-h-screen pt-20 pb-12 px-4"> <!-- Banner Section --> <section class="max-w-5xl mx-auto flex flex-col items-center py-16"> <h2 class="text-lg font-mono text-blue-600 mb-2 tracking-wider uppercase text-center">Our Mission</h2> <h1 class="text-4xl md:text-6xl font-bold text-center mb-6 text-gray-900" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Empower businesses to achieve more.
</h1> <p class="text-gray-700 text-lg text-center mb-8 max-w-2xl">
We believe in simplifying business management by integrating essential tools into a single, powerful platform. Sibera helps teams transform the way they operate, making productivity a natural part of every workflow.
</p> <img src="https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg" alt="Team collaborating in office" class="rounded-2xl shadow-lg w-full max-w-2xl object-cover"> </section> <section class="max-w-4xl mx-auto p-8 mt-8"> <h1 class="text-3xl font-bold text-gray-900 mb-8 text-center">About Sibera</h1> <p class="text-gray-700 text-lg mb-10 text-center">
Sibera empowers businesses of all sizes to boost productivity and efficiency through our comprehensive suite of tools. From support ticketing to file management, our platform is designed to unlock the full potential of your team.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-indigo-50 rounded-xl p-6 shadow flex flex-col"> <h2 class="text-xl font-semibold text-indigo-700 mb-2 flex items-center gap-2"> <i class="fa-solid fa-bullseye text-indigo-400"></i>
Our Mission
</h2> <p class="text-gray-600">
We make advanced business tools accessible to everyone. Our platform helps you manage, automate, and scale your operations so you can focus on growth.
</p> </div> <div class="bg-indigo-50 rounded-xl p-6 shadow flex flex-col"> <h2 class="text-xl font-semibold text-indigo-700 mb-2 flex items-center gap-2"> <i class="fa-solid fa-gift text-indigo-400"></i>
What We Offer
</h2> <ul class="list-disc list-inside text-gray-600 space-y-1 ml-2"> <li>Comprehensive Support Ticket System</li> <li>Efficient Task Management</li> <li>Secure File Storage & Sharing</li> <li>Professional Invoicing</li> <li>Time Tracking & IoT Integration</li> </ul> </div> <div class="bg-indigo-50 rounded-xl p-6 shadow flex flex-col"> <h2 class="text-xl font-semibold text-indigo-700 mb-2 flex items-center gap-2"> <i class="fa-solid fa-chart-line text-indigo-400"></i>
Scalability
</h2> <p class="text-gray-600">
Whether you are a solopreneur or a large enterprise, Sibera scales with you. Our infrastructure is built to handle your growing needs without compromising performance.
</p> </div> <div class="bg-indigo-50 rounded-xl p-6 shadow flex flex-col"> <h2 class="text-xl font-semibold text-indigo-700 mb-2 flex items-center gap-2"> <i class="fa-solid fa-star text-indigo-400"></i>
Why Choose Sibera?
</h2> <ul class="list-disc list-inside text-gray-600 space-y-1 ml-2"> <li>Unified dashboard for all tools</li> <li>Transparent pricing & flexible plans</li> <li>Focus on security and reliability</li> <li>Continuous updates and new features</li> </ul> </div> </div> </section> </main> ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/about.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
