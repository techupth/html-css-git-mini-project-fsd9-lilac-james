/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navyblue: {
          500: "#0B0757",
          400: "#1F1E61",
          300: "#1374F6",
          200: "#8480AE",
          100: "#64a7ff",
          50: "rgba(244, 247, 252, 1)",
        },
        sunyellow: "#FDD76E",
      },
    },
  },
  plugins: [],
};
