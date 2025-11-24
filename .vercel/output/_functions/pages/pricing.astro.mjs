import { c as createComponent, b as createAstro, f as renderComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/Page_DeKniRRT.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const {
    title = "Pricing | Sibera",
    description = "Flexible pricing plans for every stage. Choose the plan that fits your business needs and start streamlining your operations with Sibera.",
    image = "/favicon.svg"
  } = Astro2.props;
  function getYearly(monthly, yearly, discount) {
    if (typeof monthly === "number" && discount) {
      return Math.round(monthly * 12 * (1 - discount));
    }
    return yearly;
  }
  const YEARLY_DISCOUNT = 0.2;
  const plans = [
    {
      name: "Free",
      monthly: 0,
      yearly: 0,
      features: [
        "Access to all modules",
        "5 Support Tickets/mo",
        "1GB File Storage",
        "Basic Task Management",
        "Community Support"
      ],
      cta: "Start Free",
      highlight: false,
      discount: 0
    },
    {
      name: "Basic",
      monthly: 15,
      yearly: getYearly(15, 150, YEARLY_DISCOUNT),
      features: [
        "Unlimited Support Tickets",
        "10GB File Storage",
        "Advanced Task Management",
        "5 Team Members",
        "Email Support"
      ],
      cta: "Choose Basic",
      discount: YEARLY_DISCOUNT
    },
    {
      name: "Pro",
      monthly: 35,
      yearly: getYearly(35, 350, YEARLY_DISCOUNT),
      features: [
        "Unlimited Support Tickets",
        "100GB File Storage",
        "Advanced Task & Project Management",
        "20 Team Members",
        "Priority Email Support"
      ],
      cta: "Choose Pro",
      highlight: true,
      discount: YEARLY_DISCOUNT
    },
    {
      name: "Enterprise",
      monthly: "Custom",
      yearly: "Custom",
      features: [
        "Unlimited Everything",
        "1TB+ File Storage",
        "Dedicated Account Manager",
        "24/7 Phone Support",
        "Custom Integrations"
      ],
      cta: "Contact Sales"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Page", $$Page, { "title": title, "description": description, "image": image, "pageUrl": "/pricing" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<main class="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-16 px-4 pt-24"> <section class="max-w-7xl mx-auto"> <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-3 tracking-tight">\nPricing Plans\n</h1> <p class="text-center text-gray-600 mb-12 text-lg">', '</p> <div class="flex justify-center mb-10" role="tablist" aria-label="Pricing toggle"> <button id="monthly-btn" type="button" role="tab" aria-selected="true" aria-controls="pricing-table" tabindex="0" class="cursor-pointer px-6 py-2 rounded-l-lg border border-indigo-600 font-semibold bg-indigo-600 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base shadow-sm">\nMonthly\n</button> <button id="yearly-btn" type="button" role="tab" aria-selected="false" aria-controls="pricing-table" tabindex="-1" class="cursor-pointer px-6 py-2 rounded-r-lg border border-indigo-600 font-semibold bg-white text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base shadow-sm">\nYearly\n</button> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" id="pricing-table"> ', ` </div> </section> </main> <script>
    document.addEventListener("DOMContentLoaded", () => {
      const monthlyBtn = document.getElementById("monthly-btn");
      const yearlyBtn = document.getElementById("yearly-btn");
      const prices = document.querySelectorAll(".price");
      const discounts = document.querySelectorAll(".yearly-discount");

      function setActive(isMonthly) {
        if (isMonthly) {
          monthlyBtn.setAttribute("aria-selected", "true");
          monthlyBtn.setAttribute("tabindex", "0");
          monthlyBtn.classList.add("bg-indigo-600", "text-white");
          monthlyBtn.classList.remove("bg-white", "text-indigo-600");
          yearlyBtn.setAttribute("aria-selected", "false");
          yearlyBtn.setAttribute("tabindex", "-1");
          yearlyBtn.classList.remove("bg-indigo-600", "text-white");
          yearlyBtn.classList.add("bg-white", "text-indigo-600");
          discounts.forEach((el) => el.classList.add("hidden"));
        } else {
          yearlyBtn.setAttribute("aria-selected", "true");
          yearlyBtn.setAttribute("tabindex", "0");
          yearlyBtn.classList.add("bg-indigo-600", "text-white");
          yearlyBtn.classList.remove("bg-white", "text-indigo-600");
          monthlyBtn.setAttribute("aria-selected", "false");
          monthlyBtn.setAttribute("tabindex", "-1");
          monthlyBtn.classList.remove("bg-indigo-600", "text-white");
          monthlyBtn.classList.add("bg-white", "text-indigo-600");
          discounts.forEach((el) => el.classList.remove("hidden"));
        }
      }

      monthlyBtn.addEventListener("click", () => {
        setActive(true);
        prices.forEach((el) => {
          const val = el.getAttribute("data-monthly");
          el.innerHTML =
            val === "Custom"
              ? "Custom<span class='text-base font-normal duration'>/mo</span>"
              : val === "0"
              ? "Free"
              : \`$\${val}<span class='text-base font-normal duration'>/mo</span>\`;
        });
      });

      yearlyBtn.addEventListener("click", () => {
        setActive(false);
        prices.forEach((el) => {
          const val = el.getAttribute("data-yearly");
          el.innerHTML =
            val === "Custom"
              ? "Custom<span class='text-base font-normal duration'>/yr</span>"
              : val === "0"
              ? "Free"
              : \`$\${val}<span class='text-base font-normal duration'>/yr</span>\`;
        });
      });

      // Keyboard accessibility for toggle
      [monthlyBtn, yearlyBtn].forEach((btn, idx, arr) => {
        btn.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const next = arr[(idx + 1) % arr.length];
            next.focus();
            next.click();
          }
        });
      });
    });
  <\/script> `], [" ", '<main class="bg-gradient-to-b from-indigo-50 to-white min-h-screen py-16 px-4 pt-24"> <section class="max-w-7xl mx-auto"> <h1 class="text-4xl font-extrabold text-center text-gray-900 mb-3 tracking-tight">\nPricing Plans\n</h1> <p class="text-center text-gray-600 mb-12 text-lg">', '</p> <div class="flex justify-center mb-10" role="tablist" aria-label="Pricing toggle"> <button id="monthly-btn" type="button" role="tab" aria-selected="true" aria-controls="pricing-table" tabindex="0" class="cursor-pointer px-6 py-2 rounded-l-lg border border-indigo-600 font-semibold bg-indigo-600 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base shadow-sm">\nMonthly\n</button> <button id="yearly-btn" type="button" role="tab" aria-selected="false" aria-controls="pricing-table" tabindex="-1" class="cursor-pointer px-6 py-2 rounded-r-lg border border-indigo-600 font-semibold bg-white text-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base shadow-sm">\nYearly\n</button> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" id="pricing-table"> ', ` </div> </section> </main> <script>
    document.addEventListener("DOMContentLoaded", () => {
      const monthlyBtn = document.getElementById("monthly-btn");
      const yearlyBtn = document.getElementById("yearly-btn");
      const prices = document.querySelectorAll(".price");
      const discounts = document.querySelectorAll(".yearly-discount");

      function setActive(isMonthly) {
        if (isMonthly) {
          monthlyBtn.setAttribute("aria-selected", "true");
          monthlyBtn.setAttribute("tabindex", "0");
          monthlyBtn.classList.add("bg-indigo-600", "text-white");
          monthlyBtn.classList.remove("bg-white", "text-indigo-600");
          yearlyBtn.setAttribute("aria-selected", "false");
          yearlyBtn.setAttribute("tabindex", "-1");
          yearlyBtn.classList.remove("bg-indigo-600", "text-white");
          yearlyBtn.classList.add("bg-white", "text-indigo-600");
          discounts.forEach((el) => el.classList.add("hidden"));
        } else {
          yearlyBtn.setAttribute("aria-selected", "true");
          yearlyBtn.setAttribute("tabindex", "0");
          yearlyBtn.classList.add("bg-indigo-600", "text-white");
          yearlyBtn.classList.remove("bg-white", "text-indigo-600");
          monthlyBtn.setAttribute("aria-selected", "false");
          monthlyBtn.setAttribute("tabindex", "-1");
          monthlyBtn.classList.remove("bg-indigo-600", "text-white");
          monthlyBtn.classList.add("bg-white", "text-indigo-600");
          discounts.forEach((el) => el.classList.remove("hidden"));
        }
      }

      monthlyBtn.addEventListener("click", () => {
        setActive(true);
        prices.forEach((el) => {
          const val = el.getAttribute("data-monthly");
          el.innerHTML =
            val === "Custom"
              ? "Custom<span class='text-base font-normal duration'>/mo</span>"
              : val === "0"
              ? "Free"
              : \\\`$\\\${val}<span class='text-base font-normal duration'>/mo</span>\\\`;
        });
      });

      yearlyBtn.addEventListener("click", () => {
        setActive(false);
        prices.forEach((el) => {
          const val = el.getAttribute("data-yearly");
          el.innerHTML =
            val === "Custom"
              ? "Custom<span class='text-base font-normal duration'>/yr</span>"
              : val === "0"
              ? "Free"
              : \\\`$\\\${val}<span class='text-base font-normal duration'>/yr</span>\\\`;
        });
      });

      // Keyboard accessibility for toggle
      [monthlyBtn, yearlyBtn].forEach((btn, idx, arr) => {
        btn.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            e.preventDefault();
            const next = arr[(idx + 1) % arr.length];
            next.focus();
            next.click();
          }
        });
      });
    });
  <\/script> `])), maybeRenderHead(), description, plans.map((plan, idx) => renderTemplate`<div${addAttribute(`w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border transition-transform duration-200 hover:scale-[1.03] ${plan.highlight ? "border-2 border-indigo-600 scale-105 shadow-2xl" : "border-gray-100"}`, "class")}> <h2 class="text-2xl font-bold mb-2 text-gray-900 tracking-tight">${plan.name}</h2> <p class="text-5xl font-extrabold text-indigo-600 mb-2 price"${addAttribute(plan.monthly, "data-monthly")}${addAttribute(plan.yearly, "data-yearly")}> ${plan.monthly === "Custom" ? "Custom" : plan.monthly === 0 ? "Free" : `$${plan.monthly}`} <span class="text-base font-normal duration">${plan.monthly === 0 ? "" : "/mo"}</span> </p> ${plan.discount && plan.discount > 0 && renderTemplate`<div class="hidden yearly-discount text-xs text-green-600 font-semibold mb-2">
Save ${Math.round(plan.discount * 100)}% with yearly billing!
</div>`} <ul class="text-gray-700 mb-8 space-y-3 text-center w-full"> ${plan.features.map((feature) => renderTemplate`<li class="flex items-center gap-2 justify-center"> <span class="text-green-500 text-lg">✔️</span> <span>${feature}</span> </li>`)} </ul> <a href="#"${addAttribute(`mt-auto w-full text-center px-6 py-3 rounded-lg font-semibold border shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 transition
                  ${plan.name === "Free" ? "bg-gray-100 text-indigo-700 border-gray-200 hover:bg-indigo-50" : "bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-50 hover:text-indigo-700"}
                `, "class")}${addAttribute(plan.cta + " Plan", "aria-label")}> ${plan.cta} </a> </div>`)) })}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/pricing.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/pricing.astro";
const $$url = "/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
