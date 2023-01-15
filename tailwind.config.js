/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'GT-light': ['GT-Super-Light'],
      'GT-m': ['GT-Super-Medium'],
      'PT-m': ['Platform-Medium'],
      'adelia': ['Adelia']
    }
  },
  plugins: [],
}
