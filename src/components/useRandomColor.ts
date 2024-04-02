import { useLayoutEffect } from 'react';

const colors = [
  'tomato',
  'plum',
  'lightgreen',
  'lightblue',
  'lightcoral',
  'lightsalmon',
  'hotpink',
  'palevioletred',
  'orange',
  'yellowgreen',
  'mediumaquamarine',
  'turquoise',
  'lightskyblue',
  'sandybrown',
];

const KEY = 'AA_current-color';

const sample = <T>(array: T[]): T =>
  array[Math.floor(Math.random() * array.length)];

export function useRandomColor() {
  useLayoutEffect(() => {
    const savedColor = localStorage.getItem(KEY);

    const randomColor = sample(colors.filter((_) => _ !== savedColor));

    document.documentElement.style.setProperty('--random-color', randomColor);

    localStorage.setItem(KEY, randomColor);
  }, []);
}
