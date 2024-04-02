import { jobs } from './job.data';
import { TechnologyLevel, Job } from './types';

function JobEntry({ job }: { job: Job }) {
  return (
    <li
      key={job.title}
      className={job.title === 'Double Data' ? 'print:hidden' : ''}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl">
          <a href={job.link} target="_blank" rel="noreferrer">
            {job.title}
          </a>
          <small className="text-sm text-gray-500"> {job.years}</small>
        </h3>
        <p className="hidden text-sm text-gray-500 sm:block">{job.position}</p>
      </div>
      <p className="text-sm text-gray-500">{job.subtitle}</p>
      <ul className="my-2 list-disc pl-7 text-sm">
        {job.bullets?.map((bullet, ind) => (
          <li key={ind}>{bullet}</li>
        ))}
      </ul>

      {job.technologies?.length && (
        <div className="flex items-baseline gap-2">
          <p className="flex-none text-sm text-gray-400">Technologies:</p>
          <p>
            {job.technologies?.map((tech, ind) => (
              <span
                key={tech.title}
                className={
                  tech.level === TechnologyLevel.Strong
                    ? ''
                    : tech.level === TechnologyLevel.Medium
                    ? 'text-sm '
                    : 'text-xs '
                }
              >
                {ind !== 0 ? ', ' : ''}
                {tech.title}
              </span>
            ))}
          </p>
        </div>
      )}
    </li>
  );
}

export function Jobs() {
  return (
    <div>
      {/* <h2 className="uppercase">Career history</h2> */}
      <ul className="space-y-10">
        {jobs.map((job) => (
          <JobEntry job={job} key={job.title} />
        ))}
      </ul>
    </div>
  );
}
