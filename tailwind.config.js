/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "src/**/*.{jsx,js}"],
  theme: {
    extend: {
      animation: {
        pulse: "pulse 2s infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
