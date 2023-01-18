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
    fontSize: {
      'xs': '12px',
      sm: '14px',
      'base': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
    },
    extend: {},
    fontFamily: {
      'GTlight': ['GT-Super-Light'],
      'GT-m': ['GT-Super-Medium'],
      'PT-m': ['Platform-Medium'],
      'PT-r': ['Platform-Regular'],
      'adelia': ['Adelia']
    },
  },
  plugins: [],
}
