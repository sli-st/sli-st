module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#999999",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      "text-main": "var(--text-main)",
      background: "var(--background)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontFamily: {
      sans: "Verdana",
      serif: "Georgia",
    },
  },
  plugins: [require("@tailwindcss/typography")],
  typography: {
    default: {
      css: {
        maxWidth: "45ch",
      },
    },
  },
}
