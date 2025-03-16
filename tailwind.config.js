/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        beige: {
          50: '#fdfbf7',
          100: '#fcf7ef',
          200: '#f8eadb',
          300: '#f3dcc7',
          400: '#ebc19f',
          500: '#e2a677',
          600: '#cb956b',
          700: '#a97c59',
          800: '#876347',
          900: '#6e5139',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};