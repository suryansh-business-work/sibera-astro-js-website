import { c as createComponent, m as maybeRenderHead, r as renderTemplate, f as renderComponent } from '../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Page } from '../chunks/Page_DeKniRRT.mjs';
export { renderers } from '../renderers.mjs';

const $$HomeBanner = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-screen min-h-[80vh] p-20 px-5 group" style="background: linear-gradient(135deg, #f6fafd 0%, #eaf1fb 60%, #e0e7ff 100%); position: relative; overflow: hidden;" data-astro-cid-hmhpxkkc>  <div class="flex flex-col md:flex-row items-center justify-between overflow-hidden relative max-w-7xl mx-auto gap-5" data-astro-cid-hmhpxkkc> <div class="relative z-20 w-full flex flex-col md:flex-row items-center justify-between" data-astro-cid-hmhpxkkc> <div class="flex-1 flex flex-col items-start justify-center px-6 md:px-0 max-w-7xl mx-auto" data-astro-cid-hmhpxkkc> <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-[#232b3a] items-center gap-3 mb-10" style="letter-spacing: -0.01em;" data-astro-cid-hmhpxkkc>
The <span class="text-blue-500 font-bold italic" data-astro-cid-hmhpxkkc>Ultimate</span> Business
          Management Solution
</h1> <ul class="mb-6 space-y-2 text-base md:text-lg text-[#232b3a]" data-astro-cid-hmhpxkkc> <li class="flex items-center gap-2" data-astro-cid-hmhpxkkc> <i class="fa-solid fa-circle-check text-blue-500" data-astro-cid-hmhpxkkc></i> <span data-astro-cid-hmhpxkkc><b data-astro-cid-hmhpxkkc>All-in-one platform.</b> Support, Tasks, Files, Invoices, Time Tracking, and IoT.</span> </li> <li class="flex items-center gap-2" data-astro-cid-hmhpxkkc> <i class="fa-solid fa-server text-blue-500" data-astro-cid-hmhpxkkc></i> <span data-astro-cid-hmhpxkkc><b data-astro-cid-hmhpxkkc>Seamless Integration.</b> Connect all your business operations in one place.</span> </li> <li class="flex items-center gap-2" data-astro-cid-hmhpxkkc> <i class="fa-solid fa-chart-line text-blue-400" data-astro-cid-hmhpxkkc></i> <span data-astro-cid-hmhpxkkc>Real-time analytics and reporting for better decision making.</span> </li> </ul> <div class="mb-6" data-astro-cid-hmhpxkkc> <span class="block text-lg font-semibold mb-2 text-[#232b3a]" data-astro-cid-hmhpxkkc>I want to:</span> <div class="flex flex-col md:flex-row gap-4" data-astro-cid-hmhpxkkc> <a href="http://localhost:5173/signup" class="flex-1 px-6 py-4 rounded-2xl border-2 border-blue-200 bg-white text-blue-700 font-semibold shadow hover:border-blue-400 hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer flex items-center justify-center gap-2 text-center no-underline" aria-label="Get Started" data-astro-cid-hmhpxkkc> <i class="fa-solid fa-rocket" data-astro-cid-hmhpxkkc></i> Get Started
</a> <a href="/contact" class="flex-1 px-6 py-4 rounded-2xl border-2 border-blue-200 bg-white text-blue-700 font-semibold shadow hover:border-blue-400 hover:bg-blue-50 transition focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer flex items-center justify-center gap-2 text-center no-underline" aria-label="Contact Sales" data-astro-cid-hmhpxkkc> <i class="fa-solid fa-envelope" data-astro-cid-hmhpxkkc></i> Contact Sales
</a> </div> </div> <form class="flex flex-col md:flex-row gap-4 w-full max-w-lg mb-2" autocomplete="on" action="http://localhost:5173/signup" data-astro-cid-hmhpxkkc> <label class="sr-only" data-astro-cid-hmhpxkkc>Email</label> <input id="signup-input" type="email" placeholder="Enter your email" class="flex-1 px-5 py-3 rounded-2xl border border-blue-200 bg-white text-[#232b3a] text-base shadow focus:ring-2 focus:ring-blue-300 focus:outline-none" required aria-label="Enter your email" data-astro-cid-hmhpxkkc> <button type="submit" class="px-8 py-3 rounded-2xl bg-blue-600 text-white font-bold shadow hover:bg-blue-700 transition cursor-pointer" aria-label="Start Free Trial" data-astro-cid-hmhpxkkc>
Start Free Trial
</button> </form> <div class="flex items-center gap-2 mt-2 text-[#232b3a]" data-astro-cid-hmhpxkkc> <span data-astro-cid-hmhpxkkc>Or sign up with</span> <button class="rounded-full bg-white border border-blue-200 shadow p-2 hover:bg-blue-50 transition cursor-pointer" aria-label="Sign in with Google" data-astro-cid-hmhpxkkc> <i class="fa-brands fa-google text-lg" data-astro-cid-hmhpxkkc></i> </button> </div> </div> </div> <div class="w-full flex justify-center items-start mb-8 relative z-20" data-astro-cid-hmhpxkkc> <!-- Placeholder for Dashboard Image --> <div class="w-full h-64 md:h-96 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-blue-100" data-astro-cid-hmhpxkkc> <span class="text-gray-400 font-medium" data-astro-cid-hmhpxkkc>Dashboard Preview</span> </div> </div> </div> </section>`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/banners/HomeBanner.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HomeBanner", $$HomeBanner, {})} ${maybeRenderHead()}<section class="w-screen py-16 bg-white flex flex-col items-center justify-center"> <div class="max-w-6xl w-full px-6 mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-8" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
Integrated <span class="text-blue-600 font-bold">Modules</span> </h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <div class="flex flex-col items-center bg-[#f6fafd] rounded-2xl shadow p-8 hover:shadow-lg transition"> <span class="material-symbols-rounded text-blue-600 text-5xl mb-4" style="font-size: 3.5rem;">headset_mic</span> <h3 class="text-xl font-semibold mb-2" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
Support
</h3> <p class="text-gray-600 text-center" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Streamline customer support with an advanced ticketing system.
</p> </div> <div class="flex flex-col items-center bg-[#f6fafd] rounded-2xl shadow p-8 hover:shadow-lg transition"> <span class="material-symbols-rounded text-blue-600 text-5xl mb-4" style="font-size: 3.5rem;">task</span> <h3 class="text-xl font-semibold mb-2" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
Tasks
</h3> <p class="text-gray-600 text-center" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Manage projects and tasks efficiently with your team.
</p> </div> <div class="flex flex-col items-center bg-[#f6fafd] rounded-2xl shadow p-8 hover:shadow-lg transition"> <span class="material-symbols-rounded text-blue-600 text-5xl mb-4" style="font-size: 3.5rem;">folder_open</span> <h3 class="text-xl font-semibold mb-2" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
File Manager
</h3> <p class="text-gray-600 text-center" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Securely store, share, and manage your business files.
</p> </div> <div class="flex flex-col items-center bg-[#f6fafd] rounded-2xl shadow p-8 hover:shadow-lg transition"> <span class="material-symbols-rounded text-blue-600 text-5xl mb-4" style="font-size: 3.5rem;">receipt_long</span> <h3 class="text-xl font-semibold mb-2" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
Invoice
</h3> <p class="text-gray-600 text-center" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Create and manage professional invoices and billing.
</p> </div> <div class="flex flex-col items-center bg-[#f6fafd] rounded-2xl shadow p-8 hover:shadow-lg transition"> <span class="material-symbols-rounded text-blue-600 text-5xl mb-4" style="font-size: 3.5rem;">timer</span> <h3 class="text-xl font-semibold mb-2" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
Time Tracker
</h3> <p class="text-gray-600 text-center" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Monitor productivity and track time spent on tasks.
</p> </div> <div class="flex flex-col items-center bg-[#f6fafd] rounded-2xl shadow p-8 hover:shadow-lg transition"> <span class="material-symbols-rounded text-blue-600 text-5xl mb-4" style="font-size: 3.5rem;">router</span> <h3 class="text-xl font-semibold mb-2" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
IoT
</h3> <p class="text-gray-600 text-center" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Integrate and manage your IoT devices seamlessly.
</p> </div> </div> </div> </section> <section class="w-screen bg-[#f6fafd] py-16 flex flex-col items-center justify-center"> <h2 class="text-3xl md:text-6xl font-bold text-center mb-20" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif'; color: #22223b;">
Sibera saves up to${" "} <span class="text-blue-600 font-bold">20%</span> operational costs
</h2> <div class="flex flex-col md:flex-row justify-center items-stretch gap-8 md:gap-0 w-full max-w-5xl"> <div class="flex-1 flex flex-col items-center px-6 border-b md:border-b-0 md:border-r border-blue-100 last:border-none"> <span class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">30%</span> <span class="text-base text-gray-800 text-center mb-1 font-medium">Increase in team productivity with integrated tools.</span> </div> <div class="flex-1 flex flex-col items-center px-6 border-b md:border-b-0 md:border-r border-blue-100 last:border-none"> <span class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">50+</span> <span class="text-base text-gray-800 text-center mb-1 font-medium">Hours saved per month on administrative tasks.</span> </div> <div class="flex-1 flex flex-col items-center px-6 border-b md:border-b-0 md:border-r border-blue-100 last:border-none"> <span class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</span> <span class="text-base text-gray-800 text-center mb-1 font-medium">Support availability with our automated ticketing system.</span> </div> <div class="flex-1 flex flex-col items-center px-6"> <span class="text-4xl md:text-5xl font-bold text-blue-600 mb-2">ROI</span> <span class="text-base text-gray-800 text-center mb-1 font-medium">See positive ROI within the first 3 months of adoption.</span> </div> </div> <a href="#" class="mt-10 flex items-center gap-2 text-blue-600 font-medium text-lg hover:underline transition" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
See Sibera in action
<span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100"> <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </span> </a> </section> <section class="w-full py-16 px-4 bg-gradient-to-br from-[#f6fafd] via-[#eaf1fb] to-[#e0e7ff]"> <h2 class="text-3xl md:text-4xl font-bold mb-6 text-[#151c28] text-center mb-10">
Why Choose Sibera?
</h2> <div class="max-w-6xl mx-auto flex flex-col gap-16"> <!-- 1. Unified Dashboard --> <div class="flex flex-col md:flex-row items-center gap-10"> <div class="flex-1 flex justify-center mb-6 md:mb-0"> <div class="rounded-2xl shadow-xl w-full max-w-md h-64 md:h-72 bg-white flex items-center justify-center"> <span class="text-gray-400">Unified Dashboard Image</span> </div> </div> <div class="flex-1"> <h3 class="text-2xl font-bold text-[#151c28] mb-2 flex items-center gap-2"> <i class="fa-solid fa-layer-group text-blue-500"></i>
Unified Dashboard
</h3> <p class="text-gray-700 text-lg">
Access all your business tools from a single, intuitive dashboard. No more switching between multiple apps to get work done.
</p> </div> </div> <!-- 2. Scalable Infrastructure --> <div class="flex flex-col md:flex-row-reverse items-center gap-10"> <div class="flex-1 flex justify-center mb-6 md:mb-0"> <div class="rounded-2xl shadow-xl w-full max-w-md h-64 md:h-72 bg-white flex items-center justify-center"> <span class="text-gray-400">Scalable Infrastructure Image</span> </div> </div> <div class="flex-1"> <h3 class="text-2xl font-bold text-[#151c28] mb-2 flex items-center gap-2"> <i class="fa-solid fa-chart-line text-blue-500"></i>
Scalable Infrastructure
</h3> <p class="text-gray-700 text-lg">
Built to grow with your business. Whether you're a startup or an enterprise, Sibera scales to meet your needs.
</p> </div> </div> <!-- 3. Secure & Reliable --> <div class="flex flex-col md:flex-row items-center gap-10"> <div class="flex-1 flex justify-center mb-6 md:mb-0"> <div class="rounded-2xl shadow-xl w-full max-w-md h-64 md:h-72 bg-white flex items-center justify-center"> <span class="text-gray-400">Security Image</span> </div> </div> <div class="flex-1"> <h3 class="text-2xl font-bold text-[#151c28] mb-2 flex items-center gap-2"> <i class="fa-solid fa-shield-halved text-blue-500"></i>
Secure & Reliable
</h3> <p class="text-gray-700 text-lg">
Enterprise-grade security ensures your data is safe. Reliable uptime keeps your business running smoothly 24/7.
</p> </div> </div> </div> </section> <section class="w-full py-16 px-4 bg-gradient-to-br from-[#eaf1fb] via-[#f6fafd] to-[#e0e7ff]"> <div class="max-w-6xl mx-auto"> <h2 class="text-3xl md:text-4xl font-bold text-center text-[#151c28] mb-12">
Sibera Ecosystem
</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- Business Tools --> <div class="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition"> <i class="fa-solid fa-briefcase text-4xl text-blue-500 mb-4"></i> <h3 class="text-xl font-semibold text-[#151c28] mb-2">
Business Tools
</h3> <p class="text-gray-600">
Essential tools for daily operations including invoicing, file management, and time tracking.
</p> </div> <!-- Team Collaboration --> <div class="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition"> <i class="fa-solid fa-users text-4xl text-blue-500 mb-4"></i> <h3 class="text-xl font-semibold text-[#151c28] mb-2">Team Collaboration</h3> <p class="text-gray-600">
Enhance teamwork with shared tasks, files, and real-time updates.
</p> </div> <!-- Customer Support --> <div class="bg-white rounded-2xl shadow p-8 flex flex-col items-center text-center hover:shadow-lg transition"> <i class="fa-solid fa-headset text-4xl text-blue-500 mb-4"></i> <h3 class="text-xl font-semibold text-[#151c28] mb-2">Customer Support</h3> <p class="text-gray-600">
Provide exceptional support with our integrated ticketing system.
</p> </div> </div> </div> </section> <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded" rel="stylesheet"> ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
