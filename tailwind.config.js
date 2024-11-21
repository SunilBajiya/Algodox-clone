/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
    theme: {
      extend: {
        width: {
          '12': '70',
        },
        height: {
          '12': '70',
        },
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#a855f7',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
       silver: '#ecebff',
      bermuda: '#78dcca',
    }
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],


  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(0deg, rgb(209, 100, 26) 0%, rgb(192, 40, 42) 100%)',
      },
      keyframes: {
        'zoom-out': {
          '0%': {
            transform: 'scale(0)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'zoom-out': 'zoom-out 0.5s ease-out forwards',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};




