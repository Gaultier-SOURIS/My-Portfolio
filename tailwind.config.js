/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        handScript: ['Comic Neue'],
      },
      colors: {
        darkBlue: '#0D1B2A',
        neonBlue: '#00FFFF',
      },
    },
  },
  plugins: [],
};
