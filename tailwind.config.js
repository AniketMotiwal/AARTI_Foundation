/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class', // Enable dark mode using the 'dark' class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // AARTI brand — taken from the logo (navy #011683, gold #F0AF00, cyan #12CDF4)
      colors: {
        brand: {
          50: '#EEF1FC',
          100: '#DCE2F8',
          200: '#B7C3F0',
          300: '#8798E2',
          400: '#5468CF',
          500: '#2C41B8',
          600: '#1A2C9E',
          700: '#011683',
          800: '#021270',
          900: '#040E52',
          950: '#030834',
        },
        gold: {
          50: '#FFF8E6',
          100: '#FFEDBF',
          200: '#FFDD80',
          300: '#FFCF4D',
          400: '#FAC12E',
          500: '#F0AF00',
          600: '#C98F00',
          700: '#8A6100',
          800: '#704F00',
        },
        sky: {
          brand: '#12CDF4',
        },
        // Always-white tile for logos and product shots (stays white in dark mode)
        paper: '#ffffff',
        // Semantic surfaces — values switch with the .dark class (see index.css)
        page: 'rgb(var(--c-page) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--c-ink-soft) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        accent: 'rgb(var(--c-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
      },
      maxWidth: {
        site: '80rem',
      },
      boxShadow: {
        card: '0 1px 2px rgb(3 8 52 / 0.04), 0 8px 24px -12px rgb(3 8 52 / 0.12)',
        lift: '0 2px 4px rgb(3 8 52 / 0.06), 0 24px 48px -20px rgb(3 8 52 / 0.25)',
      },
      animation: {
        'logo-scroll': 'logo-scroll 45s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out both',
        'loading-bar': 'loading-bar 1.1s ease-in-out infinite',
        'hero-zoom': 'hero-zoom 9s ease-out both',
        float: 'float 7s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite alternate',
        draw: 'draw 1.1s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
      },
      keyframes: {
        'logo-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'loading-bar': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(300%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          from: { transform: 'translate3d(0, 0, 0) scale(1)' },
          to: { transform: 'translate3d(-6%, 8%, 0) scale(1.15)' },
        },
        draw: {
          from: { strokeDashoffset: '1' },
          to: { strokeDashoffset: '0' },
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        'hero-zoom': {
          from: { transform: 'scale(1.08)' },
          to: { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
