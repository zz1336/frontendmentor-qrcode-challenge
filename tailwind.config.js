/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Outfit',...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

