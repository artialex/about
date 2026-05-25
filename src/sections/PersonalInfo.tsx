import { CircleUserRound, Download, Languages, MapPinHouse, Waypoints } from 'lucide-react';

const resources = [
  {
    resource: 'Mail',
    link: 'mailto:work.catsonis@gmail.com',
  },
  {
    resource: 'Telegram',
    link: '//t.me/arti_alex',
  },
  {
    resource: 'LinkedIn',
    link: '//www.linkedin.com/in/artialex/',
  },
  {
    resource: 'GitHub',
    link: '//github.com/artialex',
  },
];

const bullets = [
  {
    icon: CircleUserRound,
    text: (
      <span>
        <strong>Alexey Selivanov</strong>, Senior Software Engineer / Technical Lead
      </span>
    ),
  },
  {
    icon: MapPinHouse,
    text: <span>Armenia, Yerevan / Remote</span>,
  },
  {
    icon: Languages,
    text: 'Russian (Native), English (B2)',
  },
  {
    icon: Waypoints,
    text: (
      <>
        <ul className="inline-list print:hidden!">
          {resources.map(({ resource, link }) => (
            <li key={resource}>
              <a className="link " href={link}>
                {resource}
              </a>
            </li>
          ))}
        </ul>
        <span className="hidden print:block">work.catsonis@gmail.com / TG: arti_alex / LinkedIn: artialex</span>
      </>
    ),
  },
  {
    className: 'text-rose-500 print:hidden',
    icon: Download,
    text: <a href="Alexey_Selivanov.pdf">Download printed version</a>,
  },
];

export function PersonalInfo() {
  return (
    <div className="flex flex-col items-center gap-6 text-base print:text-sm md:flex-row">
      <img
        src="me.png"
        className="rounded-4xl inline-block border-4  border-gray-200 print:hidden"
        width={200}
        height={200}
      />
      <ul className="mr-auto flex flex-col space-y-2">
        {bullets.map(({ text, icon: Icon, className }) => (
          <li className={`${className} inline-flex items-center gap-3`}>
            <Icon className="w-8 print:w-4" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}
