import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ to, label }) => {
  return (
    <footer>
      <nav className="flex justify-between pt-10 pb-4">
        <Link to={to} className="no-underline">
          <div className="text-light border border-light px-2">{label}</div>
        </Link>
        <Link to="/" className="no-underline">
          <div className="border border-primary text-primary px-2">SLi.ST</div>
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
