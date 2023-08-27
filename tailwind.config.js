/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'main-red-dark': '#952735',
        'secondary-red-dark': '#be3144',
        'main-red-light': '#d25062',
        'secondary-red-light': '#dc7986',
        'main-gray-light': '#e6e6e6',
        'main-gray-dark': '#212121',
        'primary-text': '#3b0f15',
        'secondary-text': '#4a131a',
      },
    },
  },
  plugins: [require('daisyui')],
};
