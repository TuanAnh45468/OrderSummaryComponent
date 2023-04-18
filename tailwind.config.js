/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "pale-blue": "hsl(225, 100%, 70%)",
      "bright-blue": "hsl(245, 75%, 52%)",
      "very-pale-blue": "hsl(225, 100%, 98%)",
      "desaturated-blue": "hsl(224, 23%, 55%)",
      "dark-blue": "hsl(223, 47%, 23%)",
      ...colors,
    },
    extend: {
      fontFamily: {
        "Red-Hat-Display": ["Red Hat Display", "sans-serif"],
      },
      fontWeight: {
        normal: 500,
        bold: 700,
        "extra-bold": 900,
      },
      backgroundImage: {
        "desktop-background": "url('images/pattern-background-desktop.svg')",
        "mobile-background": "url('images/pattern-background-mobile.svg')",
      },
      backgroundSize: {
        "50%": "50%",
      },
    },
  },
  plugins: [],
};
