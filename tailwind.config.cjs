/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      // default breakpoints but with 40px removed
      screens: {
        DEFAULT: '600px',
      },
    },
    extend: {},
    fontFamily: {
      sans: 'Rubik',
    },
  },
  plugins: [],
};
