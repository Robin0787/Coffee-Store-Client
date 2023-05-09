/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Banner' : 'url("./src/assets/images/more/24.jpg")',
        'MenuBg': "url('./src/assets/images/more/15.jpg')",
        'ProductsBG1': "url('./src/assets/images/more/1.png')",
        "addCoffeeBg": "url('./src/assets/images/more/11.png')"
      }
    },
  },
  plugins: [require('daisyui')],
}

