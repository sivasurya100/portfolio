/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hero: ["Pacifico", "cursive"],
      },
      colors: {
        primary: "rgb(85 81 227)",
        secondary: "#2b2d77",
      },
    },
  },
  plugins: [],
}
