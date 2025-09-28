/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "cairo": ['Cairo', 'sans-serif'],
        "bebas": ['Bebas Neue', 'cursive'],
      },
      colors: {
        "gold": "#fdd253",
        "golder": "#C49206"
      },
      width: {
        "100": "27rem"
      },
      height: {
        "100": "27rem"
      }
    },
  },
  plugins: [],
}

