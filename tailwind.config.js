/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      "pale-blue": "hsl(225, 100%, 94%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      ...colors
    },
    extend: {
      fontFamily: {
        "Red-Hat-Display": ['Red Hat Display', 'sans-serif']
      },
      fontWeight: {
        "normal": 500,
        "bold" : 700,
        "extra-bold": 900
      }
    },
  },
  plugins: [],
}

