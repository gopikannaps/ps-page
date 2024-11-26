/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display:['Poppins']
      },
      width: {
        'custom-logo': '164px',
      },
      height: {
        'custom-logo': '43px',
      },
      spacing: {
        'custom-left': '0.125rem', // 2px
      },
 
    },
  },
  plugins: [],
}

