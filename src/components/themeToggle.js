import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

export default function ThemeToggle() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null
        return (
          <div class="flex items-center justify-center">
            <label for="toggleB" className="flex items-center cursor-pointer">
              <div className="relative">
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "light" : "dark")
                  }
                  checked={theme === "light"}
                />

                <div className="block bg-secondary w-14 h-6 rounded-full"></div>

                <div className="dot absolute left-1 top-1 bg-primary w-6 h-4 rounded-full transition "></div>
              </div>
            </label>
          </div>
        )
      }}
    </ThemeToggler>
  )
}
