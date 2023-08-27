/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      lineHeight: {
        1.5: "1.5",
      },
      fontWeight: {
        400: 400,
      },
      // ... puedes añadir más extensiones aquí si lo necesitas ...
    },
  },
  plugins: [],
}
