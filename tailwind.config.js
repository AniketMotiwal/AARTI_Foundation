/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', // Enable dark mode by adding the 'dark' class
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
        lineHeight: {
          'none': '2', // Set .leading-none to have a line height of 2
        },
        filter: {
          'custom-brightness-90': 'brightness(90%)',
          'custom-contrast-110': 'contrast(110%)',
          // Add more custom filters if needed
        }
        
      },
      screens: {
        'iphone12pro': '390px',
        'iphone14pro': '430px',
        '320px': '320px',
      },
   
    },
  },
  plugins: [ require('@tailwindcss/aspect-ratio'),],
}
