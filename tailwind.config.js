/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      playfair: ["Playfair Display", "serif"],
      satoshi: ["Satoshi", "sans-serif"],
    },
    extend: {
      keyframes: {
        underline: {
          "0%": { left: "auto", right: "0", width: "50%" },
          "49%": { left: "auto", right: "0", width: "0" },
          "50%": { left: "0", right: "auto", width: "0" },
          "100%": { left: "0", right: "auto", width: "100%" },
        },
      },
      animation: {
        underline: "underline 1.2s ease-in-out",
      },
    },
  },
  plugins: [],
};
