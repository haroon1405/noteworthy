/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playwrite-hu': ['"Playwrite HU"', 'sans-serif'],
        'playwrite-pe': ['"Playwrite PE"', 'sans-serif'],
        'maname': ['Maname', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'cairo': ['Cairo', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}