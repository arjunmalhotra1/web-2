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
          600:"#e0e7fe",
          500:"#3e3837",
          800:"#5046e4"
        }
      }
    },
  },
  plugins: [],
}

