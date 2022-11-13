const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.slate,
        gray: colors.neutral,
      },
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.primary.200'),
        },
      },
    }),
  },
  plugins: [require('@tailwindcss/typography')],
};
