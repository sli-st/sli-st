module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#999999",
      primary: "var(--primary)",
      "text-main": "var(--text-main)",
      background: "var(--background)",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
