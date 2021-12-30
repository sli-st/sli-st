import * as React from "react"
import { Link } from "gatsby"
import ThemeToggle from "./themeToggle"

const Header = ({ to, label }) => {
  return (
    <header class="sticky top-0 z-50">
      <nav className="px-5 md:px-20  grid grid-cols-3 border-b border-primary bg-background py-3 mb-8 shadow-lg">
        <Link to={to} className="col-span-1 justify-self-start">
          <div className="text-secondary border border-secondary px-2">
            {label}
          </div>
        </Link>
        <Link to="/" className="col-span-1 justify-self-center">
          <div className="border-2 border-primary text-primary px-2 text-xl">
            SLi.ST
          </div>
        </Link>
        <div className="col-span-1 justify-self-end">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
