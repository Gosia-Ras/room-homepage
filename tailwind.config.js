/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryGray: "hsl(var(--color-dark-gray) / <alpha-value>)",
      secondaryGray: "hsl(var(--color-dark-gray-alt) / <alpha-value>)",
      black: "hsl(var(--color-black) / <alpha-value>)",
      white: "hsl(var(--color-white) / <alpha-value>)",
    },
  },
  plugins: [],
};
