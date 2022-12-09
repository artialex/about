import {
  User,
  MapPin,
  Terminal,
  Download,
  Linkedin,
  GitHub,
  Dribbble,
  Globe,
  Mail,
  Send,
} from 'react-feather';
import { jobs, TechnologyLevel } from './modules/jobs';
import { useRandomColor } from './modules/random-color/useRandomColor';

const App = () => {
  useRandomColor();

  return (
    <div className="my-8 mx-4 sm:mx-8 md:container">
      <h1 className="mb-2 flex gap-2">
        <User className="random-color w-5 print:hidden" />
        <span className="inline print:hidden">Arti Alex</span>
        <span className="hidden print:inline print:text-2xl">
          Alexey Selivanov
        </span>
      </h1>

      <h2 className="mb-2 flex gap-2 print:mb-0">
        <Terminal className="random-color w-5 print:hidden" />
        Senior Front-end developer
      </h2>

      <ul className="mb-2 flex flex-col gap-4 print:mb-0 sm:flex-row">
        <li className="flex gap-2 ">
          <MapPin className="random-color w-5 print:hidden" /> Yerevan, Armenia
        </li>
        <li className="hidden print:inline">•</li>
        <li className="flex items-center gap-2">
          <span className="hidden print:inline">
            Languages: Russian (Native), English (B1-B2)
          </span>
          <Globe className="random-color w-5 print:hidden" />
          <span className="print:hidden">Russian, English (B)</span>
        </li>
      </ul>

      <ul className="mb-2 flex flex-col gap-4 sm:flex-row">
        <li>
          <a className="flex gap-2 " href="mailto:work.catsonis@gmail.com">
            <Mail className="random-color w-5 print:hidden" />
            work.catsonis@gmail.com
          </a>
        </li>
        <li className="hidden print:inline">•</li>
        <li className="flex gap-2 ">
          <Send className="random-color w-5 print:hidden" />
          <span className="hidden print:inline">Telegram: </span>
          arti_alex
        </li>
        <li className="hidden print:inline">•</li>
        <li>
          <a
            className="flex gap-2 print:hidden"
            href="//www.linkedin.com/in/artialex/"
          >
            <Linkedin className="random-color w-5  " /> artialex
          </a>
          <span className="hidden print:inline">linkedin.com/in/artialex</span>
        </li>
        <li className="print:hidden">
          <a className="flex gap-2 " href="//github.com/artialex">
            <GitHub className="random-color w-5 print:hidden" /> artialex
          </a>
        </li>
        <li className="print:hidden">
          <a className="flex gap-2 " href="//dribbble.com/artialex">
            <Dribbble className="random-color w-5 print:hidden" /> artialex
          </a>
        </li>
      </ul>

      <p className="print:hidden">
        <a className="flex gap-2 " href="Alexey_Selivanov.pdf">
          <Download className="random-color w-5 print:hidden" />
          <span className="border-b border-[var(--random-color)]">
            Download PDF
          </span>
        </a>
      </p>

      <ul className="mb-8 pt-8 print:!pl-0 sm:list-disc sm:pl-7">
        <li>
          I write JavaScript code professionally <em>since 2014.</em>
        </li>
        <li>
          I am a <em>T-shaped developer.</em> I like to build bridges between
          frontend devs and backend devs, designers, QA specialists & other team
          members
        </li>
        <li>
          I am a <em>Product-driven person.</em> I like to analyze things and
          see how various metrics affect the product
        </li>
        <li>
          I use <em>modern toolset</em> to ensure the highest DX possible.
        </li>
      </ul>

      <ul className="space-y-10 pt-6 print:!pl-0 sm:pl-7">
        {jobs.map((_) => (
          <li key={_.title}>
            <h3 className="text-xl">
              <a href={_.link} target="_blank" rel="noreferer noopener">
                {_.title}
              </a>
              <small className="text-sm text-gray-400"> {_.years}</small>
            </h3>
            <p className="text-sm text-gray-400">{_.subtitle}</p>
            <p className="mt-1">{_.description}</p>
            <ul className="my-2 text-sm sm:list-disc">
              {_.duties?.map((_) => (
                <li>{_}</li>
              ))}
            </ul>

            {_.technologies?.length && (
              <div className="flex items-baseline gap-2">
                <p className="flex-none text-sm text-gray-400">
                  Technologies used:
                </p>
                <p>
                  {_.technologies?.map((_, ind) => (
                    <span
                      className={
                        _.level === TechnologyLevel.Strong
                          ? 'text-white'
                          : _.level === TechnologyLevel.Medium
                          ? 'text-sm text-gray-400'
                          : 'text-xs text-gray-600'
                      }
                    >
                      {ind !== 0 ? ', ' : ''}
                      {_.title}
                    </span>
                  ))}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
