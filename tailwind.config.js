/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A3E3F',
        primarydark: '#182F31',
        secondary: '#DB5C13',
      },
    },
  },
  plugins: [],
};
