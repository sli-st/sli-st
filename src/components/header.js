import * as React from "react"
import { Link } from "gatsby"

const Header = ({ to, label }) => {
  return (
    <header class="top-0 z-50">
      <nav className="flex justify-between border-b border-primary bg-background px-5 pt-4 pb-3 align-middle md:px-20 ">
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
    </header>
  )
}

export default Header
