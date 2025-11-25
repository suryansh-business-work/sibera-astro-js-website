import { c as createComponent, b as createAstro, r as renderTemplate, a as addAttribute, m as maybeRenderHead, f as renderComponent } from '../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
import { $ as $$Page } from '../chunks/Page_2SQK7YvS.mjs';
import { $ as $$OpenPositions } from '../chunks/OpenPositions_C16abFtG.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$DynamicHorizontalTab = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DynamicHorizontalTab;
  const { heading = "Agentic AI Types", tabs = [] } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="w-full max-w-5xl mx-auto my-8 p-5" id="simple-horizontal-tabs" data-astro-cid-pfwcz5o5> <!-- Tab Heading --> <h2 class="text-2xl font-bold mb-8 text-gray-800 text-center" data-astro-cid-pfwcz5o5>', '</h2> <!-- Tab Buttons --> <div class="flex border-b border-gray-200 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style="scrollbar-width: thin; white-space: nowrap; overflow-y: hidden; max-height: 60px;" role="tablist"', ' id="tablist-scroll" data-astro-cid-pfwcz5o5> ', ' </div> <!-- Tab Content --> <div class="p-6 bg-white border border-gray-100 rounded shadow tab-fade tab-fade-active" id="tab-content" data-tab-index="0"', ' role="tabpanel" tabindex="0" aria-labelledby="tab-btn-0" data-astro-cid-pfwcz5o5> ', ` </div> </div> <script>
  document.addEventListener("DOMContentLoaded", function () {
    const tabBtns = document.querySelectorAll("#simple-horizontal-tabs .tab-btn");
    const tabContent = document.getElementById("tab-content");
    const tabsData = JSON.parse(tabContent.getAttribute("data-tabs"));
    let current = 0;

    function activateTab(idx, focus = true, doScroll = false) {
      tabBtns.forEach((btn, i) => {
        btn.classList.toggle("border-blue-600", i === idx);
        btn.classList.toggle("text-blue-600", i === idx);
        btn.classList.toggle("bg-blue-900", i === idx); // dark background on selected
        btn.classList.toggle("bg-blue-50", i === idx && false); // remove light bg if present
        // Update heading and description color
        const headingDiv = btn.querySelector('.font-semibold');
        const descDiv = btn.querySelector('.text-xs');
        if (headingDiv && descDiv) {
          if (i === idx) {
            headingDiv.classList.add("text-white");
            descDiv.classList.remove("text-gray-400");
            descDiv.classList.add("text-white/80");
          } else {
            headingDiv.classList.remove("text-white");
            descDiv.classList.remove("text-white/80");
            descDiv.classList.add("text-gray-400");
          }
        }
        btn.setAttribute("aria-selected", i === idx ? "true" : "false");
        btn.setAttribute("tabindex", i === idx ? "0" : "-1");
        if (i === idx && focus) btn.focus();
      });

      // Animation: fade out, then change content, then fade in
      tabContent.classList.remove("tab-fade-active");
      setTimeout(() => {
        tabContent.setAttribute("data-tab-index", idx);
        tabContent.setAttribute("aria-labelledby", \`tab-btn-\${idx}\`);
        tabContent.innerHTML = tabsData[idx].content;
        tabContent.classList.add("tab-fade-active");
      }, 200);

      // Only scroll into view if requested (i.e., on click)
      if (doScroll) {
        tabBtns[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }

      current = idx;
    }

    tabBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => activateTab(idx, true, true)); // scroll on click
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          activateTab((idx + 1) % tabBtns.length);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          activateTab((idx - 1 + tabBtns.length) % tabBtns.length);
        } else if (e.key === "Home") {
          e.preventDefault();
          activateTab(0);
        } else if (e.key === "End") {
          e.preventDefault();
          activateTab(tabBtns.length - 1);
        }
      });
    });

    // Ensure tab selection is correct on page load
    activateTab(0, false);
  });
<\/script>`], ["", '<div class="w-full max-w-5xl mx-auto my-8 p-5" id="simple-horizontal-tabs" data-astro-cid-pfwcz5o5> <!-- Tab Heading --> <h2 class="text-2xl font-bold mb-8 text-gray-800 text-center" data-astro-cid-pfwcz5o5>', '</h2> <!-- Tab Buttons --> <div class="flex border-b border-gray-200 mb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100" style="scrollbar-width: thin; white-space: nowrap; overflow-y: hidden; max-height: 60px;" role="tablist"', ' id="tablist-scroll" data-astro-cid-pfwcz5o5> ', ' </div> <!-- Tab Content --> <div class="p-6 bg-white border border-gray-100 rounded shadow tab-fade tab-fade-active" id="tab-content" data-tab-index="0"', ' role="tabpanel" tabindex="0" aria-labelledby="tab-btn-0" data-astro-cid-pfwcz5o5> ', ` </div> </div> <script>
  document.addEventListener("DOMContentLoaded", function () {
    const tabBtns = document.querySelectorAll("#simple-horizontal-tabs .tab-btn");
    const tabContent = document.getElementById("tab-content");
    const tabsData = JSON.parse(tabContent.getAttribute("data-tabs"));
    let current = 0;

    function activateTab(idx, focus = true, doScroll = false) {
      tabBtns.forEach((btn, i) => {
        btn.classList.toggle("border-blue-600", i === idx);
        btn.classList.toggle("text-blue-600", i === idx);
        btn.classList.toggle("bg-blue-900", i === idx); // dark background on selected
        btn.classList.toggle("bg-blue-50", i === idx && false); // remove light bg if present
        // Update heading and description color
        const headingDiv = btn.querySelector('.font-semibold');
        const descDiv = btn.querySelector('.text-xs');
        if (headingDiv && descDiv) {
          if (i === idx) {
            headingDiv.classList.add("text-white");
            descDiv.classList.remove("text-gray-400");
            descDiv.classList.add("text-white/80");
          } else {
            headingDiv.classList.remove("text-white");
            descDiv.classList.remove("text-white/80");
            descDiv.classList.add("text-gray-400");
          }
        }
        btn.setAttribute("aria-selected", i === idx ? "true" : "false");
        btn.setAttribute("tabindex", i === idx ? "0" : "-1");
        if (i === idx && focus) btn.focus();
      });

      // Animation: fade out, then change content, then fade in
      tabContent.classList.remove("tab-fade-active");
      setTimeout(() => {
        tabContent.setAttribute("data-tab-index", idx);
        tabContent.setAttribute("aria-labelledby", \\\`tab-btn-\\\${idx}\\\`);
        tabContent.innerHTML = tabsData[idx].content;
        tabContent.classList.add("tab-fade-active");
      }, 200);

      // Only scroll into view if requested (i.e., on click)
      if (doScroll) {
        tabBtns[idx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }

      current = idx;
    }

    tabBtns.forEach((btn, idx) => {
      btn.addEventListener("click", () => activateTab(idx, true, true)); // scroll on click
      btn.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          activateTab((idx + 1) % tabBtns.length);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          activateTab((idx - 1 + tabBtns.length) % tabBtns.length);
        } else if (e.key === "Home") {
          e.preventDefault();
          activateTab(0);
        } else if (e.key === "End") {
          e.preventDefault();
          activateTab(tabBtns.length - 1);
        }
      });
    });

    // Ensure tab selection is correct on page load
    activateTab(0, false);
  });
<\/script>`])), maybeRenderHead(), heading, addAttribute(heading, "aria-label"), tabs.map((tab, idx) => renderTemplate`<button type="button"${addAttribute(`cursor-pointer tab-btn px-4 py-2 -mb-px border-b-2 border-transparent text-gray-600 focus:outline-none transition-colors flex-shrink-0 ${idx === 0 ? "border-blue-600 text-blue-600 bg-blue-900" : ""}`, "class")}${addAttribute(idx, "data-tab")}${addAttribute(idx === 0, "aria-selected")}${addAttribute(`tab-panel-${idx}`, "aria-controls")}${addAttribute(`tab-btn-${idx}`, "id")} role="tab"${addAttribute(idx === 0 ? 0 : -1, "tabindex")} style="white-space: nowrap;" data-astro-cid-pfwcz5o5> <div${addAttribute(`font-semibold ${idx === 0 ? "text-white" : ""}`, "class")} data-astro-cid-pfwcz5o5>${tab.label}</div> <div${addAttribute(`text-xs ${idx === 0 ? "text-white/80" : "text-gray-400"}`, "class")} data-astro-cid-pfwcz5o5>${tab.description}</div> </button>`), addAttribute(JSON.stringify(tabs), "data-tabs"), tabs[0]?.content);
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/dynamic-components/DynamicHorizontalTab.astro", void 0);

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="max-w-xl mx-auto py-8 px-4"> <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
Get in Touch
</h2> <p class="text-center text-gray-600 mb-10">
Have questions or want to work with us? Fill out the form below and our team
    will get back to you soon.
</p> <form class="bg-white rounded-xl shadow p-8 space-y-6" name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true"> <input type="hidden" name="form-name" value="contact"> <div> <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label> <input type="text" id="name" name="name" required class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"> </div> <div> <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label> <input type="email" id="email" name="email" required class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"> </div> <div> <label for="phone" class="block text-gray-700 font-semibold mb-2">Phone <span class="text-gray-400 font-normal">(optional)</span></label> <input type="tel" id="phone" name="phone" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"> </div> <div> <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label> <textarea id="message" name="message" rows="5" required class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea> </div> <div> <label class="inline-flex items-center gap-2"> <input type="checkbox" name="newsletter" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"> <span class="text-gray-700">Subscribe to our newsletter <span class="text-gray-400 font-normal">(optional)</span></span> </label> </div> <div> <label class="inline-flex items-center gap-2"> <input type="checkbox" name="terms" required class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"> <span class="text-gray-700">
I agree to the <a href="/privacy-policy" class="underline text-indigo-700 hover:text-indigo-900" target="_blank">terms and conditions</a> </span> </label> </div> <div> <div data-netlify-recaptcha="true"></div> </div> <button type="submit" class="btn w-full">Send Message</button> </form> </section>`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/forms/ContactForm.astro", void 0);

const $$Astro = createAstro();
const $$DynamicSliderImageStack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DynamicSliderImageStack;
  const { images = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative"> <div class="absolute inset-0 z-0 pointer-events-none" style="background: linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%); opacity: 0.7;"></div> <div class="relative flex flex-wrap justify-center gap-4 md:gap-8 my-10 md:my-20 mt-10 md:mt-40"> ${images.map((img, idx) => renderTemplate`<div${addAttribute(`relative rounded-2xl overflow-hidden shadow-xl border-4 border-white transition-transform duration-300
          ${idx === 0 ? "z-30 scale-110 md:-rotate-3" : ""}
          ${idx === 1 ? "z-20 -ml-8 md:ml-0 md:-mt-10 md:rotate-2" : ""}
          ${idx === 2 ? "z-10 -ml-8 md:ml-0 md:-mt-20 md:rotate-6" : ""}
          ${idx > 2 ? "z-0 -ml-8 md:ml-0 md:-mt-24 md:rotate-0" : ""}
          w-40 h-56 md:w-56 md:h-80
        `, "class")}${addAttribute(`left: ${idx * 0.5}rem`, "style")}> <img${addAttribute(img.src, "src")}${addAttribute(img.alt, "alt")} class="w-full h-full object-cover" loading="lazy"> </div>`)} </div> </section>`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/dynamic-components/DynamicSliderImageStack.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "metaTitle": "Careers at Botify | AI, SaaS & Automation Jobs", "metaDescription": "Explore open positions at Botify. Join our team of AI, SaaS, and automation experts. Apply for remote jobs in engineering, product, and more.", "metaKeywords": "careers, jobs, AI jobs, SaaS jobs, automation, remote jobs, Botify, hiring", "metaImage": "https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "DynamicSliderImageStack", $$DynamicSliderImageStack, { "images": [
    {
      src: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg",
      alt: "Teamwork at Botify"
    },
    {
      src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      alt: "Remote Collaboration"
    },
    {
      src: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      alt: "Innovation in AI"
    },
    {
      src: "https://images.pexels.com/photos/776615/pexels-photo-776615.jpeg",
      alt: "Growth and Learning"
    },
    {
      src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      alt: "Diverse Team"
    },
    {
      src: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg",
      alt: "Creative Workspace"
    }
  ] })} ${renderComponent($$result2, "OpenPositions", $$OpenPositions, {})} ${renderComponent($$result2, "CareerForm", $$ContactForm, {})} ${maybeRenderHead()}<div class="text-center mt-12"> <p class="text-gray-600">
Don't see a role that fits? Email your resume to <a href="mailto:careers@botify.life" class="text-[#0071e3] underline">careers@botify.life</a> </p> </div> ${renderComponent($$result2, "DynamicHorizontalTab", $$DynamicHorizontalTab, { "heading": "Why Join Botify?", "tabs": [
    {
      label: "Why Botify",
      description: "Our mission and vision",
      content: `<div>
                <h3 class="text-xl font-bold mb-2 text-[#0071e3]">Purpose-Driven Innovation</h3>
                <p>
                  At Botify, we are passionate about building AI and automation solutions that empower businesses to thrive in a digital world. Our mission is to make advanced technology accessible, ethical, and impactful for organizations of all sizes.
                </p>
                <ul class="list-disc pl-5 mt-3 text-gray-700">
                  <li>Cutting-edge projects in AI, SaaS, and automation</li>
                  <li>Direct impact on real-world business challenges</li>
                  <li>Growth opportunities in a fast-scaling company</li>
                </ul>
              </div>`
    },
    {
      label: "Our Work Culture",
      description: "How we work together",
      content: `<div>
                <h3 class="text-xl font-bold mb-2 text-[#0071e3]">Collaborative & Inclusive</h3>
                <p>
                  We foster a culture of openness, respect, and continuous learning. Our remote-first team values flexibility, transparency, and work-life balance. We celebrate diversity and believe the best ideas come from empowered, happy people.
                </p>
                <ul class="list-disc pl-5 mt-3 text-gray-700">
                  <li>Remote-friendly and flexible schedules</li>
                  <li>Regular team events and knowledge sharing</li>
                  <li>Support for personal and professional growth</li>
                </ul>
              </div>`
    },
    {
      label: "Benefits",
      description: "Perks & advantages",
      content: `<div>
                <h3 class="text-xl font-bold mb-2 text-[#0071e3]">We Invest in You</h3>
                <p>
                  We offer competitive compensation, health benefits, learning budgets, and the tools you need to do your best work. Your well-being and success are our priorities.
                </p>
                <ul class="list-disc pl-5 mt-3 text-gray-700">
                  <li>Competitive salary & performance bonuses</li>
                  <li>Health insurance & wellness programs</li>
                  <li>Learning & development support</li>
                </ul>
              </div>`
    }
  ] })} ` })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/careers/index.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/careers/index.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
