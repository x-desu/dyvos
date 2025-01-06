/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        light:'#F4F7FE',
        white:'#FFFFFF',
        primary:'#012A45',
        secondary:'#555555',
        btn_bg:'#E0F7FF',
        btn_txt:'#016795'
      }
    },
  },
  plugins: [],
}