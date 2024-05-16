/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{jsx,js,ts,tsx}",
  ],
}


