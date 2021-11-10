module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        masterplan: "url(../img/masterplan.jpg)",
      },
      colors: {
        primary: {
          light: "#7edae7",
          DEFAULT: "#49a8b5",
          dark: "#007985",
        },
        secondary: {
          light: "#ffd9ac",
          DEFAULT: "#e9c866",
          dark: "#a1775b",
        },
        txt: {
          light: "#9e9e9e",
          DEFAULT: "#666666",
          dark: "#212121",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
