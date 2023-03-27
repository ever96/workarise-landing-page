/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ['Barlow', 'sans-serif']
      },
    },
  },
  plugins: [],
}