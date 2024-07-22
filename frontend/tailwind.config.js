/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.1s ease-in-out forwards',
        'slide-small': 'slideSmall 0.5s ease-in-out forwards',
        'slide-large': 'slideLarge 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideSmall: {
          '0%': { transform: 'translateX(-5%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideLarge: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
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