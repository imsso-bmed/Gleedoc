/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#309781",
        secondary: "#2d6a5e",
        accent: "#f9c74f",
        bg: "#f7f7fa",
      },
      fontFamily: {
        sans: ['Segoe UI', 'Noto Sans KR', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
