import { jobs, TechnologyLevel } from '../jobs/jobs';



export const CV = () => (
  <>
    <section className="mb-12 hidden print:block text-sm">
      <p>What I can:</p>
      <ul className="ml-8 list-disc">
        <li></li>
        <li>
          Write tests: both unit-tests using Jest, and integration tests using
          Cypress (I worked with Selenium as well)
        </li>
        <li>Set up Docker images and CI for front-end</li>
        <li>Mentor other front-end specialists</li>
        <li>
          Speak the same language with the specialists from adjacent areas:
          Designers, QA, Back-End specialists.
        </li>
      </ul>
      <p>What I look for:</p>
      <ul className="ml-8 list-disc">
        <li>Remote work</li>
        <li>
          Opportunities for learning & working with back-end technologies
          regardless of the language (except maybe PHP)
        </li>
        <li>
          A well established development process. Agile mindset, Scrum,
          Retrospectives, Pair-, Mob-programming, all that stuff
        </li>
        <li>
          Regarding the product area, I'm open to wide variety of them, though
          more likely I'll be interested in 2D/3D graphics, WebRTC, complex UI,
          complex logic
        </li>
      </ul>
    </section>
    <section className="mb-32">
      <ul className="flex flex-col gap-6">
        {jobs.map((_) => (
          <li key={_.title} className="sm:flex gap-4">
            <div className="print:hidden flex-none">
              <img
                className=" opacity-80 hidden sm:block w-12 h-12"
                src={`images/${_.logo}`}
                alt={_.title}
              />
            </div>
            <article>
              <h3 className="flex gap-2 items-baseline">
                <a
                  className="text-2xl"
                  href={_.link}
                  target="_blank"
                  rel="noreferer noopener"
                >
                  {_.title}
                </a>
                <span className="text-xs text-zinc-500">{_.years}</span>
              </h3>



            </article>
          </li>
        ))}
        <li className="self-center">. . .</li>
      </ul>
    </section>
  </>
);
