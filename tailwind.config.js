/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bree: ['Bree\\ Serif']
      },
      backgroundImage:{
        oval:"url('/src/assets/shapes.png')",
        desig:"url('/src/assets/desg.jpg')",
        deve:"url('/src/assets/dev.jpg')",
        registerBack:"url('/src/assets/registerBack.jpg')",
        circle:"url('/src/assets/circle.png')",
      },
      colors:{
        darkPurple:"#19012D",
        midPurple:"#6B05BB",
        darkBlack:"#e4c1f9",
        customViolet:"#FFCAE5",
        customPink:"#f72585",
        customDarkPink:"#d90368",
        btnC1:"#fd0363",
        btnC2:"#cc095d",
        btnC3:"#9c1057",
        btnC4:"#6b1650",
        btnC5:"#950952",
        blurColor:"#F9F4F4",
      },
    },
  },
  plugins: [],
}