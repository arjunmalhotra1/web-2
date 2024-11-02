/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], // content is where are we going to write Tailwind classes. Go to all these places and convert the tailwind code to css code
  theme: {
    extend: {},
  },
  plugins: [],
}

