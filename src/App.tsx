import { useRandomColor } from './components/useRandomColor';
import { PersonalInfo } from './components/PersonalInfo';
import { ShortSummary } from './components/ShortSummary';
import { Jobs } from './components/Jobs';

export default function App() {
  useRandomColor();

  return (
    <div className="m-4  flex h-full max-w-[1000px] flex-col justify-center gap-10 print:my-0 print:gap-6 lg:m-auto lg:mt-6 lg:flex lg:flex-row">
      <div className="top-6 flex flex-col gap-6 self-start print:max-w-full lg:sticky lg:w-1/2">
        <PersonalInfo />
        <ShortSummary />
      </div>
      <div className=" print:max-w-full lg:w-1/2">
        <Jobs />
      </div>
    </div>
  );
}
