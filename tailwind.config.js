/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', // Enable dark mode using the 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        colorChange: 'colorChange 5s infinite',
      },
      keyframes: {
        colorChange: {
          '0%': { color: '#FF0000' }, // Red
          '25%': { color: '#00FF00' }, // Green
          '50%': { color: '#0000FF' }, // Blue
          '75%': { color: '#FFFF00' }, // Yellow
          '100%': { color: '#FF00FF' }, // Magenta
        },
      },
      lineHeight: {
        'none': '2', // Custom line-height for .leading-none
      },
      filter: {
        'custom-brightness-90': 'brightness(90%)',
        'custom-contrast-110': 'contrast(110%)',
      },
      screens: {
        'iphone12pro': '390px',
        'iphone14pro': '430px',
        'mobile320': '320px', // Renamed from '320px'
        'custom': '921px',
        'scale-150': { raw: '(width: 1500px)' }, // Adjust width for 150%
        'scale-175': { raw: '(width: 1750px)' }, // Adjust width for 175%
        'scale-200': { raw: '(width: 2000px)' }, // Adjust width for 200%
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'), // Adds aspect-ratio utilities
  ],
};
