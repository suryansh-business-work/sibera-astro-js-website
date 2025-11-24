import { c as createComponent, m as maybeRenderHead, a as addAttribute, r as renderTemplate, i as renderScript, f as renderComponent, b as createAstro, j as renderHead, e as renderSlot } from './astro/server_DxVpntjF.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const menuData = [
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "Support",
        href: "/products/support",
        description: "Comprehensive support ticket system",
        icon: "fa-solid fa-headset"
      },
      {
        name: "Tasks",
        href: "/products/tasks",
        description: "Efficient task management",
        icon: "fa-solid fa-list-check"
      },
      {
        name: "File Manager",
        href: "/products/files",
        description: "Secure file storage and sharing",
        icon: "fa-solid fa-folder-open"
      },
      {
        name: "Invoice",
        href: "/products/invoice",
        description: "Professional invoicing and billing",
        icon: "fa-solid fa-file-invoice-dollar"
      },
      {
        name: "Time Tracker",
        href: "/products/time-tracker",
        description: "Track time and productivity",
        icon: "fa-solid fa-clock"
      },
      {
        name: "IoT",
        href: "/products/iot",
        description: "Integrated IoT device management",
        icon: "fa-solid fa-microchip"
      }
    ]
  },
  {
    name: "Pricing",
    href: "/pricing"
  },
  {
    name: "About Us",
    href: "/about"
  },
  {
    name: "Contact Us",
    href: "/contact"
  },
  {
    name: "Blog",
    href: "/blog"
  },
  {
    name: "Careers",
    href: "/careers"
  }
];
const footerMenuData = [
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "Support",
        href: "/products/support",
        description: "Comprehensive support ticket system",
        icon: "fa-solid fa-headset"
      },
      {
        name: "Tasks",
        href: "/products/tasks",
        description: "Efficient task management",
        icon: "fa-solid fa-list-check"
      },
      {
        name: "File Manager",
        href: "/products/files",
        description: "Secure file storage and sharing",
        icon: "fa-solid fa-folder-open"
      },
      {
        name: "Invoice",
        href: "/products/invoice",
        description: "Professional invoicing and billing",
        icon: "fa-solid fa-file-invoice-dollar"
      },
      {
        name: "Time Tracker",
        href: "/products/time-tracker",
        description: "Track time and productivity",
        icon: "fa-solid fa-clock"
      },
      {
        name: "IoT",
        href: "/products/iot",
        description: "Integrated IoT device management",
        icon: "fa-solid fa-microchip"
      }
    ]
  },
  {
    name: "Policies",
    href: "#",
    children: [
      {
        name: "Cookies Policy",
        href: "/policies/cookies",
        description: "Read our Cookies Policy",
        icon: "fa-solid fa-cookie-bite"
      },
      {
        name: "Privacy Policy",
        href: "/policies/privacy",
        description: "Read our Privacy Policy",
        icon: "fa-solid fa-user-shield"
      },
      {
        name: "Data Policy",
        href: "/policies/data",
        description: "Read our Data Policy",
        icon: "fa-solid fa-database"
      },
      {
        name: "Terms and Condition",
        href: "/policies/terms",
        description: "Read our Terms and Condition",
        icon: "fa-solid fa-file-contract"
      }
    ]
  },
  {
    name: "Pricing",
    href: "/pricing"
  },
  {
    name: "About Us",
    href: "/about"
  },
  {
    name: "Contact Us",
    href: "/contact"
  }
];

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full bg-gray-900 border-t border-gray-800" aria-labelledby="footer-heading"> <h2 id="footer-heading" class="sr-only">Footer</h2> <div class="max-w-7xl mx-auto px-4 py-16 space-y-12"> <div class="grid grid-cols-1 gap-8 lg:grid-cols-3"> <div> <div class="mb-4"> <span class="text-2xl font-bold text-white">Sibera</span> </div> <p class="max-w-xs text-gray-400">
Sibera empowers businesses with a comprehensive suite of tools including Support, Tasks, File Manager, Invoices, Time Tracking, and IoT integration.
</p> <ul class="mt-8 flex gap-6"> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-400 hover:text-indigo-400 transition" aria-label="Facebook"> <i class="fab fa-facebook-f text-xl"></i> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-400 hover:text-indigo-400 transition" aria-label="Instagram"> <i class="fab fa-instagram text-xl"></i> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-400 hover:text-indigo-400 transition" aria-label="Twitter"> <i class="fab fa-twitter text-xl"></i> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-400 hover:text-indigo-400 transition" aria-label="GitHub"> <i class="fab fa-github text-xl"></i> </a> </li> </ul> </div> <nav class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:col-span-2" aria-label="Footer Navigation"> ${footerMenuData.map(
    (item) => item.children ? renderTemplate`<div> <h3 class="font-semibold text-gray-200 mb-3">${item.name}</h3> <ul class="space-y-2"> ${item.children.map((child) => renderTemplate`<li> <a${addAttribute(child.href, "href")} class="text-gray-300 block rounded px-2 py-1 transition-colors hover:text-indigo-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"> ${child.name} </a> </li>`)} </ul> </div>` : renderTemplate`<div> <a${addAttribute(item.href, "href")} class="text-gray-300 block font-semibold mb-3 rounded px-2 py-1 transition-colors hover:text-indigo-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"> ${item.name} </a> </div>`
  )} </nav> </div> <div class="w-full text-gray-500 text-xs text-center border-t border-gray-800 pt-8">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Sibera. All rights reserved. Streamline your business operations with our all-in-one platform.
</div> </div> </footer>`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/header-and-footer/Footer.astro", void 0);

const allApps = [
  {
    appId: "64763f4e1213208699bcafa4",
    appName: "Ads",
    appSlug: "ads",
    appDescription: "Manage all your ads at one place and create ads that doubles your revenue",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:24:14.124Z",
    appInternalPageLink: "/app/si-ads",
    launchState: "coming-soon",
    appLogo: "si-ads.svg"
  },
  {
    appId: "647b9860e472d3d07ece6a35",
    appName: "Asset Management",
    appSlug: "asset-management",
    appDescription: "Manage all your asset under one roof with all easy manageable documentation ",
    appCategory: "IT & Administration Suite",
    appType: "application",
    noCodeApp: true,
    appInternalPageLink: "/app/si-docs",
    creationDate: "2023-06-03T19:45:36.088Z",
    launchState: "coming-soon",
    appLogo: "si-docs.svg"
  },
  {
    appId: "64763e201213208699bcaf7e",
    appName: "Assist",
    appSlug: "assist",
    appDescription: "Extend technical support by allowing remote access into your device or access a customer's device",
    appCategory: "IT & Administration Suite",
    appType: "application",
    noCodeApp: true,
    creationDate: "2023-05-30T18:19:12.890Z",
    appInternalPageLink: "/app/si-assist",
    launchState: "coming-soon",
    appLogo: "si-assist.svg"
  },
  {
    appId: "64763c2b1213208699bcaf48",
    appName: "CMS",
    appSlug: "cms",
    appDescription: "Reach the top of the game by creating websites with us. Get flexible themes that can be easily edited and personalized",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:10:51.821Z",
    appInternalPageLink: "/app/si-cms",
    launchState: "mvp",
    appLogo: "si-cms.svg"
  },
  {
    appId: "64763ea21213208699bcaf90",
    appName: "Campaign",
    appSlug: "campaign",
    appDescription: "Si-campaigns gives you a perfectly smooth platform to manage different types of campaigns at one place",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:21:22.935Z",
    appInternalPageLink: "/app/si-campaign",
    launchState: "coming-soon",
    appLogo: "si-campaign.svg"
  },
  {
    appId: "64763bd31213208699bcaf40",
    appName: "Chatbot",
    appSlug: "chatbot",
    appDescription: "Better lead conversion, faster support and visitor engagement with Si-Chatbot",
    appCategory: "Tools",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:09:23.709Z",
    appInternalPageLink: "/app/si-chatbot",
    launchState: "coming-soon",
    appLogo: "si-chatbot.svg"
  },
  {
    appId: "64763ece1213208699bcaf94",
    appName: "Client End",
    appSlug: "client-end",
    appDescription: "Have a complete outlook on your ongoing projects and see progress of projects and track payments",
    appCategory: "Tools",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:22:06.360Z",
    appInternalPageLink: "/app/si-client-end",
    launchState: "coming-soon",
    appLogo: "si-client-end.svg"
  },
  {
    appId: "647575201213208699bcaddc",
    appName: "Communication",
    appSlug: "communication",
    appDescription: "Enrich your contact data and maintain stronger customer relationships with great communication and management",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T04:01:36.609Z",
    appInternalPageLink: "/app/si-communication",
    launchState: "mvp",
    appLogo: "si-communication.svg"
  },
  {
    appId: "64783b72eb7a3c01e57b7cb4",
    appName: "Data Plus",
    appSlug: "data-plus",
    appDescription: "Erich your data, Email, Phone, WhatsApp etc",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: true,
    appInternalPageLink: "/app/si-data-plus",
    creationDate: "2023-06-01T06:32:18.691Z",
    launchState: "mvp",
    appLogo: "si-file-manager.svg"
  },
  {
    appId: "64763f721213208699bcafa8",
    appName: "Deals",
    appSlug: "deals",
    appDescription: "deals in your own pipeline which lets you to have automatic follow-ups and even predict future revenue",
    appCategory: "Sales Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:24:50.348Z",
    appInternalPageLink: "/app/si-deals",
    launchState: "coming-soon",
    appLogo: "si-deals.svg"
  },
  {
    appId: "64763e851213208699bcaf8c",
    appName: "Delivery",
    appSlug: "delivery",
    appDescription: "Provide seamless deliveries when you use Sibera for fleet management and all types of delivery",
    appCategory: "Business Solutions",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:20:53.092Z",
    appInternalPageLink: "/app/si-delivery",
    launchState: "coming-soon",
    appLogo: "si-delivery.svg"
  },
  {
    appId: "64763c8a1213208699bcaf50",
    appName: "Docs",
    appSlug: "docs",
    appDescription: "Get e-signatures, payments and manage documents easily using all the professional tools you need to create and maintain your documents",
    appCategory: "Tools",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:12:26.621Z",
    appInternalPageLink: "/app/si-docs",
    launchState: "coming-soon",
    appLogo: "si-docs.svg"
  },
  {
    appId: "64775e8540cc60928c10edec",
    appName: "Expense Tracker",
    appSlug: "expense-tracker",
    appDescription: "Now manage you expense and income easily",
    appCategory: "Finance & Accounts Suite",
    appType: "application",
    noCodeApp: true,
    appInternalPageLink: "/app/expense-tracker",
    creationDate: "2023-05-31T14:49:41.864Z",
    launchState: "coming-soon",
    appLogo: "si-finance-n-account.svg"
  },
  {
    appId: "64763c671213208699bcaf4c",
    appName: "File Manager",
    appSlug: "file-manager",
    appDescription: "Store, access and share your content easily on Si-file Manager, virtually from any device with an internet",
    appCategory: "Tools",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:11:51.464Z",
    appInternalPageLink: "/app/si-file-manager",
    launchState: "mvp",
    appLogo: "si-file-manager.svg"
  },
  {
    appId: "64763df31213208699bcaf76",
    appName: "Finance & Account",
    appSlug: "finance-account",
    appDescription: "Get your finances right with Sibera. Focus on growing those numbers for your business, while we take care of the rest",
    appCategory: "Finance & Accounts Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:18:27.306Z",
    appInternalPageLink: "/app/si-finance-n-account",
    launchState: "coming-soon",
    appLogo: "si-finance-n-account.svg"
  },
  {
    appId: "64763faf1213208699bcafb2",
    appName: "Forecast",
    appSlug: "forecast",
    appDescription: "Use Si-Forecast to predict monthly sales revenues and assign targets for team",
    appCategory: "Sales Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:25:51.680Z",
    appInternalPageLink: "/app/si-forecast",
    launchState: "coming-soon",
    appLogo: "si-forecast.svg"
  },
  {
    appId: "6475753d1213208699bcade0",
    appName: "Form",
    appSlug: "form",
    appDescription: "Engage with website visitors with interactive forms and turn them into leads",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T04:02:05.423Z",
    appInternalPageLink: "/app/si-form",
    launchState: "mvp",
    appLogo: "si-form.svg"
  },
  {
    appId: "64763dcf1213208699bcaf72",
    appName: "HR",
    appSlug: "hr",
    appDescription: "Manage all your employees, with employee directory, leave management etc. with Si-HR",
    appCategory: "HR Solutions Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:17:51.127Z",
    appInternalPageLink: "/app/si-hr",
    launchState: "coming-soon",
    appLogo: "si-hr.svg"
  },
  {
    appId: "64763daf1213208699bcaf6e",
    appName: "Hiring",
    appSlug: "hiring",
    appDescription: "Make your hiring process smoother with Si-HR and hire people faster",
    appCategory: "HR Solutions Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:17:19.221Z",
    appInternalPageLink: "/app/si-hiring",
    launchState: "coming-soon",
    appLogo: "si-hiring.svg"
  },
  {
    appId: "64763e6a1213208699bcaf88",
    appName: "Hospitality",
    appSlug: "hospitality",
    appDescription: "Make your hotel management and hospitality business smarter with Sibera",
    appCategory: "Business Solutions",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:20:26.228Z",
    appInternalPageLink: "/app/si-hospital",
    launchState: "coming-soon",
    appLogo: "si-hospital.svg"
  },
  {
    appId: "64763d491213208699bcaf63",
    appName: "Invoice",
    appSlug: "invoice",
    appDescription: "Create professional invoices with multi-country tax support, payment links, and PDF generation",
    appCategory: "Finance & Accounts Suite",
    appType: "application",
    noCodeApp: true,
    creationDate: "2024-01-15T10:00:00.000Z",
    appInternalPageLink: "/app/si-invoice",
    launchState: "mvp",
    appLogo: "si-invoice.svg"
  },
  {
    appId: "64763t491213208699bcaf64",
    appName: "Time Tracker",
    appSlug: "time-tracker",
    appDescription: "Track time across all devices with automatic screenshots, activity monitoring, and detailed reports",
    appCategory: "Productivity Suite",
    appType: "application",
    noCodeApp: true,
    creationDate: "2024-01-20T10:00:00.000Z",
    appInternalPageLink: "/app/si-time-tracker",
    launchState: "mvp",
    appLogo: "si-time-tracker.svg"
  },
  {
    appId: "64763fef1213208699bcafba",
    appName: "IoT",
    appSlug: "iot",
    appDescription: "Integrate your business with Sibera’s IoT solutions today and easily manage all your software and hardware applications together",
    appCategory: "IoT",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:26:55.297Z",
    appInternalPageLink: "/app/si-iot",
    launchState: "mvp",
    appLogo: "si-iot.svg"
  },
  {
    appId: "64763f2c1213208699bcafa0",
    appName: "Journey",
    appSlug: "journey",
    appDescription: "Know more about your leads as you take them on their personal journeys and make sure interaction is at its best",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:23:40.224Z",
    appInternalPageLink: "/app/si-journey",
    launchState: "coming-soon",
    appLogo: "si-journey.svg"
  },
  {
    appId: "64763d491213208699bcaf62",
    appName: "Link Short",
    appSlug: "link-short",
    appDescription: "Shorten long urls with Si-Links, and track the activities on your links",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: true,
    creationDate: "2023-05-30T18:15:37.990Z",
    appInternalPageLink: "/app/si-link",
    launchState: "mvp",
    appLogo: "si-link.svg"
  },
  {
    appId: "64763d1a1213208699bcaf5e",
    appName: "Meet",
    appSlug: "meet",
    appDescription: "Schedule meetings with Si-Meet by using just one meeting link to meet multiple prospects",
    appCategory: "Sales Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:14:50.151Z",
    appInternalPageLink: "/app/si-meet",
    launchState: "coming-soon",
    appLogo: "si-meet.svg"
  },
  {
    appId: "6476400e1213208699bcafbe",
    appName: "POS",
    appSlug: "pos",
    appDescription: "Be it your smartphone or a tablet, turn any portable device into a flexible POS",
    appCategory: "Sales Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:27:26.604Z",
    appInternalPageLink: "/app/si-pos",
    launchState: "coming-soon",
    appLogo: "si-pos.svg"
  },
  {
    appId: "64763d711213208699bcaf66",
    appName: "Payroll",
    appSlug: "payroll",
    appDescription: "Avoid maintaining salary sheets every month end. Have a speedy payroll with Si-Payroll",
    appCategory: "HR Solutions Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:16:17.438Z",
    appInternalPageLink: "/app/si-payroll",
    launchState: "coming-soon",
    appLogo: "si-payroll.svg"
  },
  {
    appId: "64763d941213208699bcaf6a",
    appName: "Performance",
    appSlug: "performance",
    appDescription: "With our Performance management system, you can compare, analyse and track employee performance over time",
    appCategory: "HR Solutions Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:16:52.359Z",
    appInternalPageLink: "/app/si-performance",
    launchState: "coming-soon",
    appLogo: "si-performance.svg"
  },
  {
    appId: "64763fce1213208699bcafb6",
    appName: "Real Estate",
    appSlug: "real-estate",
    appDescription: "Take your real estate business to the next level with Si-Real Estate and see all your properties grow with tech",
    appCategory: "Business Solutions",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:26:22.403Z",
    appInternalPageLink: "/app/si-real-estate",
    launchState: "coming-soon",
    appLogo: "si-real-estate.svg"
  },
  {
    appId: "64763ef21213208699bcaf98",
    appName: "Reports",
    appSlug: "reports",
    appDescription: "Generate reports for all your marketing and sales activities to make better decisions",
    appCategory: "Tools",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:22:42.702Z",
    appInternalPageLink: "/app/si-reports",
    launchState: "coming-soon",
    appLogo: "si-reports.svg"
  },
  {
    appId: "64763f991213208699bcafae",
    appName: "Sales Automate",
    appSlug: "sales-automate",
    appDescription: "Let your sales team engage with leads with automated and personalized touchpoints to improve conversions by unbelievable rates",
    appCategory: "Sales Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:25:29.089Z",
    appInternalPageLink: "/app/si-sales-automate",
    launchState: "coming-soon",
    appLogo: "si-sales-automate.svg"
  },
  {
    appId: "64763f0f1213208699bcaf9c",
    appName: "Social",
    appSlug: "social",
    appDescription: "Use Si-Social to easily manage, publish and organize your social media brands. Also, chat directly with your customers",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:23:11.923Z",
    appInternalPageLink: "/app/si-social",
    launchState: "coming-soon",
    appLogo: "si-social.svg"
  },
  {
    appId: "64763e4e1213208699bcaf84",
    appName: "Support",
    appSlug: "support",
    appDescription: "A simpler way to do customer support, with Ticket management, AI chatbots, Knowledge Base, etc.",
    appCategory: "Tools",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:19:58.830Z",
    appInternalPageLink: "/app/si-support",
    launchState: "mvp",
    appLogo: "si-support.svg"
  },
  {
    appId: "6475755e1213208699bcade4",
    appName: "Survey",
    appSlug: "survey",
    appDescription: "A faster and easy way to get audience remarks and improve yourself accordingly",
    appCategory: "Marketing Suite",
    appType: "application",
    noCodeApp: true,
    creationDate: "2023-05-30T04:02:38.668Z",
    appInternalPageLink: "/app/si-survey",
    launchState: "coming-soon",
    appLogo: "si-survey.svg"
  },
  {
    appId: "64763cae1213208699bcaf56",
    appName: "Tasks",
    appSlug: "tasks",
    appDescription: "Si-tasks is a simple and powerful tool that makes your life easier by setting up reminders for every task that you do",
    appCategory: "Tools",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T18:13:02.010Z",
    appInternalPageLink: "/app/si-tasks",
    launchState: "mvp",
    appLogo: "si-tasks.svg"
  },
  {
    appId: "6475759c1213208699bcadec",
    appName: "Track",
    appSlug: "track",
    appDescription: "Track attendance and location of on-field agents from anywhere and at any time",
    appCategory: "HR Solutions Suite",
    appType: "application",
    noCodeApp: false,
    creationDate: "2023-05-30T04:03:40.842Z",
    appInternalPageLink: "/app/si-track",
    launchState: "coming-soon",
    appLogo: "si-track.svg"
  },
  {
    appId: "64783b4deb7a3c01e57b7cb0",
    appName: "Wise Learn",
    appSlug: "wise-learn",
    appDescription: "Easy to manage institution, School, Personal Tuition, Hostel Management etc ",
    appCategory: "Business Solutions",
    appType: "application",
    noCodeApp: true,
    appInternalPageLink: "/app/si-wise-learn",
    creationDate: "2023-06-01T06:31:41.619Z",
    launchState: "coming-soon",
    appLogo: "si-form.svg"
  },
  {
    appId: "64783b4deb7a3c01e57b7cb0",
    appName: "Hospital",
    appSlug: "hospital",
    appDescription: "Watch your healthcare organisation grow Sibera. Transform your business into a world-class service facility",
    appCategory: "Business Solutions",
    appType: "application",
    noCodeApp: true,
    appInternalPageLink: "/app/si-hospital",
    creationDate: "2023-06-01T06:31:41.619Z",
    launchState: "mvp",
    appLogo: "si-healthcare.svg"
  },
  {
    appId: "64783b4deb7a3c01e57b7cb0",
    appName: "Contracts",
    appSlug: "contracts",
    appDescription: "Comprehensive contract lifecycle management software.",
    appCategory: "Legal Suite",
    appType: "application",
    noCodeApp: true,
    appInternalPageLink: "/app/si-contracts",
    creationDate: "2023-06-01T06:31:41.619Z",
    launchState: "coming-soon",
    appLogo: "si-form.svg"
  },
  {
    appId: "64783b4deb7a3c01e57b7cb0",
    appName: "Sign",
    appSlug: "sign",
    appDescription: "Digital signature app for businesses.",
    appCategory: "Legal Suite",
    appType: "application",
    noCodeApp: true,
    appInternalPageLink: "/app/si-contracts",
    creationDate: "2023-06-01T06:31:41.619Z",
    launchState: "coming-soon",
    appLogo: "si-form.svg"
  }
];
const getAppsByCategory = () => {
  const categories = {};
  allApps.forEach((app) => {
    if (!categories[app.appCategory]) {
      categories[app.appCategory] = [];
    }
    categories[app.appCategory].push(app);
  });
  return categories;
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$MobileHeader = createComponent(($$result, $$props, $$slots) => {
  const appsByCategory = getAppsByCategory();
  const categories = Object.keys(appsByCategory);
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div> <div id="mobile-menu" class="lg:hidden fixed inset-0 z-200 hidden"> <!-- Backdrop --> <div id="mobile-menu-backdrop" class="absolute inset-0 bg-black/30"></div> <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> <div class="flex items-center justify-between"> <a href="/" class="-m-1.5 p-1.5"> <span class="sr-only">Sibera</span> <div class="flex items-center gap-3"> <img src="https://ik.imagekit.io/esdata1/sibera/logo/logo-only.svg" alt="Sibera Logo" class="h-10 w-auto"> <div class="flex flex-col justify-center"> <span class="text-xl font-bold text-gray-900 leading-none tracking-tight font-sans">Sibera</span> <span class="text-[10px] font-semibold text-gray-500 leading-none uppercase tracking-widest mt-0.5">by Exyconn</span> </div> </div> </a> <button id="mobile-menu-close" type="button" class="cursor-pointer -m-2.5 rounded-md p-2.5 text-gray-700"> <span class="sr-only">Close menu</span> <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button> </div> <div class="mt-6 flow-root"> <div class="-my-6 divide-y divide-gray-500/10"> <div class="space-y-2 py-6"> ', ` </div> <div class="py-6"> <a href="http://localhost:5173/login" class="block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 no-underline hover:no-underline">Log in</a> </div> </div> </div> </div> </div> </div> <script>
  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobile-menu");
    const openBtn = document.getElementById("mobile-menu-open");
    const closeBtn = document.getElementById("mobile-menu-close");
    const backdrop = document.getElementById("mobile-menu-backdrop");

    if (openBtn && menu) {
      openBtn.addEventListener("click", () => {
        menu.classList.remove("hidden");
      });
    }
    if (closeBtn && menu) {
      closeBtn.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    }
    if (backdrop && menu) {
      backdrop.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    }

    // Helper to toggle visibility and rotate arrow
    const toggleMenu = (btnId, menuId) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        if(!btn || !menu) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !expanded);
            menu.classList.toggle("hidden");
            const arrow = btn.querySelector("svg");
            if (arrow) arrow.classList.toggle("rotate-180");
        });
    };

    // Toggle for main Products menu
    toggleMenu('mobile-products-toggle', 'mobile-products-submenu');

    // Toggle for each category
    document.querySelectorAll('[id^="mobile-category-toggle-"]').forEach(btn => {
        const id = btn.id;
        const targetId = id.replace('toggle', ''); // mobile-category-X
        toggleMenu(id, targetId);
    });

    // Existing Submenu open/close logic for other items
    document.querySelectorAll('[id^="submenu-toggle-"]').forEach((btn) => {
      btn.addEventListener("click", function () {
        const idx = this.id.replace("submenu-toggle-", "");
        const submenu = document.getElementById(\`submenu-\${idx}\`);
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
        submenu.classList.toggle("hidden");
        // Rotate arrow
        const arrow = this.querySelector("svg");
        if (arrow) arrow.classList.toggle("rotate-180");
      });
    });
  });
<\/script>`], ["", '<div> <div id="mobile-menu" class="lg:hidden fixed inset-0 z-200 hidden"> <!-- Backdrop --> <div id="mobile-menu-backdrop" class="absolute inset-0 bg-black/30"></div> <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"> <div class="flex items-center justify-between"> <a href="/" class="-m-1.5 p-1.5"> <span class="sr-only">Sibera</span> <div class="flex items-center gap-3"> <img src="https://ik.imagekit.io/esdata1/sibera/logo/logo-only.svg" alt="Sibera Logo" class="h-10 w-auto"> <div class="flex flex-col justify-center"> <span class="text-xl font-bold text-gray-900 leading-none tracking-tight font-sans">Sibera</span> <span class="text-[10px] font-semibold text-gray-500 leading-none uppercase tracking-widest mt-0.5">by Exyconn</span> </div> </div> </a> <button id="mobile-menu-close" type="button" class="cursor-pointer -m-2.5 rounded-md p-2.5 text-gray-700"> <span class="sr-only">Close menu</span> <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon"> <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path> </svg> </button> </div> <div class="mt-6 flow-root"> <div class="-my-6 divide-y divide-gray-500/10"> <div class="space-y-2 py-6"> ', ` </div> <div class="py-6"> <a href="http://localhost:5173/login" class="block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 no-underline hover:no-underline">Log in</a> </div> </div> </div> </div> </div> </div> <script>
  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("mobile-menu");
    const openBtn = document.getElementById("mobile-menu-open");
    const closeBtn = document.getElementById("mobile-menu-close");
    const backdrop = document.getElementById("mobile-menu-backdrop");

    if (openBtn && menu) {
      openBtn.addEventListener("click", () => {
        menu.classList.remove("hidden");
      });
    }
    if (closeBtn && menu) {
      closeBtn.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    }
    if (backdrop && menu) {
      backdrop.addEventListener("click", () => {
        menu.classList.add("hidden");
      });
    }

    // Helper to toggle visibility and rotate arrow
    const toggleMenu = (btnId, menuId) => {
        const btn = document.getElementById(btnId);
        const menu = document.getElementById(menuId);
        if(!btn || !menu) return;

        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const expanded = btn.getAttribute("aria-expanded") === "true";
            btn.setAttribute("aria-expanded", !expanded);
            menu.classList.toggle("hidden");
            const arrow = btn.querySelector("svg");
            if (arrow) arrow.classList.toggle("rotate-180");
        });
    };

    // Toggle for main Products menu
    toggleMenu('mobile-products-toggle', 'mobile-products-submenu');

    // Toggle for each category
    document.querySelectorAll('[id^="mobile-category-toggle-"]').forEach(btn => {
        const id = btn.id;
        const targetId = id.replace('toggle', ''); // mobile-category-X
        toggleMenu(id, targetId);
    });

    // Existing Submenu open/close logic for other items
    document.querySelectorAll('[id^="submenu-toggle-"]').forEach((btn) => {
      btn.addEventListener("click", function () {
        const idx = this.id.replace("submenu-toggle-", "");
        const submenu = document.getElementById(\\\`submenu-\\\${idx}\\\`);
        const expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
        submenu.classList.toggle("hidden");
        // Rotate arrow
        const arrow = this.querySelector("svg");
        if (arrow) arrow.classList.toggle("rotate-180");
      });
    });
  });
<\/script>`])), maybeRenderHead(), menuData.map((item, idx) => {
    if (item.name === "Products") {
      return renderTemplate`<div> <button type="button" class="items-center cursor-pointer flex w-full rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50" aria-controls="mobile-products-submenu" aria-expanded="false" id="mobile-products-toggle"> ${item.name} <svg class="size-5 flex-none transition-transform ml-auto" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> </svg> </button> <div class="mt-2 space-y-2 hidden pl-4" id="mobile-products-submenu"> ${categories.map((category, catIdx) => renderTemplate`<div class="border-l-2 border-gray-100 pl-2"> <button type="button" class="items-center cursor-pointer flex w-full rounded-lg py-2 pr-3.5 pl-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"${addAttribute(`mobile-category-${catIdx}`, "aria-controls")} aria-expanded="false"${addAttribute(`mobile-category-toggle-${catIdx}`, "id")}> ${category} <svg class="size-4 flex-none transition-transform ml-auto text-gray-400" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </button> <div class="mt-1 space-y-1 hidden pl-2"${addAttribute(`mobile-category-${catIdx}`, "id")}> ${appsByCategory[category].map((app) => renderTemplate`<a${addAttribute(`/app/${app.appSlug || app.appName.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="block rounded-lg py-2 pl-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"> ${app.appName} </a>`)} </div> </div>`)} </div> </div>`;
    }
    return item.children ? renderTemplate`<div> <button type="button" class="items-center cursor-pointer flex w-full rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"${addAttribute(`submenu-${idx}`, "aria-controls")} aria-expanded="false"${addAttribute(`submenu-toggle-${idx}`, "id")}> ${item.icon && renderTemplate`<i${addAttribute(item.icon + " mr-2", "class")}></i>`} ${item.name} <svg class="size-5 flex-none transition-transform ml-auto" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon"> <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path> </svg> </button> <div class="mt-2 space-y-2 hidden"${addAttribute(`submenu-${idx}`, "id")}> ${item.children.map((child) => renderTemplate`<a${addAttribute(child.href, "href")} class="cursor-pointer block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-200 hover:w-full hover:no-underline hover:no-underline" style="display: block;"> ${child.icon && renderTemplate`<i${addAttribute(child.icon + " mr-2", "class")}></i>`} ${child.name} </a>`)} </div> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 no-underline hover:no-underline"> ${item.icon && renderTemplate`<i${addAttribute(item.icon + " mr-2", "class")}></i>`} ${item.name} </a>`;
  }));
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/header-and-footer/MobileHeader.astro", void 0);

const categoryThemes = {
  "Marketing Suite": {
    backgroundColor: "#FFF0F5",
    // Lavender Blush
    primaryColor: "#DB7093",
    // Pale Violet Red
    textColor: "#4A0E2E"
  },
  "IT & Administration Suite": {
    backgroundColor: "#F0F8FF",
    // Alice Blue
    primaryColor: "#4682B4",
    // Steel Blue
    textColor: "#0E2A47"
  },
  "Tools": {
    backgroundColor: "#F5F5F5",
    // White Smoke
    primaryColor: "#696969",
    // Dim Gray
    textColor: "#1A1A1A"
  },
  "Sales Suite": {
    backgroundColor: "#FFF5EE",
    // Seashell
    primaryColor: "#FF7F50",
    // Coral
    textColor: "#4D1F12"
  },
  "Business Solutions": {
    backgroundColor: "#F0FFF0",
    // Honeydew
    primaryColor: "#2E8B57",
    // Sea Green
    textColor: "#0B331E"
  },
  "Finance & Accounts Suite": {
    backgroundColor: "#F5FFFA",
    // Mint Cream
    primaryColor: "#20B2AA",
    // Light Sea Green
    textColor: "#083D3A"
  },
  "HR Solutions Suite": {
    backgroundColor: "#FFFAF0",
    // Floral White
    primaryColor: "#DAA520",
    // Goldenrod
    textColor: "#423208"
  },
  "Productivity Suite": {
    backgroundColor: "#E6E6FA",
    // Lavender
    primaryColor: "#9370DB",
    // Medium Purple
    textColor: "#2E1A47"
  },
  "IoT": {
    backgroundColor: "#E0FFFF",
    // Light Cyan
    primaryColor: "#008B8B",
    // Dark Cyan
    textColor: "#003333"
  },
  "Legal Suite": {
    backgroundColor: "#F8F8FF",
    // Ghost White
    primaryColor: "#483D8B",
    // Dark Slate Blue
    textColor: "#141126"
  },
  "default": {
    backgroundColor: "#FFFFFF",
    primaryColor: "#3B82F6",
    // Blue 500
    textColor: "#1F2937"
  }
};
const getThemeByCategory = (category) => {
  return categoryThemes[category] || categoryThemes["default"];
};

const $$MegaMenu = createComponent(($$result, $$props, $$slots) => {
  const appsByCategory = getAppsByCategory();
  const categories = Object.keys(appsByCategory);
  return renderTemplate`${maybeRenderHead()}<div class="absolute left-0 top-full w-full bg-white shadow-xl border-t border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 mega-menu" style="height: 600px;" data-astro-cid-xxj7jdum> <div class="flex h-full" data-astro-cid-xxj7jdum> <!-- Sidebar --> <div class="w-64 bg-gray-50 border-r border-gray-200 h-full overflow-y-auto py-4 flex-shrink-0" data-astro-cid-xxj7jdum> <ul class="space-y-1 px-2" data-astro-cid-xxj7jdum> ${categories.map((category, index) => renderTemplate`<li data-astro-cid-xxj7jdum> <button${addAttribute(`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200 flex items-center justify-between group/btn ${index === 0 ? "bg-white shadow-sm text-blue-700 ring-1 ring-gray-200" : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"}`, "class")}${addAttribute(category, "data-category")}${addAttribute(index, "data-index")} data-astro-cid-xxj7jdum> <span data-astro-cid-xxj7jdum>${category}</span> <i${addAttribute(`fa-solid fa-chevron-right text-xs opacity-0 group-hover/btn:opacity-100 transition-opacity ${index === 0 ? "opacity-100 text-blue-700" : "text-gray-400"}`, "class")} data-astro-cid-xxj7jdum></i> </button> </li>`)} </ul> </div> <!-- Content Area --> <div class="flex-1 h-full overflow-y-auto bg-white p-8" data-astro-cid-xxj7jdum> ${categories.map((category, index) => {
    const apps = appsByCategory[category];
    const theme = getThemeByCategory(category);
    return renderTemplate`<div${addAttribute(`category-content-${index}`, "id")}${addAttribute(`category-content ${index === 0 ? "block" : "hidden"} animate-fade-in`, "class")} data-astro-cid-xxj7jdum> <div class="mb-6 border-b border-gray-100 pb-4" data-astro-cid-xxj7jdum> <h2 class="text-2xl font-bold text-gray-900 flex items-center" data-astro-cid-xxj7jdum> ${category} <span class="ml-3 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100" data-astro-cid-xxj7jdum> ${apps.length} Apps
</span> </h2> <p class="text-gray-500 mt-1 text-sm" data-astro-cid-xxj7jdum>Explore our suite of ${category.toLowerCase()} applications.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-astro-cid-xxj7jdum> ${apps.map((app) => renderTemplate`<a${addAttribute(`/app/${app.appSlug || app.appName.toLowerCase().replace(/\s+/g, "-")}`, "href")} class="group/card block p-4 rounded-lg border border-gray-100 hover:border-blue-500 hover:shadow-md transition-all duration-200 bg-white" data-astro-cid-xxj7jdum> <div class="flex items-start" data-astro-cid-xxj7jdum> <div class="flex-shrink-0 mr-3" data-astro-cid-xxj7jdum> <div class="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-sm"${addAttribute(`background-color: ${theme.primaryColor}`, "style")} data-astro-cid-xxj7jdum> ${app.appName.substring(0, 2).toUpperCase()} </div> </div> <div class="flex-1 min-w-0" data-astro-cid-xxj7jdum> <h3 class="text-sm font-bold text-gray-900 group-hover/card:text-blue-600 truncate" data-astro-cid-xxj7jdum> ${app.appName} </h3> <p class="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed" data-astro-cid-xxj7jdum> ${app.appDescription} </p> <div class="mt-3 flex items-center gap-2" data-astro-cid-xxj7jdum> <span${addAttribute(`inline-block w-2 h-2 rounded-full ${app.launchState === "mvp" ? "bg-green-500" : "bg-yellow-400"}`, "class")} data-astro-cid-xxj7jdum></span> <span class="text-[10px] font-medium text-gray-400 uppercase tracking-wide" data-astro-cid-xxj7jdum> ${app.launchState === "mvp" ? "Available" : "Coming Soon"} </span> </div> </div> </div> </a>`)} </div> </div>`;
  })} </div> </div> </div>  ${renderScript($$result, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/header-and-footer/MegaMenu.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/header-and-footer/MegaMenu.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<header class="bg-white shadow-md fixed top-0 left-0 w-full z-50" style="height:64px;"> <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global"> <div class="flex lg:flex-1"> <a href="/" class="-m-1.5 p-1.5 flex items-center gap-2"> <span class="sr-only">Sibera</span> <div class="flex items-center gap-3"> <img src="https://ik.imagekit.io/esdata1/sibera/logo/logo-only.svg" alt="Sibera Logo" class="h-10 w-auto"> <div class="flex flex-col justify-center"> <span class="text-xl font-bold text-gray-900 leading-none tracking-tight font-sans">Sibera</span> <span class="text-[10px] font-semibold text-gray-500 leading-none uppercase tracking-widest mt-0.5">by Exyconn</span> </div> </div> </a> </div> <div class="flex lg:hidden"> <button id="mobile-menu-open" type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"> <span class="sr-only">Open main menu</span> <i class="fa-solid fa-bars text-xl"></i> </button> </div> <div class="hidden lg:flex lg:gap-x-5"> ', ' </div> <div class="hidden lg:flex lg:flex-1 lg:justify-end"> <a href="http://localhost:5173/login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> </div> </nav> ', ' </header> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    document\n      .querySelectorAll(\'[id^="desktop-submenu-toggle-"]\')\n      .forEach((btn) => {\n        btn.addEventListener("click", function (e) {\n          e.stopPropagation();\n          const idx = this.id.replace("desktop-submenu-toggle-", "");\n          const submenu = document.getElementById(`desktop-submenu-${idx}`);\n          const expanded = this.getAttribute("aria-expanded") === "true";\n          // Close all other submenus using toggles\n          document\n            .querySelectorAll(\'[id^="desktop-submenu-toggle-"]\')\n            .forEach((otherToggle) => {\n              if (otherToggle !== this) {\n                const otherIdx = otherToggle.id.replace(\n                  "desktop-submenu-toggle-",\n                  "",\n                );\n                const otherSubmenu = document.getElementById(\n                  `desktop-submenu-${otherIdx}`,\n                );\n                otherToggle.setAttribute("aria-expanded", "false");\n                otherSubmenu?.classList.add("hidden");\n                const otherArrow =\n                  otherToggle.querySelector("i.fa-chevron-down");\n                otherArrow?.classList.remove("rotate-180");\n              }\n            });\n          this.setAttribute("aria-expanded", !expanded);\n          submenu.classList.toggle("hidden");\n          // Rotate arrow\n          const arrow = this.querySelector("i.fa-chevron-down");\n          if (arrow) arrow.classList.toggle("rotate-180");\n        });\n        // Prevent submenu click from closing itself\n        const idx = btn.id.replace("desktop-submenu-toggle-", "");\n        const submenu = document.getElementById(`desktop-submenu-${idx}`);\n        submenu?.addEventListener("click", (e) => e.stopPropagation());\n      });\n\n    // Close all submenus when clicking outside\n    document.addEventListener("click", () => {\n      document\n        .querySelectorAll(\'[id^="desktop-submenu-toggle-"]\')\n        .forEach((toggle) => {\n          const idx = toggle.id.replace("desktop-submenu-toggle-", "");\n          const submenu = document.getElementById(`desktop-submenu-${idx}`);\n          const arrow = toggle.querySelector("i.fa-chevron-down");\n          if (submenu && !submenu.classList.contains("hidden")) {\n            submenu.classList.add("hidden");\n            toggle.setAttribute("aria-expanded", "false");\n            arrow?.classList.remove("rotate-180");\n          }\n        });\n    });\n  });\n<\/script>'], ["", '<header class="bg-white shadow-md fixed top-0 left-0 w-full z-50" style="height:64px;"> <nav class="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8" aria-label="Global"> <div class="flex lg:flex-1"> <a href="/" class="-m-1.5 p-1.5 flex items-center gap-2"> <span class="sr-only">Sibera</span> <div class="flex items-center gap-3"> <img src="https://ik.imagekit.io/esdata1/sibera/logo/logo-only.svg" alt="Sibera Logo" class="h-10 w-auto"> <div class="flex flex-col justify-center"> <span class="text-xl font-bold text-gray-900 leading-none tracking-tight font-sans">Sibera</span> <span class="text-[10px] font-semibold text-gray-500 leading-none uppercase tracking-widest mt-0.5">by Exyconn</span> </div> </div> </a> </div> <div class="flex lg:hidden"> <button id="mobile-menu-open" type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"> <span class="sr-only">Open main menu</span> <i class="fa-solid fa-bars text-xl"></i> </button> </div> <div class="hidden lg:flex lg:gap-x-5"> ', ' </div> <div class="hidden lg:flex lg:flex-1 lg:justify-end"> <a href="http://localhost:5173/login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a> </div> </nav> ', ' </header> <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    document\n      .querySelectorAll(\'[id^="desktop-submenu-toggle-"]\')\n      .forEach((btn) => {\n        btn.addEventListener("click", function (e) {\n          e.stopPropagation();\n          const idx = this.id.replace("desktop-submenu-toggle-", "");\n          const submenu = document.getElementById(\\`desktop-submenu-\\${idx}\\`);\n          const expanded = this.getAttribute("aria-expanded") === "true";\n          // Close all other submenus using toggles\n          document\n            .querySelectorAll(\'[id^="desktop-submenu-toggle-"]\')\n            .forEach((otherToggle) => {\n              if (otherToggle !== this) {\n                const otherIdx = otherToggle.id.replace(\n                  "desktop-submenu-toggle-",\n                  "",\n                );\n                const otherSubmenu = document.getElementById(\n                  \\`desktop-submenu-\\${otherIdx}\\`,\n                );\n                otherToggle.setAttribute("aria-expanded", "false");\n                otherSubmenu?.classList.add("hidden");\n                const otherArrow =\n                  otherToggle.querySelector("i.fa-chevron-down");\n                otherArrow?.classList.remove("rotate-180");\n              }\n            });\n          this.setAttribute("aria-expanded", !expanded);\n          submenu.classList.toggle("hidden");\n          // Rotate arrow\n          const arrow = this.querySelector("i.fa-chevron-down");\n          if (arrow) arrow.classList.toggle("rotate-180");\n        });\n        // Prevent submenu click from closing itself\n        const idx = btn.id.replace("desktop-submenu-toggle-", "");\n        const submenu = document.getElementById(\\`desktop-submenu-\\${idx}\\`);\n        submenu?.addEventListener("click", (e) => e.stopPropagation());\n      });\n\n    // Close all submenus when clicking outside\n    document.addEventListener("click", () => {\n      document\n        .querySelectorAll(\'[id^="desktop-submenu-toggle-"]\')\n        .forEach((toggle) => {\n          const idx = toggle.id.replace("desktop-submenu-toggle-", "");\n          const submenu = document.getElementById(\\`desktop-submenu-\\${idx}\\`);\n          const arrow = toggle.querySelector("i.fa-chevron-down");\n          if (submenu && !submenu.classList.contains("hidden")) {\n            submenu.classList.add("hidden");\n            toggle.setAttribute("aria-expanded", "false");\n            arrow?.classList.remove("rotate-180");\n          }\n        });\n    });\n  });\n<\/script>'])), maybeRenderHead(), menuData.map((item, idx) => {
    if (item.name === "Products") {
      return renderTemplate`<div class="group"> <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 group-hover:text-blue-600 outline-none px-4 py-2" aria-expanded="false"> ${item.name} <svg class="h-5 w-5 flex-none text-gray-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path> </svg> </button> ${renderComponent($$result, "MegaMenu", $$MegaMenu, {})} </div>`;
    }
    return item.children ? renderTemplate`<div class="relative"> <button${addAttribute(`desktop-submenu-toggle-${idx}`, "id")} type="button" class="cursor-pointer flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 px-4 py-2" aria-expanded="false"> <div>${item.icon && renderTemplate`<i${addAttribute(item.icon + " mr-2", "class")}></i>`}</div> <div>${item.name}</div> <div> <i class="fa-solid fa-chevron-down text-gray-400 transition-transform" style="width:20px;height:20px;display:flex;align-items:center;justify-content:center;"></i> </div> </button> <div${addAttribute(`desktop-submenu-${idx}`, "id")} class="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 hidden"> <div class="p-4"> ${item.children.map((child) => renderTemplate`<div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"> <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"> ${child.icon && renderTemplate`<i${addAttribute(
      child.icon + " size-6 text-gray-600 group-hover:text-indigo-600",
      "class"
    )}></i>`} </div> <div class="flex-auto"> <a${addAttribute(child.href, "href")} class="block font-semibold text-gray-900"> ${child.name} <span class="absolute inset-0"></span> </a> ${child.description && renderTemplate`<p class="mt-1 text-gray-600">${child.description}</p>`} </div> </div>`)} </div> </div> </div>` : renderTemplate`<a${addAttribute(item.href, "href")} class="text-sm/6 font-semibold text-gray-900 px-4 py-2"${addAttribute(item.name, "title")}> ${item.icon && renderTemplate`<i${addAttribute(item.icon + " mr-2", "class")}></i>`} ${item.name} </a>`;
  }), renderComponent($$result, "MobileHeader", $$MobileHeader, {}));
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/header-and-footer/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$DynamicBreadcrumb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DynamicBreadcrumb;
  const { url = "" } = Astro2.props;
  function getBreadcrumbItems(url2) {
    if (!url2) return [];
    const segments = url2.replace(/^\//, "").split("/").filter(Boolean);
    const items2 = [{ name: "Home", href: "/" }];
    let path = "";
    for (const segment of segments) {
      path += "/" + segment;
      items2.push({
        name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        href: path
      });
    }
    return items2;
  }
  const items = getBreadcrumbItems(url);
  return renderTemplate`${items.length > 0 && url.length > 1 && renderTemplate`${maybeRenderHead()}<nav aria-label="Breadcrumb" class="max-w-6xl mx-auto p-3"><ol class="flex items-center gap-1 text-sm text-gray-700">${items.map((item, idx) => renderTemplate`<li class="flex items-center">${idx > 0 && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="size-4 mx-1 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`}${idx < items.length - 1 ? renderTemplate`<a${addAttribute(item.href, "href")} class="block transition-colors hover:text-gray-900">${item.name}</a>` : renderTemplate`<span class="block font-semibold text-indigo-700" aria-current="page">${item.name}</span>`}</li>`)}</ol></nav>`}`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/dynamic-components/DynamicBreadcrumb.astro", void 0);

const $$NewsletterSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-screen shadow-xl px-4 md:px-0 py-14 flex flex-col items-center bg-gradient-to-br from-[#eaf1fb] via-[#f6fafd] to-[#e0e7ff]" style="position: relative; overflow: hidden;"> <svg class="absolute left-0 top-0 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 120 120" fill="none"> <rect x="20" y="10" width="8" height="100" rx="4" fill="#2563eb" fill-opacity="0.10"></rect> <rect x="50" y="30" width="4" height="60" rx="2" fill="#60a5fa" fill-opacity="0.10"></rect> <rect x="80" y="20" width="6" height="80" rx="3" fill="#818cf8" fill-opacity="0.10"></rect> </svg> <svg class="absolute right-0 bottom-0 w-32 h-32 opacity-20 pointer-events-none" viewBox="0 0 120 120" fill="none"> <rect x="90" y="10" width="8" height="100" rx="4" fill="#2563eb" fill-opacity="0.10"></rect> <rect x="60" y="30" width="4" height="60" rx="2" fill="#60a5fa" fill-opacity="0.10"></rect> <rect x="30" y="20" width="6" height="80" rx="3" fill="#818cf8" fill-opacity="0.10"></rect> </svg> <h2 class="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4" style="font-family: 'Inter', 'Segoe UI', 'Helvetica Neue', Arial, 'sans-serif';">
Stay in the Loop
</h2> <p class="text-lg text-gray-700 text-center mb-8 max-w-xl">
Get the latest updates from Botify Life! Join our newsletter for exclusive news, product launches, and AI automation tips.
</p> <form class="w-full max-w-md flex flex-col sm:flex-row gap-4 justify-center"> <input type="email" required placeholder="Enter your email" class="flex-1 px-5 py-3 rounded-xl bg-white text-gray-800 placeholder-gray-400 border border-blue-200 focus:border-blue-500 focus:outline-none transition"> <button type="submit" class="cursor-pointer px-7 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">
Notify me
</button> </form> </section>`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/components/NewsletterSection.astro", void 0);

const $$Astro = createAstro();
const $$Page = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Page;
  const {
    title = "Sibera - All-in-one Business Management",
    description = "Sibera is a comprehensive business management solution offering Support, Tasks, File Manager, Invoices, Time Tracking, and IoT integration.",
    image = "/favicon.svg",
    pageUrl = "/"
  } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-qo5xhe7c> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/x-icon" href="https://sibera.work/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(image, "content")}>${renderHead()}</head> <body data-astro-cid-qo5xhe7c> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-qo5xhe7c": true })} <main class="pt-16" data-astro-cid-qo5xhe7c> ${renderComponent($$result, "DynamicBreadcrumb", $$DynamicBreadcrumb, { "url": pageUrl, "data-astro-cid-qo5xhe7c": true })} ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "NewsletterSection", $$NewsletterSection, { "data-astro-cid-qo5xhe7c": true })} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-qo5xhe7c": true })} </body></html>`;
}, "C:/Users/Suryansh/Desktop/Projects/Sibera/sibera-astro-js-website/src/layouts/Page.astro", void 0);

export { $$Page as $, allApps as a, getThemeByCategory as g };
