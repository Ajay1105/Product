/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx}",],
  theme: {
    extend: {
      fontFamily:{
        satoshi: ["Satoshi","sans-serif"],
        inter: ["Inter","sans-serif"]
      }
    },
  },
  plugins: [],
};

