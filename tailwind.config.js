/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./avances.html"],
  theme: {
    extend: {
      colors: {
        black: "#1c1c19",
        white: "#fafaf9",
      },
      fontFamily: {
        title: ["RampartOne", "Roboto", "system-ui"],
        montserrat: ["Montserrat", "system-ui"],
        "public-sans": ["PublicSans", "system-ui"],
      },
      fontSize: {
        "h1-desktop": ["7rem", { lineHeight: "7rem" }],
        "h2-desktop": ["3.5rem", { lineHeight: "3.5rem", fontWeight: "600" }],
        "p-desktop": ["1.5rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "p-sm-desktop": ["1rem", { lineHeight: "1rem", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
