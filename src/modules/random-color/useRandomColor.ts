import { useLayoutEffect } from 'react';

const colors = [
  'tomato',
  'plum',
  'lightgreen',
  'lightblue',
  'lightcoral',
  'LightSalmon',
  'HotPink',
  'PaleVioletRed',
  'Orange',
  'Khaki',
  'LemonChiffon',
  'Lavender',
  'Lime',
  'YellowGreen',
  'MediumAquamarine',
  'Turquoise',
  'LightSkyBlue',
  'Bisque',
  'SandyBrown',
  'Azure',
  'Gainsboro',
];

const sample = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export function useRandomColor() {
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--random-color',
      sample(colors)
    );
  }, []);
}
