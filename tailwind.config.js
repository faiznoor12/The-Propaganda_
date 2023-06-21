/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'spectral': [ 'Spectral', 'serif'],
        'teko': [ 'Teko', 'sans-serif']
      },
    },
  },
  plugins: [],
}


