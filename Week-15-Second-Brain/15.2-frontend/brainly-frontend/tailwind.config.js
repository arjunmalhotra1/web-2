/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Any file in the src folder can have tailwind.
  ],
  theme: {
    extend: {
      colors:{
        purple:{
          300:"#e0e7fe",
          500:"#3e3837",
          600:"#5046e4"
        }
      }
    },
  },
  plugins: [],
}

