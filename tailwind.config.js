/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-500': '#2CCE4C',
        'primary-700': '#1C9D36',
        'orange-500': '#ECA02D',
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

