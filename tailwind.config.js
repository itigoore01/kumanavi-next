const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/{app,pages,components}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-m-plus-rounded-1c)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
