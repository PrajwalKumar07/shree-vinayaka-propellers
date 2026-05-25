/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1F3A",
        secondary: "#123C73",
        accent: "#FFD54F"
      }
    }
  },
  plugins: []
};