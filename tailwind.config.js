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
        broccoli: '#2CCE4C',
        strawberry: '#CE2C2C',
        condiments: '#E3951E',
        meat: '#B56125',
        bottle: '#f28124',
        milk: '#adadad',
        candy: '#ae40f7',
        bread: '#ffcb18',
        hat_robe: '#18a4ff',
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

