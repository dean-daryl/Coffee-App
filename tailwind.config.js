/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './navigation/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-100': '#D4A574',
        'red-20': '#E01A4F',
        'gray-100': '#0D0D0D',
        'gray-500': '#5E0000',
        'primary-100': '#F15946',
        'primary-300': '#0C090D',
        'primary-500': '#FF6B66',
        'secondary-400': '#F9C22E',
        'secondary-500': '#53B3CB',
      },
    },
  },
  plugins: [],
};
