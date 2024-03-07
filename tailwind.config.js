/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Quicksand, sans-serif",
    },
    extend: {
      animation: {
        "spin-slow": "spin 80s linear infinite",
      },
    },
  },
  plugins: [],
};
