const { fontFamily, spacing } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/{app,pages,components}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', ...fontFamily.sans],
      },
      maxWidth: {
        ...spacing,
      },
      textColor: {
        secondary: 'rgb(255 255 255 / 0.7)',
        placeholder: 'rgb(255 255 255 / 0.5)',
      },
      backgroundColor: {
        'form-control': 'rgb(0 0 0 / 0.2)',
        'form-control-focused': 'rgb(0 0 0 / 0.3)',
      },
      outlineColor: {
        'form-control-invalid': 'rgb(0 0 0 / 0.5)',
      },
      backgroundImage: {
        'select-chevron': `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
      },
      aria: {
        invalid: 'invalid="true"',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
