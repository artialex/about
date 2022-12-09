export const Intro = () => (
  <section>
    <ul className="flex flex-col gap-4">
      <li>
        I write Frontend since 2014, using modern tech: React, Redux, Next,
        Tailwind and other fancy libs...
      </li>

      <li>
        I consider myself a <em>T-shaped developer...</em>
        <p className="m-4 md:ml-8 ">
          ...which means that I'm not limited to JavaScript/Frontend knowledge.
          At different times of my career I set up E2E-tests, helped designers
          and developers to work together and speak the same language &
          communicated closely with backend devs answering the question "how we
          manage our data layer?" through REST & GraphQL. I like the companies
          where I could do backend tasks as well.
        </p>
      </li>

      <li>
        I also believe that I am a <em>product-driven person...</em>
        <p className="m-4 md:ml-8 ">
          ...which means that I prefer when before writing code we somehow agree
          upon which analytics we should gather (product/marketing metrics) and
          we have the tools to see how our application behaves in general
          (technical metrics). Otherwise it's just a blind guess and I sometimes
          found myself in the teams that produce features without any analytical
          feedback. If there are separate analytics in the company I believe
          that the communication between them and developers is really
          important.
        </p>
      </li>
    </ul>
  </section>
);
