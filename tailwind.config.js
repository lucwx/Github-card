/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/*.vue"],
  theme: {
    extend: {
      colors: {
        navy: "#4A55A2",
        blue: "#7895CB",
        sea: "#A0BFE0",
        cold: "#C5DFF8",
      },
      fontFamily: {
        'Prompt': ['Prompt']
      },
    },
  },
  plugins: [],
};