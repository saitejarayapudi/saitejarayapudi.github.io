/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandBlue: "#08415c",
        brandTeal: "#1ca7a7",
      },
      backgroundImage: {
        hero: 'linear-gradient(115deg, theme("colors.brandBlue") 0%, theme("colors.brandTeal") 100%)',
      },
    },
  },
  plugins: [],
  darkMode: "class", // enables the dark:* utilities
};
