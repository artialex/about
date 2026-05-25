import { Introduction } from './sections/Introduction';
import { PersonalInfo } from './sections/PersonalInfo';
import { PreviousExperience } from './sections/PreviousExperience';
import { RecentExperience } from './sections/RecentExperience';

import '@fontsource-variable/geist-mono/wght.css';

export default function App() {
  return (
    <div className="font-display m-6 mb-20 space-y-8 print:mx-0 print:font-sans md:mx-12 md:my-8 md:mb-40">
      <PersonalInfo />
      <Introduction />
      <RecentExperience />
      <PreviousExperience />
    </div>
  );
}
