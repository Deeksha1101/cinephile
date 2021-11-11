const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          50: "#defff5",
          100: "#b4fae3",
          200: "#88f5d1",
          300: "#5bf1bf",
          400: "#31edad",
          500: "#1bd393",
          600: "#0ea473",
          700: "#037552",
          800: "#004730",
          900: "#00190e",
        },
        premier: {
          50: "#edf4fd",
          100: "#ced7e5",
          200: "#afbbcf",
          300: "#909fbb",
          400: "#7081a7",
          500: "#57668e",
          600: "#444d6f",
          700: "#303650",
          800: "#2b3147",
          900: "#080d17",
        },
        voilet: {
          50: "#ffe5f1",
          100: "#fabad4",
          200: "#f28eba",
          300: "#eb61a2",
          400: "#e4358d",
          500: "#ca1b67",
          600: "#9e1348",
          700: "#720b2c",
          800: "#460415",
          900: "#1d0006",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
