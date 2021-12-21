import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ to, label }) => {
  return (
    <footer>
      <nav className="d-flex justify-content-between align-items-center pt-5 pb-4">
        <Link to={to} className="text-decoration-none">
          <div className="text-light border border-light px-2">{label}</div>
        </Link>
        <Link to="/" className=" text-decoration-none">
          <div className="border border-primary text-primary px-2">SLi.ST</div>
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
