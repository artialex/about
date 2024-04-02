import { useRandomColor } from './components/useRandomColor';
import { PersonalInfo } from './components/PersonalInfo';
import { ShortSummary } from './components/ShortSummary';
import { Jobs } from './components/Jobs';

export default function App() {
  useRandomColor();

  return (
    <div className="m-auto flex max-w-[800px] flex-col gap-10 p-4">
      <PersonalInfo />
      <ShortSummary />
      <Jobs />
    </div>
  );
}
