import * as React from "react"
import { Link } from "gatsby"

const Footer = ({ to, label }) => {
  return (
    <footer>
      <nav className="flex justify-between border-t border-primary bg-background px-5 pb-4 pt-4 align-middle md:px-20 ">
        <Link
          to="/"
          className="justify-self-middle col-span-1 place-self-center"
        >
          <div className="text-lg text-primary">sli.st</div>
        </Link>
        <Link
          to="/blog"
          className="col-span-1 place-self-center justify-self-start"
        >
          <div className="text-primary ">Blog</div>
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
