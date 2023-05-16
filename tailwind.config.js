/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Banner' : 'url("/images/24.jpg")',
        'MenuBg': "url('/images/15.jpg')",
        'ProductsBG1': "url('/images/1.png')",
        "addCoffeeBg": "url('/images/11.png')"
      }
    },
  },
  plugins: [require('daisyui')],
}

