export interface AppData {
  appId: string;
  appName: string;
  appSlug?: string;
  appDescription: string;
  appCategory: string;
  appType: string;
  noCodeApp: boolean;
  creationDate: string;
  appInternalPageLink?: string;
  launchState: string;
  appLogo: string;
}

export const allApps: AppData[] = [
  {
    appId: '64763f4e1213208699bcafa4',
    appName: 'Ads',
    appSlug: 'ads',
    appDescription: 'Manage all your ads at one place and create ads that doubles your revenue',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:24:14.124Z',
    appInternalPageLink: '/app/si-ads',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-ads.svg'
  },
  {
    appId: '647b9860e472d3d07ece6a35',
    appName: 'Asset Management',
    appSlug: 'asset-management',
    appDescription: 'Manage all your asset under one roof with all easy manageable documentation ',
    appCategory: 'IT & Administration Suite',
    appType: 'application',
    noCodeApp: true,
    appInternalPageLink: '/app/si-docs',
    creationDate: '2023-06-03T19:45:36.088Z',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-docs.svg'
  },
  {
    appId: '64763e201213208699bcaf7e',
    appName: 'Assist',
    appSlug: 'assist',
    appDescription: "Extend technical support by allowing remote access into your device or access a customer's device",
    appCategory: 'IT & Administration Suite',
    appType: 'application',
    noCodeApp: true,
    creationDate: '2023-05-30T18:19:12.890Z',
    appInternalPageLink: '/app/si-assist',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-assist.svg'
  },
  {
    appId: '64763c2b1213208699bcaf48',
    appName: 'CMS',
    appSlug: 'cms',
    appDescription:
      'Reach the top of the game by creating websites with us. Get flexible themes that can be easily edited and personalized',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:10:51.821Z',
    appInternalPageLink: '/app/si-cms',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-cms.svg'
  },
  {
    appId: '64763ea21213208699bcaf90',
    appName: 'Campaign',
    appSlug: 'campaign',
    appDescription: 'Si-campaigns gives you a perfectly smooth platform to manage different types of campaigns at one place',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:21:22.935Z',
    appInternalPageLink: '/app/si-campaign',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-campaign.svg'
  },
  {
    appId: '64763bd31213208699bcaf40',
    appName: 'Chatbot',
    appSlug: 'chatbot',
    appDescription: 'Better lead conversion, faster support and visitor engagement with Si-Chatbot',
    appCategory: 'Tools',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:09:23.709Z',
    appInternalPageLink: '/app/si-chatbot',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-chatbot.svg'
  },
  {
    appId: '64763ece1213208699bcaf94',
    appName: 'Client End',
    appSlug: 'client-end',
    appDescription: 'Have a complete outlook on your ongoing projects and see progress of projects and track payments',
    appCategory: 'Tools',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:22:06.360Z',
    appInternalPageLink: '/app/si-client-end',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-client-end.svg'
  },
  {
    appId: '647575201213208699bcaddc',
    appName: 'Communication',
    appSlug: 'communication',
    appDescription: 'Enrich your contact data and maintain stronger customer relationships with great communication and management',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T04:01:36.609Z',
    appInternalPageLink: '/app/si-communication',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-communication.svg'
  },
  {
    appId: '64783b72eb7a3c01e57b7cb4',
    appName: 'Data Plus',
    appSlug: 'data-plus',
    appDescription: 'Erich your data, Email, Phone, WhatsApp etc',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: true,
    appInternalPageLink: '/app/si-data-plus',
    creationDate: '2023-06-01T06:32:18.691Z',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-file-manager.svg'
  },
  {
    appId: '64763f721213208699bcafa8',
    appName: 'Deals',
    appSlug: 'deals',
    appDescription: 'deals in your own pipeline which lets you to have automatic follow-ups and even predict future revenue',
    appCategory: 'Sales Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:24:50.348Z',
    appInternalPageLink: '/app/si-deals',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-deals.svg'
  },
  {
    appId: '64763e851213208699bcaf8c',
    appName: 'Delivery',
    appSlug: 'delivery',
    appDescription: 'Provide seamless deliveries when you use Sibera for fleet management and all types of delivery',
    appCategory: 'Business Solutions',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:20:53.092Z',
    appInternalPageLink: '/app/si-delivery',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-delivery.svg'
  },
  {
    appId: '64763c8a1213208699bcaf50',
    appName: 'Docs',
    appSlug: 'docs',
    appDescription:
      'Get e-signatures, payments and manage documents easily using all the professional tools you need to create and maintain your documents',
    appCategory: 'Tools',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:12:26.621Z',
    appInternalPageLink: '/app/si-docs',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-docs.svg'
  },
  {
    appId: '64775e8540cc60928c10edec',
    appName: 'Expense Tracker',
    appSlug: 'expense-tracker',
    appDescription: 'Now manage you expense and income easily',
    appCategory: 'Finance & Accounts Suite',
    appType: 'application',
    noCodeApp: true,
    appInternalPageLink: '/app/expense-tracker',
    creationDate: '2023-05-31T14:49:41.864Z',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-finance-n-account.svg'
  },
  {
    appId: '64763c671213208699bcaf4c',
    appName: 'File Manager',
    appSlug: 'file-manager',
    appDescription: 'Store, access and share your content easily on Si-file Manager, virtually from any device with an internet',
    appCategory: 'Tools',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:11:51.464Z',
    appInternalPageLink: '/app/si-file-manager',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-file-manager.svg'
  },
  {
    appId: '64763df31213208699bcaf76',
    appName: 'Finance & Account',
    appSlug: 'finance-account',
    appDescription: 'Get your finances right with Sibera. Focus on growing those numbers for your business, while we take care of the rest',
    appCategory: 'Finance & Accounts Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:18:27.306Z',
    appInternalPageLink: '/app/si-finance-n-account',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-finance-n-account.svg'
  },
  {
    appId: '64763faf1213208699bcafb2',
    appName: 'Forecast',
    appSlug: 'forecast',
    appDescription: 'Use Si-Forecast to predict monthly sales revenues and assign targets for team',
    appCategory: 'Sales Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:25:51.680Z',
    appInternalPageLink: '/app/si-forecast',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-forecast.svg'
  },
  {
    appId: '6475753d1213208699bcade0',
    appName: 'Form',
    appSlug: 'form',
    appDescription: 'Engage with website visitors with interactive forms and turn them into leads',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T04:02:05.423Z',
    appInternalPageLink: '/app/si-form',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-form.svg'
  },
  {
    appId: '64763dcf1213208699bcaf72',
    appName: 'HR',
    appSlug: 'hr',
    appDescription: 'Manage all your employees, with employee directory, leave management etc. with Si-HR',
    appCategory: 'HR Solutions Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:17:51.127Z',
    appInternalPageLink: '/app/si-hr',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-hr.svg'
  },
  {
    appId: '64763daf1213208699bcaf6e',
    appName: 'Hiring',
    appSlug: 'hiring',
    appDescription: 'Make your hiring process smoother with Si-HR and hire people faster',
    appCategory: 'HR Solutions Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:17:19.221Z',
    appInternalPageLink: '/app/si-hiring',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-hiring.svg'
  },
  {
    appId: '64763e6a1213208699bcaf88',
    appName: 'Hospitality',
    appSlug: 'hospitality',
    appDescription: 'Make your hotel management and hospitality business smarter with Sibera',
    appCategory: 'Business Solutions',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:20:26.228Z',
    appInternalPageLink: '/app/si-hospital',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-hospital.svg'
  },
  {
    appId: '64763d491213208699bcaf63',
    appName: 'Invoice',
    appSlug: 'invoice',
    appDescription: 'Create professional invoices with multi-country tax support, payment links, and PDF generation',
    appCategory: 'Finance & Accounts Suite',
    appType: 'application',
    noCodeApp: true,
    creationDate: '2024-01-15T10:00:00.000Z',
    appInternalPageLink: '/app/si-invoice',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-invoice.svg'
  },
  {
    appId: '64763t491213208699bcaf64',
    appName: 'Time Tracker',
    appSlug: 'time-tracker',
    appDescription: 'Track time across all devices with automatic screenshots, activity monitoring, and detailed reports',
    appCategory: 'Productivity Suite',
    appType: 'application',
    noCodeApp: true,
    creationDate: '2024-01-20T10:00:00.000Z',
    appInternalPageLink: '/app/si-time-tracker',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-time-tracker.svg'
  },
  {
    appId: '64763fef1213208699bcafba',
    appName: 'IoT',
    appSlug: 'iot',
    appDescription:
      'Integrate your business with Sibera’s IoT solutions today and easily manage all your software and hardware applications together',
    appCategory: 'IoT',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:26:55.297Z',
    appInternalPageLink: '/app/si-iot',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-iot.svg'
  },
  {
    appId: '64763f2c1213208699bcafa0',
    appName: 'Journey',
    appSlug: 'journey',
    appDescription: 'Know more about your leads as you take them on their personal journeys and make sure interaction is at its best',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:23:40.224Z',
    appInternalPageLink: '/app/si-journey',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-journey.svg'
  },
  {
    appId: '64763d491213208699bcaf62',
    appName: 'Link Short',
    appSlug: 'link-short',
    appDescription: 'Shorten long urls with Si-Links, and track the activities on your links',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: true,
    creationDate: '2023-05-30T18:15:37.990Z',
    appInternalPageLink: '/app/si-link',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-link.svg'
  },
  {
    appId: '64763d1a1213208699bcaf5e',
    appName: 'Meet',
    appSlug: 'meet',
    appDescription: 'Schedule meetings with Si-Meet by using just one meeting link to meet multiple prospects',
    appCategory: 'Sales Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:14:50.151Z',
    appInternalPageLink: '/app/si-meet',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-meet.svg'
  },
  {
    appId: '6476400e1213208699bcafbe',
    appName: 'POS',
    appSlug: 'pos',
    appDescription: 'Be it your smartphone or a tablet, turn any portable device into a flexible POS',
    appCategory: 'Sales Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:27:26.604Z',
    appInternalPageLink: '/app/si-pos',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-pos.svg'
  },
  {
    appId: '64763d711213208699bcaf66',
    appName: 'Payroll',
    appSlug: 'payroll',
    appDescription: 'Avoid maintaining salary sheets every month end. Have a speedy payroll with Si-Payroll',
    appCategory: 'HR Solutions Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:16:17.438Z',
    appInternalPageLink: '/app/si-payroll',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-payroll.svg'
  },
  {
    appId: '64763d941213208699bcaf6a',
    appName: 'Performance',
    appSlug: 'performance',
    appDescription: 'With our Performance management system, you can compare, analyse and track employee performance over time',
    appCategory: 'HR Solutions Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:16:52.359Z',
    appInternalPageLink: '/app/si-performance',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-performance.svg'
  },
  {
    appId: '64763fce1213208699bcafb6',
    appName: 'Real Estate',
    appSlug: 'real-estate',
    appDescription: 'Take your real estate business to the next level with Si-Real Estate and see all your properties grow with tech',
    appCategory: 'Business Solutions',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:26:22.403Z',
    appInternalPageLink: '/app/si-real-estate',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-real-estate.svg'
  },
  {
    appId: '64763ef21213208699bcaf98',
    appName: 'Reports',
    appSlug: 'reports',
    appDescription: 'Generate reports for all your marketing and sales activities to make better decisions',
    appCategory: 'Tools',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:22:42.702Z',
    appInternalPageLink: '/app/si-reports',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-reports.svg'
  },
  {
    appId: '64763f991213208699bcafae',
    appName: 'Sales Automate',
    appSlug: 'sales-automate',
    appDescription:
      'Let your sales team engage with leads with automated and personalized touchpoints to improve conversions by unbelievable rates',
    appCategory: 'Sales Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:25:29.089Z',
    appInternalPageLink: '/app/si-sales-automate',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-sales-automate.svg'
  },
  {
    appId: '64763f0f1213208699bcaf9c',
    appName: 'Social',
    appSlug: 'social',
    appDescription:
      'Use Si-Social to easily manage, publish and organize your social media brands. Also, chat directly with your customers',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:23:11.923Z',
    appInternalPageLink: '/app/si-social',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-social.svg'
  },
  {
    appId: '64763e4e1213208699bcaf84',
    appName: 'Support',
    appSlug: 'support',
    appDescription: 'A simpler way to do customer support, with Ticket management, AI chatbots, Knowledge Base, etc.',
    appCategory: 'Tools',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:19:58.830Z',
    appInternalPageLink: '/app/si-support',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-support.svg'
  },
  {
    appId: '6475755e1213208699bcade4',
    appName: 'Survey',
    appSlug: 'survey',
    appDescription: 'A faster and easy way to get audience remarks and improve yourself accordingly',
    appCategory: 'Marketing Suite',
    appType: 'application',
    noCodeApp: true,
    creationDate: '2023-05-30T04:02:38.668Z',
    appInternalPageLink: '/app/si-survey',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-survey.svg'
  },
  {
    appId: '64763cae1213208699bcaf56',
    appName: 'Tasks',
    appSlug: 'tasks',
    appDescription: 'Si-tasks is a simple and powerful tool that makes your life easier by setting up reminders for every task that you do',
    appCategory: 'Tools',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T18:13:02.010Z',
    appInternalPageLink: '/app/si-tasks',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-tasks.svg'
  },
  {
    appId: '6475759c1213208699bcadec',
    appName: 'Track',
    appSlug: 'track',
    appDescription: 'Track attendance and location of on-field agents from anywhere and at any time',
    appCategory: 'HR Solutions Suite',
    appType: 'application',
    noCodeApp: false,
    creationDate: '2023-05-30T04:03:40.842Z',
    appInternalPageLink: '/app/si-track',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-track.svg'
  },
  {
    appId: '64783b4deb7a3c01e57b7cb0',
    appName: 'Wise Learn',
    appSlug: 'wise-learn',
    appDescription: 'Easy to manage institution, School, Personal Tuition, Hostel Management etc ',
    appCategory: 'Business Solutions',
    appType: 'application',
    noCodeApp: true,
    appInternalPageLink: '/app/si-wise-learn',
    creationDate: '2023-06-01T06:31:41.619Z',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-form.svg'
  },
  {
    appId: '64783b4deb7a3c01e57b7cb0',
    appName: 'Hospital',
    appSlug: 'hospital',
    appDescription: 'Watch your healthcare organisation grow Sibera. Transform your business into a world-class service facility',
    appCategory: 'Business Solutions',
    appType: 'application',
    noCodeApp: true,
    appInternalPageLink: '/app/si-hospital',
    creationDate: '2023-06-01T06:31:41.619Z',
    launchState: 'mvp',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-healthcare.svg'
  },
  {
    appId: '64783b4deb7a3c01e57b7cb0',
    appName: 'Contracts',
    appSlug: 'contracts',
    appDescription: 'Comprehensive contract lifecycle management software.',
    appCategory: 'Legal Suite',
    appType: 'application',
    noCodeApp: true,
    appInternalPageLink: '/app/si-contracts',
    creationDate: '2023-06-01T06:31:41.619Z',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-form.svg'
  },
  {
    appId: '64783b4deb7a3c01e57b7cb0',
    appName: 'Sign',
    appSlug: 'sign',
    appDescription: 'Digital signature app for businesses.',
    appCategory: 'Legal Suite',
    appType: 'application',
    noCodeApp: true,
    appInternalPageLink: '/app/si-contracts',
    creationDate: '2023-06-01T06:31:41.619Z',
    launchState: 'coming-soon',
    appLogo: 'https://ik.imagekit.io/esdata1/sibera/logo/sibera-icons/si-form.svg'
  }
];

export const getAppsByCategory = () => {
  const categories: Record<string, AppData[]> = {};
  allApps.forEach((app) => {
    if (!categories[app.appCategory]) {
      categories[app.appCategory] = [];
    }
    categories[app.appCategory].push(app);
  });
  return categories;
};
