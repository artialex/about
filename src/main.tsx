import './global.css';
import '@fontsource-variable/inter/wght.css';
import '@fontsource-variable/readex-pro';

import htmlString from './cv.md';

const el = document.querySelector('body');

if (el) {
  el.innerHTML = htmlString;
}
