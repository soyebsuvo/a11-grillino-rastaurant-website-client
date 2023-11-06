/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "edu-beginner" : "'Edu TAS Beginner', cursive",
        "open-sans" : "'Open Sans', sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

