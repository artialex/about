(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`<img src="me.png" width="150" alt="Alexey Selivanov">

<h1>Alexey (Alex) Selivanov</h1>
<ul>
<li>Target Role: Senior Software Engineer (Frontend-focused)</li>
<li>Location: Yerevan, Armenia (open to <strong>Remote</strong> / Relocation)</li>
<li>Languages: Russian (Native), English (B2)</li>
</ul>
<p><a href="https://github.com/artialex">GitHub</a> | <a href="https://www.linkedin.com/in/artialex/">LinkedIn</a> | <a href="https://t.me/arti_alex">Telegram</a> | <a href="https://artialex.github.io">Website (Personal Notes)</a> | <a href="https://gist.github.com/artialex/674ef4abbe0aaaa8e83fd98c0dd39bfe">CV.md</a> | <a href="https://artialex.github.io/about/Alexey_Selivanov.pdf">CV.pdf</a></p>
<h2>Profile</h2>
<p>Senior Software Engineer with 12+ years of experience building scalable web applications and improving engineering processes. Strong background in JavaScript / TypeScript, React ecosystem, frontend architecture, developer experience, and cross-team collaboration. Focused on creating maintainable systems, improving development workflows, and driving technical initiatives that increase team productivity and product quality</p>
<p>Particularly interested in interactive experiences, data visualization, and 2D/3D graphics technologies</p>
<h2>Core Skills</h2>
<ul>
<li><strong>Frontend Architecture</strong>: designing scalable, modular applications with <a href="http://www.javapractices.com/topic/TopicAction.do?Id=205">&quot;package-by-feature&quot;</a> approach, and pluggable components</li>
<li><strong>Full-Stack Collaboration</strong>: experience with Node.js, NestJS, GraphQL, API contracts, mocking (MSW), and close collaboration with backend teams</li>
<li><strong>Technical Leadership</strong>: leading technical discussions, writing <a href="https://github.com/architecture-decision-record/architecture-decision-record">ADRs</a>, improving engineering practices, designing UI libraries, and collaborating across teams</li>
<li><strong>Interactive Graphics &amp; Visualization</strong>: building high-performance 2D and 3D interactive applications using Three.js, D3.js, TLDraw SDK, and React Flow</li>
<li><strong>Continuous Learning</strong>: T-shaped engineer with a strong interest in computer graphics, backend engineering, systems programming, and applied mathematics</li>
<li><strong>AI Productivity</strong>: daily use of AI tools, for coding, debugging, testing, documentation, and technical research</li>
</ul>
<h3>Technologies</h3>
<ul>
<li>Languages: JavaScript, TypeScript</li>
<li>View Libs: React / Next.js, Vue / Nuxt, Angular</li>
<li>State Management Libs: Redux, XState, MobX, Zustand</li>
<li>Interactive Graphics: Three.js / R3F, SVG / D3.js</li>
<li>Backend: Node.js, NestJS, GraphQL / Relay, SQLite, Drizzle ORM</li>
<li>Tooling: Vite, Webpack, Jest, Rspack, Storybook, Playwright, Git / GitHub Actions</li>
</ul>
<h2>Employment History</h2>
<h3><a href="https://rogii.com/">ROGII</a> (2024 – 2026)</h3>
<p><em>An American leading provider of geological data software for the oil &amp; gas industry</em></p>
<ul>
<li>Built <strong>complex interactive visualizations and data-driven interfaces</strong> using D3, SVG, and Three.js, including features such as fullscreen mode, handling real-time and historical datasets, advanced UI interactions (windows, panes, drag-and-drop), and virtualized data tables</li>
<li>Developed and maintained <strong>4 reusable pluggable widgets</strong> (out of 10+) for DrillSpot, the company’s flagship web application, using SVG/D3 and Three.js depending on visualization and performance requirements</li>
<li>Drove adoption of a <strong>modular architecture approach</strong> to improve maintainability and reduce complexity in a growing codebase</li>
<li>Initiated and led multiple engineering improvements, including <strong>migration from Webpack to Rspack</strong> (improving build performance by 10x and significantly enhancing developer experience), and <strong>migration from TypeScript 4 to TypeScript 5</strong></li>
<li>Established a standardized approach for implementing <strong>new data pipelines and visualization flows</strong> (data collection → processing → filtering → presentation), utilizing algorithms such as sweep line for geometry-related tasks</li>
<li>Contributed to <strong>development and evolution of the company UI kit</strong>, improving consistency and increasing development efficiency</li>
<li>Introduced <strong>Storybook</strong> to enforce component isolation, resulting in improved documentation and reduction un UI-related bug reports during development</li>
</ul>
<h3><a href="https://road.travel/">Road.Travel</a> (2022 – 2024)</h3>
<p><em>A British travel-tech platform for road trip planning</em></p>
<ul>
<li>Architected and delivered <strong>core features</strong> for a React/GraphQl-based platform, ensuring high performance and scalability for a large-scale user base</li>
<li>Rebuilt the <strong>Map Search module</strong> from scratch, improving core maintainability and reducing technical debt in a critical user-facing component</li>
<li>Implemented <strong>ent-to-end testing suites</strong> (Playwright) for critical authentication and search flows, significantly reducing production regressions (by 20% at least)</li>
<li>Built <strong>multiple dynamic landing pages</strong> integrated with backend-driven content using Qwik, Tailwind, and Payload CMS</li>
<li>Supported and maintained a <strong>legacy Angular application</strong> while contributing to the evolution of the newer React platform</li>
<li>Solely developed a <strong>standalone white-label version</strong> of the application for an automotive partner</li>
</ul>
<h3><a href="https://www.adalisk.com">Adalisk</a> (2021)</h3>
<p><em>An outsource job for an American dental industry company</em></p>
<ul>
<li>Worked as the only web developer in a C++-focused team, collaborating closely on product development while owning all web application development</li>
<li>Developed a <strong>customer-facing application from scratch</strong> for viewing and interacting with digital 3D jaw models using Three.js and React Three Fiber</li>
<li>Built a <strong>set of internal configuration management tools</strong> from scratch for the core C++ application using Blueprint.js</li>
</ul>
<h3>MTS Stream (2019 – 2021)</h3>
<p><em>A child company of MTS, one of the largest telecom companies in Russia</em></p>
<p>Worked on the project &quot;Smart University&quot;, focusing on online education by facilitating student-teacher connections. Project extensively used WebSockets and WebRTC technologies. De facto I held a role close to a Tech Lead developer</p>
<ul>
<li>Implemented a new architecture while modernizing the legacy one. Initiated the transition from a &quot;by-layer&quot; to a &quot;by-module&quot; package approach</li>
<li>Developed <strong>supporting tools for developers</strong>, simplifying routine tasks such as quick lesson creation for testing purposes. Successfully established CI/CD pipelines for frontend development</li>
<li>Actively contributed to <strong>enhancing the development process</strong>, including conducting frontend retrospectives to synchronize on our development principles. Provided mentorship to junior/middle developers</li>
<li>Set up effective communication with UI designers to break language barriers and endorse collaboration</li>
<li>Configured Slack/Telegram bots for various notifications, aiming to both development and marketing needs</li>
<li>Advocated for a more efficient planning system, introducing planning poker as an alternative to estimating tasks in hours. Proposed the use of separate chats for separate tasks to prevent valuable information from getting lost in a stream of messages</li>
</ul>
<h3><em>Earlier Experience</em> (2014 – 2021)</h3>
<p><em>Collapsed under one section for convenience, visit my <a href="https://www.linkedin.com/in/artialex/">LinkedIn</a> for the full list</em></p>
<p>Worked across various Russian e-commerce, finance, real estate, education, and startup products, contributing to both customer-facing and internal systems</p>
<ul>
<li>Developed frontend applications and services using <strong>React, Vue.js, Nuxt.js, Node.js</strong> across multiple industries</li>
<li>Worked on projects involving <strong>real-time communication and collaboration features</strong> using technologies such as WebSockets and WebRTC</li>
<li>Participated in (and often initiated) <strong>architecture modernization initiatives</strong>, including migration from layer-based structures toward more modular and scalable approaches, microservices adoption, and legacy system modernization</li>
<li>Built and maintained widgets, frontend services, and supporting tools for internal and external products</li>
<li>Introduced and improved development processes through CI/CD setup, automated testing, developer tooling, and workflow improvements</li>
<li>Worked with <strong>multiple testing technologies</strong> including Jest, Cypress, Selenium, webdriver.io, Protractor, and Python-based test frameworks</li>
<li>Mentored developers, led technical discussions and retrospectives, and collaborated closely with designers and cross-functional teams</li>
<li>Improved team communication and productivity through process changes, automation, and internal tools</li>
</ul>
<h2>Personal projects</h2>
<ul>
<li>The biggest one is my <a href="https://artialex.github.io">Pensieve</a>, a <em><a href="https://en.wikipedia.org/wiki/Personal_knowledge_management">PKM</a> system</em> based on TLDraw, using Katex, <code>function-plot</code> and similar visualization tools, that was re-imagined multiple times during the process</li>
<li><a href="https://artialex.github.io/test-picsart/">Pipette Tool (Test)</a>, a really neat test assessment, written using JS Canvas</li>
<li><a href="https://github.com/artialex/lexigrind">Lexigrind</a>, an <a href="https://hugofara.github.io/lwt/">LWT</a>-style application for <em>learning new English words</em> through reading books (helped me to combine three of my interests: programming, reading books, and learning languages), it&#39;s currently in the process of re-implementation</li>
<li>Super-small <a href="https://kekwarriors.github.io/livescript-playground/">LiveScript Playground</a> that was written in LiveScript when I was into such niche stuff</li>
<li><a href="https://kekwarriors.github.io/sudoku/">Sudoku</a>, simple but interesting project written using XState</li>
</ul>
<h2>Education</h2>
<h3>Humanities Institute of TV &amp; Radio Broadcasting named after M. A. Litovchin</h3>
<p>I studied Sound Engineering and Sound Design and even worked for some time at the Russian Ostankino TV center and the Voice of Russia radio station</p>
`,t=document.querySelector(`body`);t&&(t.innerHTML=e);