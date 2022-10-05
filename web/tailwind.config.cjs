/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('/bg-login.jpg')",
      },
      backgroundColor: {
        glass: 'rgba(42, 42, 41, 0.84)',
        'glass-hover': 'rgba(254, 237, 201, 0.84)',
      },
      colors: {
        'primary-100': '#FEEDC9',
        'primary-900': '#FFBC3F',
        'secondary-700': '#FF4249',
        'secondary-900': '#A82C4A',
        'primay-text-hover': '#2A2A29',
      },
    },
  },
  plugins: [],
}
