/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Barlow': ['Barlow Condensed', 'sans-serif'],
      'Bellefair':['Bellefair', 'serif'],
    },
    extend: {
      colors:{
        primary: '#0B0D17',
        secundary: '#D0D6F9',
        terciary: '#FFFFFF',
      }
    },
  },
  plugins: [],
}

