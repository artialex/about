import { Text } from '../components/Text';

const jobs = [
  {
    company: 'ROGII',
    bullets: [
      'Built complex _interactive visualizations_ and _data-driven interfaces_ using D3, SVG, and Three.js, including features such as fullscreen mode, handling real-time and historical datasets, advanced UI interactions (windows, panes, drag-and-drop), and virtualized data tables.',
      'Developed and maintained _4 reusable pluggable widgets_ (out of 10+) for DrillSpot, the company’s flagship web application, using SVG/D3 and Three.js depending on visualization and performance requirements.',
      'Established a standardized approach for implementing new data pipelines and visualization flows (data collection → processing → filtering → presentation), utilizing algorithms such as sweep line for geometry-related tasks.',

      'Led _technical discussions_ and helped drive architectural and engineering decisions across the team through _approaches such as ADRs_.',
      'Initiated and led multiple engineering improvements, including _migration from Webpack to Rspack_ (improving build performance by 10x and significantly enhancing developer experience), and migration _from TypeScript 4 to TypeScript 5_.',
      'Drove adoption of a _modular architecture approach_ to improve maintainability and reduce complexity in a growing codebase.',
      'Contributed to development and evolution of the _company UI kit_, improving consistency and increasing development efficiency.',
      'Introduced _Storybook_ to improve component isolation, documentation, bug detection, and UI development workflows',
    ],
    years: '2024 — 2026',
    role: 'Senior Software Engineer / Technical Lead',
    link: 'https://rogii.com',
  },
  {
    company: 'Road.Travel',
    bullets: [
      'Contributed across _both frontend and backend_ development, with a primary focus on frontend architecture and GraphQL-based systems.',
      'Designed, developed, and delivered user-facing features for a large React application built around _GraphQL_, using Next.js, urql/Relay, and related frontend technologies.',
      'Built multiple _dynamic landing pages_ integrated with backend-driven content using Qwik, Tailwind, and Payload CMS.',
      'Supported and maintained a _legacy Angular application_ while contributing to the evolution of the newer React platform.',
      'Solely developed a _standalone white-label version of the application_ for an automotive partner.',

      'Rebuilt the Map Search module from scratch, improving maintainability and creating a _more scalable and reusable foundation_ for future development.',
      'Introduced development standards and tools such as _Prettier_, _end-to-end testing_, and _improved CSS practices_ to increase consistency and enhance developer experience.',
      'Built several _Playwright test suites_ that improved bug detection before releases, particularly for authentication flows.',
    ],
    years: '2022 — 2024',
    role: 'Senior Software Engineer / Technical Lead',
    link: 'httpd://road.travel',
  },
  {
    company: 'Adalisk',
    bullets: [
      'Worked as the _only web developer_ in a C++-focused team, collaborating closely on product development while _owning all web application development_.',
      'Developed a customer-facing application from scratch for _viewing and interacting with digital 3D jaw models_ using Three.js and React Three Fiber.',
      'Built a set of _internal configuration management tools_ from scratch for the core C++ application using Blueprint.js.',
    ],

    years: '2021 — 2022',
    role: 'Senior Software Engineer',
    link: 'https://adalisk.com',
  },
];

export function RecentExperience() {
  return (
    <section className="max-w-xl">
      <h2 className="mb-2 text-xl italic text-gray-500  print:text-sm">Recent Experience</h2>
      <ul className="space-y-9">
        {jobs.map(({ company, link, role, years, bullets }) => (
          <li>
            <div className="flex flex-col items-baseline md:flex-row">
              <div className="flex items-baseline gap-4">
                <h3 className="mb-2 inline-block text-2xl font-semibold print:text-sm">
                  <a href={link} target="_blank" rel="noreferrer" className="link">
                    {company}
                  </a>
                </h3>
                <span className="print:text-sm">{years}</span>
              </div>
              <div className="mb-2 text-sm italic md:ml-auto">{role}</div>
            </div>

            <ul className="experience-list text-sm">
              {bullets.map((bullet, index) => (
                <li key={index}>
                  <Text>{bullet}</Text>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
