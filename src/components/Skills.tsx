import { TechnologyLevel } from './types';

const skills = [
  {
    skill: 'TypeScript',
    level: TechnologyLevel.Strong,
  },
  {
    skill: 'React',
    level: TechnologyLevel.Strong,
  },
  {
    skill: 'CSS',
    level: TechnologyLevel.Strong,
  },
  {
    skill: 'Vue',
    level: TechnologyLevel.Familiar,
  },
  {
    skill: 'Angular',
    level: TechnologyLevel.Familiar,
  },
];

export function Skills() {
  return (
    <div>
      <h2 className="uppercase">Skills</h2>
      <p>
        TypeScript/JavaScript, React, Tailwind, Next.js, Redux, MobX, Effector,
        Playwright, CSS/SCSS, HTML
      </p>
      <p>Node.js, Vue, Angular, Figma</p>
      <p>Python, Java</p>
    </div>
  );
}
