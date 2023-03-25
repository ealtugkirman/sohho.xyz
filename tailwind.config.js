/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'reverse-spin': 'reverse-spin 1s linear infinite'
      },
      keyframes: {
        'reverse-spin': {
          from: {
            transform: 'rotate(360deg)'
          },
        }
      }
    },
    fontFamily: {
      'soho': ['Poiret One', 'cursive'],
    },
    colors: {
      transparent: 'transparent',
      'first': '#000000',
      'second': '#ffeb00',
    },
    
  },
  plugins: [],
}