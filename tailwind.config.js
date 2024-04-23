/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        baumans: ["Baumans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        macondo: ["Macondo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
