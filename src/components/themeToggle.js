import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { StaticImage } from "gatsby-plugin-image"

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null
        return (
          <label className="aspect-square">
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
              checked={theme === "dark"}
              class="appearance-none checked:bg-blue-500"
            />
            <span className="align-middle">
              {theme === "dark" ? (
                <StaticImage
                  src="../images/index/moon.jpg"
                  alt="A kitten"
                  className="aspect-square"
                />
              ) : (
                <StaticImage
                  src="../images/index/sun.jpg"
                  alt="A kitten"
                  className="aspect-square"
                />
              )}
            </span>
          </label>
        )
      }}
    </ThemeToggler>
  )
}
