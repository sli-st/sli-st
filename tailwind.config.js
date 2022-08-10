module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: "#999999",
        primary: "var(--primary)",
        primary: "var(--primary)",
        "text-main": "var(--text-main)",
        background: "var(--background)",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
}
