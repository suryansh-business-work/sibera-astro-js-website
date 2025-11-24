import { c as createComponent, r as renderTemplate, a as addAttribute, m as maybeRenderHead } from './astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$OpenPositions = createComponent(($$result, $$props, $$slots) => {
  const jobs = [
    {
      id: "EXY-556",
      title: "AI Engineer",
      location: "Remote / India",
      type: "Full Time",
      description: "Design, build, and deploy AI models and automation solutions for enterprise clients.",
      requirements: [
        "2+ years experience in AI/ML",
        "Proficiency in Python or JavaScript",
        "Experience with cloud platforms (AWS, Azure, GCP)"
      ]
    },
    {
      id: "EXY-565",
      title: "Frontend Developer",
      location: "Remote / India",
      type: "Full Time",
      description: "Develop modern, responsive UIs for our SaaS and AI products.",
      requirements: [
        "2+ years experience with React or Vue",
        "Strong CSS/HTML skills",
        "Experience with REST APIs"
      ]
    },
    {
      id: "EXY-576",
      title: "Product Manager (AI SaaS)",
      location: "Remote / India",
      type: "Full Time",
      description: "Lead product strategy and execution for our AI SaaS platforms.",
      requirements: [
        "3+ years in product management",
        "Experience with SaaS products",
        "Strong communication skills"
      ]
    },
    {
      id: "EXY-579",
      title: "DevOps Engineer",
      location: "Remote / India",
      type: "Full Time",
      description: "Automate deployment pipelines and ensure high availability for our cloud infrastructure.",
      requirements: [
        "2+ years experience in DevOps",
        "Experience with CI/CD tools",
        "Knowledge of Docker & Kubernetes"
      ]
    },
    {
      id: "EXY-590",
      title: "UI/UX Designer",
      location: "Remote / India",
      type: "Full Time",
      description: "Design intuitive, beautiful interfaces for web and mobile products.",
      requirements: [
        "2+ years experience in UI/UX design",
        "Proficiency with Figma or Adobe XD",
        "Strong portfolio of design work"
      ]
    },
    {
      id: "EXY-600",
      title: "Technical Content Writer",
      location: "Remote / India",
      type: "Part Time",
      description: "Create engaging technical content, blogs, and documentation for our products.",
      requirements: [
        "Excellent written English",
        "Experience writing about technology",
        "Ability to explain complex topics simply"
      ]
    }
  ];
  return renderTemplate(_a || (_a = __template(["", '<section class="w-full bg-gradient-to-br from-blue-100 via-blue-50 to-teal-200 py-16 px-2"> <div class="max-w-7xl mx-auto"> <h2 class="text-3xl font-bold text-[#0071e3] mb-4 text-center">\nOpen Positions\n</h2> <p class="text-lg text-gray-700 mb-10 text-center">\nWe\u2019re looking for passionate, talented people to help us build innovative\n      solutions for businesses worldwide.\n</p> <!-- Search and Filters --> <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8"> <input id="job-search" type="text" placeholder="Search jobs by title or description..." class="w-full md:w-1/3 px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#0071e3] outline-none transition"> <div class="flex gap-3 flex-wrap"> <select id="job-type-filter" class="px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#0071e3] outline-none transition"> <option value="">All Types</option> <option value="Full Time">Full Time</option> <option value="Part Time">Part Time</option> </select> <select id="job-location-filter" class="px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#0071e3] outline-none transition"> <option value="">All Locations</option> <option value="Remote / India">Remote / India</option> </select> </div> </div> <div class="grid gap-8 mb-16 w-full px-2 md:px-8" id="job-list"> ', ' <div id="no-jobs-message" class="hidden col-span-full text-center text-lg text-gray-500 py-12">\nNo job available as per selected filter.\n</div> </div> </div> </section> <script>\n  // Animate job cards on scroll into view\n  document.addEventListener("DOMContentLoaded", function () {\n    const cards = document.querySelectorAll("#job-list > div:not(#no-jobs-message)");\n    const noJobsMsg = document.getElementById("no-jobs-message");\n    const reveal = () => {\n      cards.forEach((card) => {\n        const rect = card.getBoundingClientRect();\n        if (rect.top < window.innerHeight - 60) {\n          card.classList.add("opacity-100", "translate-y-0");\n        }\n      });\n    };\n    reveal();\n    window.addEventListener("scroll", reveal, { passive: true });\n    document\n      .getElementById("job-list")\n      .addEventListener("scroll", reveal, { passive: true });\n\n    // Search and filter logic\n    const searchInput = document.getElementById("job-search");\n    const typeFilter = document.getElementById("job-type-filter");\n    const locationFilter = document.getElementById("job-location-filter");\n\n    function filterJobs() {\n      const search = searchInput.value.toLowerCase();\n      const type = typeFilter.value;\n      const location = locationFilter.value;\n      let visibleCount = 0;\n      cards.forEach(card => {\n        const title = card.getAttribute("data-title");\n        const desc = card.getAttribute("data-description");\n        const cardType = card.getAttribute("data-type");\n        const cardLocation = card.getAttribute("data-location");\n        const matchesSearch = title.includes(search) || desc.includes(search);\n        const matchesType = !type || cardType === type;\n        const matchesLocation = !location || cardLocation === location;\n        if (matchesSearch && matchesType && matchesLocation) {\n          card.style.display = "";\n          visibleCount++;\n        } else {\n          card.style.display = "none";\n        }\n      });\n      if (noJobsMsg) {\n        noJobsMsg.style.display = visibleCount === 0 ? "" : "none";\n      }\n    }\n\n    searchInput.addEventListener("input", filterJobs);\n    typeFilter.addEventListener("change", filterJobs);\n    locationFilter.addEventListener("change", filterJobs);\n\n    // Initial filter to handle empty state on load\n    filterJobs();\n  });\n<\/script>'])), maybeRenderHead(), jobs.map((job, idx) => renderTemplate`<div class="bg-white rounded-xl shadow p-6 opacity-0 translate-y-8 transition-all duration-500"${addAttribute(`transition-delay: ${idx * 80}ms`, "style")}${addAttribute(job.title.toLowerCase(), "data-title")}${addAttribute(job.description.toLowerCase(), "data-description")}${addAttribute(job.type, "data-type")}${addAttribute(job.location, "data-location")}>  <div class="mb-2"> <span class="inline-block text-xs font-bold bg-blue-100 text-blue-700 px-3 py-1 rounded-full tracking-widest"> ${job.id} </span> </div> <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2"> <h2 class="text-2xl font-semibold text-[#0071e3]">${job.title}</h2> <span class="text-sm text-gray-500"> ${job.location} &middot; ${job.type} </span> </div> <p class="text-gray-700 mb-2">${job.description}</p>  <div class="flex flex-wrap gap-2 mb-4"> ${job.requirements.map((req) => renderTemplate`<span class="inline-block bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">${req}</span>`)} </div> <a href="#apply-now-form" onclick="document.getElementById('apply-now-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); return false;" class="inline-block bg-[#0071e3] text-white font-semibold px-6 py-2 rounded-[10px] shadow hover:bg-[#005bb5] transition">
Apply Now
</a> </div>`));
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/careers/OpenPositions.astro", void 0);

const $$file = "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/pages/careers/OpenPositions.astro";
const $$url = "/careers/OpenPositions";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OpenPositions,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$OpenPositions as $, _page as _ };
