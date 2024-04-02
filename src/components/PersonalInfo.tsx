import {
  User,
  MapPin,
  Terminal,
  Download,
  Linkedin,
  GitHub,
  Mail,
  Send,
  Globe,
} from 'react-feather';

export function PersonalInfo() {
  return (
    <div className="flex flex-col gap-2">
      {/* Name */}
      <h1 className="flex gap-2 print:text-lg print:font-bold">
        <User className="random-color w-5 print:hidden" />
        Alexey Selivanov
      </h1>

      {/* Occupation */}
      <h2 className="flex gap-2">
        <Terminal className="random-color w-5 print:hidden" />
        Senior Front-end developer
      </h2>

      {/* Location & Languages */}
      <ul className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <li className="flex gap-2">
          <MapPin className="random-color w-5 print:hidden" /> Yerevan, Armenia
        </li>
        {/* <li className="hidden print:inline">•</li> */}
        <li className="flex items-center gap-2">
          <span className="hidden print:inline">
            Languages: Russian (Native), English (B1-B2)
          </span>
          <Globe className="random-color w-5 print:hidden" />
          <span className="print:hidden">
            Russian (Native), English (B1-B2)
          </span>
        </li>
      </ul>

      {/* E-Mail & Social Networks */}
      <ul className="flex flex-col gap-2 sm:flex-row sm:gap-4">
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
      </ul>

      {/* Download CV */}
      <p className="print:hidden">
        <a className="flex gap-2" href="Alexey_Selivanov.pdf">
          <Download className="random-color w-5 print:hidden" />
          <span className="border-b border-[var(--random-color)]">
            Download PDF
          </span>
        </a>
      </p>
    </div>
  );
}
