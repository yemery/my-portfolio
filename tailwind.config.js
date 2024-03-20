/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       background:{
        black: "#1A1A1A",
        white: "#F9F9F9",}

      },
    },
  },
  plugins: [],
};
