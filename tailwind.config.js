// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // درست کردن حالت دارک به‌صورت کلاس
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Matches all your component files
  ],
  theme: {
    extend: {
      animation: {
        "star-movement-bottom":
          "star-movement-bottom 6s linear infinite alternate",
        "star-movement-top": "star-movement-top 6s linear infinite alternate",
      },
      keyframes: {
        "star-movement-bottom": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%": { transform: "translate(0%, 0%)", opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
