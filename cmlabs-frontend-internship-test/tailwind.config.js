/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        backgroundMain: '#F1F5F2',
        backgroundYellow: '#F3FE39',
        primaryText: '#0F1A20',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  plugins: [],
};
