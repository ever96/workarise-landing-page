/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ['Barlow', 'sans-serif']
      },
      colors: {
        "primary-black": "#1d1c1d",
        "primary-green": "#1ccc7f" 
      }
    },
  },
  plugins: [],
}