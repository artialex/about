import { Text } from '../components/Text';

const bullets = [
  'Developed frontend applications and services using _React, Vue.js, Nuxt.js, Node.js_ across multiple industries.',
  'Worked on projects involving _real-time communication_ and collaboration features using technologies such as _WebSockets and WebRTC_.',
  'Participated in (and often initiated) architecture modernization initiatives, including migration from layer-based structures toward more _modular and scalable approaches_, microservices adoption, and legacy system modernization.',
  'Built and maintained widgets, frontend services, and supporting tools for internal and external products.',
  'Introduced and _improved development processes_ through CI/CD setup, automated testing, developer tooling, and workflow improvements.',
  'Worked with _multiple testing technologies_ including Jest, Cypress, Selenium, webdriver.io, Protractor, and Python-based test frameworks.',
  '_Mentored developers_, led technical discussions and retrospectives, and collaborated closely with designers and cross-functional teams.',
  '_Improved team communication_ and productivity through process changes, automation, and internal tools.',
];

export function PreviousExperience() {
  return (
    <section className="mt-12 max-w-xl">
      <h2 className="mb-2 text-xl italic  text-gray-500 print:text-sm">Previous Experience</h2>
      <div className="mb-2 flex items-baseline gap-4">
        <span>2014 — 2021</span>
        <span className="ml-auto text-sm">JavaScript Engineer</span>
      </div>
      <p className="italic print:text-sm">
        Worked across various Russian telecom, e-commerce, finance, real estate, education, and startup products,
        contributing to both customer-facing and internal systems.
      </p>
      <ul className="experience-list text-sm">
        {bullets.map((bullet, index) => (
          <li key={index}>
            <Text>{bullet}</Text>
          </li>
        ))}
      </ul>
    </section>
  );
}
