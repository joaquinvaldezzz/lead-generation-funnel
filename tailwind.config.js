/* eslint-disable global-require */
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.astro'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      backgroundImage: {
        pattern: "url('/images/pattern.jpg')",
      },
      colors: {
        'green-vogue': {
          50: '#e5f9ff',
          100: '#d0f3ff',
          200: '#aae8ff',
          300: '#77d4ff',
          400: '#42afff',
          500: '#1887ff',
          600: '#006fff',
          700: '#0072ff',
          800: '#0064e0',
          900: '#012250', // Original color
        },
        'green-yellow': {
          50: '#f9ffe5',
          100: '#efffc7',
          200: '#dfff96',
          300: '#c0fd45', // Original color
          400: '#adf427',
          500: '#8eda08',
          600: '#6daf01',
          700: '#528506',
          800: '#43680c',
          900: '#39580f',
        },
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      minWidth: {
        xs: '320px',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
    backdropOpacity: false,
    backgroundOpacity: false,
    borderOpacity: false,
    divideOpacity: false,
    placeholderOpacity: false,
    ringOpacity: false,
    textOpacity: false,
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}
