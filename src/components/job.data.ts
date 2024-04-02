import { Job, TechnologyLevel } from './types';

export const jobs: Job[] = [
  {
    position: 'Senior JavaScript Developer',
    title: 'Road.Travel',
    subtitle: 'A British startup operating in the travel guides industry',
    link: 'https://road.travel',
    logo: 'road-travel.svg',
    years: '2022 — 2024',
    bullets: [
      'I worked on both frontend (more focus) and backend (less focus) parts of the project. Project heavily utilized GraphQL',
      'Developed new fancy features for our React application using Next.js, Urql/Relay, Effector/Jotai, and others',
      'Completely rebuilt our Map Search module from scratch, to make it more maintainable and usable for other developers',
      'Implemented various improvements in developer experience, introducing tools like Prettier, end-to-end (e2e) tests, and adopting better CSS methodologies',
      'Created a suite of Playwright tests for our project, significantly helping in the identification of bugs before deployment, especially those related to authentication',
      'Developed many of our landing pages using Qwik, Tailwind, and Payload CMS',
      'Assisted to our designer in using Figma effectively for component design, it helped a lot to speed up the development process',
      'Provided support for our legacy Angular project, that we had alongside our new React app',
    ],
    technologies: [
      {
        title: 'TS',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'React',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Tailwind',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Effector',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'GraphQL',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Relay',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Next.js',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'Urql',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'Jotai',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'Nest.js',
        level: TechnologyLevel.Familiar,
      },
      {
        title: 'Angular',
        level: TechnologyLevel.Familiar,
      },
      {
        title: 'MongoDB',
        level: TechnologyLevel.Familiar,
      },
    ],
  },
  {
    position: 'Senior JavaScript Developer',
    title: 'Adalisk',
    subtitle:
      'An outsourcing company providing services for one of the biggest American dental companies',
    link: 'https://adalisk.com',
    logo: 'adalisk.png',
    years: '2021',
    bullets: [
      'I was the only web developer in a team, the rest were C++ developers that I collaborated with',
      'Developed a customer-facing service enabling them to visualize digital 3D representations of their jaws, utilizing the Three.js library and its React counterpart, react-three-fiber, which was both fun and enjoyable.',
      'Created an internal service to manage configurations for the primary C++ application, employing Blueprint.js as a UI toolkit',
    ],
    technologies: [
      {
        title: 'TS',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'React',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Redux',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Next.js',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Three.js',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'Blueprint.js',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'AWS',
        level: TechnologyLevel.Familiar,
      },
      {
        title: 'S3',
        level: TechnologyLevel.Familiar,
      },
      {
        title: 'Terraform',
        level: TechnologyLevel.Familiar,
      },
    ],
  },
  {
    position: 'Tech Lead JavaScript Developer',
    title: 'Stream',
    subtitle:
      'A child company of MTS, one of the largest Russian telecom companies',
    link: 'https://stream.ru',
    logo: 'stream.svg',
    years: '2019 — 2020',
    bullets: [
      'I worked on the project "Smart University", focusing on online education by facilitating student-teacher connections. Project extensively used WebSockets and WebRTC technologies. De facto I held a role close to a Tech Lead developer',
      'Implemented a new architecture while modernizing the legacy one. Initiated the transition from a "by-layer" to a "by-module" package approach.',
      'Developed supporting tools for developers, simplifying routine tasks such as quick lesson creation for testing purposes. Successfully established CI/CD pipelines for frontend development.',
      'Actively contributed to enhancing the development process, including conducting frontend retrospectives to synchronize on our development principles. Provided mentorship to junior/middle developers',
      'Set up effective communication with UI designers to break language barriers and endorse collaboration.',
      'Configured Slack/Telegram bots for various notifications, aiming to both development and marketing needs',
      'Advocated for a more efficient planning system, introducing planning poker as an alternative to estimating tasks in hours. Proposed the use of separate chats for separate tasks to prevent valuable information from getting lost in a stream of messages.',
    ],

    technologies: [
      {
        title: 'React',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Redux',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Axios',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Gatsby.js',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'Lerna',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'WebRTC',
        level: TechnologyLevel.Medium,
      },
    ],
  },
  {
    position: 'Senior JavaScript Developer',
    title: 'OZON',
    subtitle: 'An online retailer, one of the biggest ones in Russia',
    link: 'https://ozon.ru',
    logo: 'ozon.svg',
    years: '2019',
    bullets: [
      'I had my first production experience with Vue.js',
      'Developed client services for our payment systems utilizing Vue.js and Nuxt.js',
      'Engaged in automated testing using webdriver.io, alongside legacy testing tools written in Python',
    ],
    technologies: [
      {
        title: 'Vue',
        level: TechnologyLevel.Strong,
      },
      {
        title: 'Nuxt',
        level: TechnologyLevel.Medium,
      },
      {
        title: 'Webdriver.io',
        level: TechnologyLevel.Medium,
      },
    ],
  },

  {
    title: 'Sravni.ru',
    link: '//www.sravni.ru',
    years: '2018',
    subtitle: 'A financial marketplace, second biggest one in Russia',
    position: 'Senior JavaScript Developer',
    bullets: [
      'I worked on the development of a car insurance service and various whitelabel widgets',
    ],
  },
  {
    title: 'Domclick',
    link: '//domclick.ru/',
    years: '2017',
    subtitle: 'A child company of Sberbank, the biggest russian bank',
    position: 'Middle JavaScript Developer',
    bullets: [
      'I worked on several React applications here',
      'Participated in two departments: one focused on mortgage solutions and the other on real estate services',
    ],
  },
  {
    title: 'Double Data',
    link: '//doubledata.ru/',
    years: '2016',
    subtitle:
      'A Russian startup from Skolkovo (local tech incubator), specializing in risk management solutions',
    position: 'Junior JavaScript Developer',
    bullets: [
      'I helped to build bank offer solution showcases service and various parts of our main risk management solution application',
      'Worked with AngularJS and KnockoutJS and later expanded my skills to include React and its ecosystem during my work here',
    ],
  },
];
