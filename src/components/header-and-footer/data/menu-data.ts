export interface MenuItem {
  name: string;
  href: string;
  description?: string;
  icon?: string; // Font Awesome class, e.g. "fa-solid fa-house"
  children?: MenuItem[];
}

export const menuData: MenuItem[] = [
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "Support",
        href: "/products/support",
        description: "Comprehensive support ticket system",
        icon: "fa-solid fa-headset",
      },
      {
        name: "Tasks",
        href: "/products/tasks",
        description: "Efficient task management",
        icon: "fa-solid fa-list-check",
      },
      {
        name: "File Manager",
        href: "/products/files",
        description: "Secure file storage and sharing",
        icon: "fa-solid fa-folder-open",
      },
      {
        name: "Invoice",
        href: "/products/invoice",
        description: "Professional invoicing and billing",
        icon: "fa-solid fa-file-invoice-dollar",
      },
      {
        name: "Time Tracker",
        href: "/products/time-tracker",
        description: "Track time and productivity",
        icon: "fa-solid fa-clock",
      },
      {
        name: "IoT",
        href: "/products/iot",
        description: "Integrated IoT device management",
        icon: "fa-solid fa-microchip",
      }
    ],
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

export const footerMenuData: MenuItem[] = [
  {
    name: "Products",
    href: "#",
    children: [
      {
        name: "Support",
        href: "/products/support",
        description: "Comprehensive support ticket system",
        icon: "fa-solid fa-headset",
      },
      {
        name: "Tasks",
        href: "/products/tasks",
        description: "Efficient task management",
        icon: "fa-solid fa-list-check",
      },
      {
        name: "File Manager",
        href: "/products/files",
        description: "Secure file storage and sharing",
        icon: "fa-solid fa-folder-open",
      },
      {
        name: "Invoice",
        href: "/products/invoice",
        description: "Professional invoicing and billing",
        icon: "fa-solid fa-file-invoice-dollar",
      },
      {
        name: "Time Tracker",
        href: "/products/time-tracker",
        description: "Track time and productivity",
        icon: "fa-solid fa-clock",
      },
      {
        name: "IoT",
        href: "/products/iot",
        description: "Integrated IoT device management",
        icon: "fa-solid fa-microchip",
      }
    ],
  },
  {
    name: "Policies",
    href: "#",
    children: [
      {
        name: "Cookies Policy",
        href: "/policies/cookies",
        description: "Read our Cookies Policy",
        icon: "fa-solid fa-cookie-bite",
      },
      {
        name: "Privacy Policy",
        href: "/policies/privacy",
        description: "Read our Privacy Policy",
        icon: "fa-solid fa-user-shield",
      },
      {
        name: "Data Policy",
        href: "/policies/data",
        description: "Read our Data Policy",
        icon: "fa-solid fa-database",
      },
      {
        name: "Terms and Condition",
        href: "/policies/terms",
        description: "Read our Terms and Condition",
        icon: "fa-solid fa-file-contract",
      }
    ],
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