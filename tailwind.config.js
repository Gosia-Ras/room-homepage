/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        md: "992px",
        desktop: "1220px",
      },
    },
  },
  plugins: [require("tailwind-hamburgers")],
};
