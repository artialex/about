export enum TechnologyLevel {
  Strong,
  Medium,
  Familiar,
}

interface Technology {
  title: string;
  level: TechnologyLevel;
}

interface Job {
  title: string;
  link: string;
  years: string;
  position?: string;
  subtitle?: string;
  logo?: string;
  duties?: string[];
  description?: string;
  technologies?: Technology[];
}

export const jobs: Job[] = [
  {
    position: 'Senior JavaScript Developer',
    title: 'Road.Travel',
    subtitle: 'A British startup that works in the field of travel guides',
    link: 'https://road.travel',
    logo: 'road-travel.svg',
    years: '2022',
    description:
      'I worked here as a senior web developer, doing not only frontend tasks but a bit of backend as well',
    duties: [
      'I developed new fancy features for our React application using Next.js, Relay, Effector, and other technologies',
      'I sometimes supported our Angular project, that we had alongside our React app',
      'I built a frontend for a couple of our landings using Tailwind and I liked it',
      'I gently dived into our backend and helped with simple tasks',
      'I also UIkit-ified our Figma designs',
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
      'An outsourcing company that provides services for one of the biggest American dentist companies',
    link: 'https://adalisk.com',
    logo: 'adalisk.png',
    years: '2021',
    description:
      'I worked as the only web developer in a team, the rest were C++ developers',
    duties: [
      'I built a service for our customers that allowed them to see digital 3D views of their jaws. I used Three.js library and its corresponding React counterpart react-three-fiber. Was fun and enjoyable',
      'I created an internal service to control the configurations of the main C++ application. I used Blueprint.js as a UI kit',
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
      'Child company of MTS, one of the biggest Russian telecom companies',
    link: 'https://stream.ru',
    logo: 'stream.svg',
    years: '2019 — 2020',
    description:
      'I worked on the project "Smart University", it was about online education, connecting students and teachers. Project heavily used WebSockets and WebRTC technologies. My role was close to a Tech Lead developer',
    duties: [
      'I developed a new architecture and supporting/modernizing the legacy one. I kickstarted the process of moving from "pack-by-layer" to "pack-by-module" approach',
      'I worked with client-side WebRTC tools and utilities',
      'I created supporting tools for developers, simplifying everyday tasks, like quick lesson creation, for testing purposes',
      'I managed to set up CI/CD for frontend with a little help from our admins, we used Jenkins for that purpose',
      'I helped to mentor junior/middle developers',
      'I actively participated in improving the development process in general. Following bullets are the examples of such participation',
      'I conducted front-end retrospectives, in order to sync our common work and developing principles',
      'I set up the communication process with our UI designers, we had issues with it, people basically spoke in different languages',
      'I developed so-called "storybooks", for simplifying the development of new web components',
      'I set up Slack / Telegram bots for various notifications (for both development and marketing purposes)',
      'I proposed the better planning system involving planning poker instead of estimating tasks in hours',
      'I proposed separate chats for separate tasks (because valuable information sunk in a stream of messages)',
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
    subtitle: 'Online retailer, one of the biggest ones in Russia',
    link: 'https://ozon.ru',
    logo: 'ozon.svg',
    years: '2019',
    description:
      'When working at Ozon I tried Vue for the first time in production',
    duties: [
      'I developed client services using Vue & Nuxt',
      'I participated in automated testing with webdriver.io and with the old one written in Python',
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
    subtitle: 'Financial marketplace, second biggest one in Russia',
  },
  {
    title: 'Domclick',
    link: '//domclick.ru/',
    years: '2017',
    subtitle: 'Child company of Sberbank, the biggest russian bank',
  },
  {
    title: 'Double Data',
    link: '//doubledata.ru/',
    years: '2016',
    subtitle:
      'Russian startup from Skolkovo, that provides risk management solutions',
  },
];
