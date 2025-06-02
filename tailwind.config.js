/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["'Nunito'", "sans-serif"],
      },
      container: {
        center: true,
        padding: "6rem", // <-- Adds 2rem padding on all sides
      },
    },
  },
  plugins: [], // ✅ empty unless you're importing plugins
};
