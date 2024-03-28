/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",

  darkMode: "class", // or 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          black: "#1A1A1A",
          white: "#F9F9F9",
        },

        mixed: {
          100: "#192019",
          200: "#2e352e",
          300: "#454b44",
          400: "#5c625c",
          500: "#757a75",
          600: "#8f938f",
        },
        // Primary colors
        primary: {
          100: "#4caf50",
          200: "#63b863",
          300: "#79c176",
          400: "#8dca89",
          500: "#a0d39c",
          600: "#b4dcb0",
        },
        // Surface colors
        surface: {
          100: "#121212",
          200: "#282828",
          300: "#3f3f3f",
          400: "#575757",
          500: "#717171",
          600: "#8b8b8b",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
