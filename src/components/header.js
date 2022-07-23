import * as React from "react"
import { Link } from "gatsby"

const Header = ({ to, label }) => {
  return (
    <header class="sticky top-0 z-50">
      <nav className="px-5 md:px-20 flex justify-between border-b border-primary bg-background pt-4 pb-3 align-middle ">
        <Link
          to="/"
          className="col-span-1 justify-self-middle place-self-center"
        >
          <div className="text-primary text-lg">sli.st</div>
        </Link>
        <Link
          to={to}
          className="col-span-1 justify-self-start place-self-center"
        >
          <div className="text-primary ">{label}</div>
        </Link>
      </nav>
    </header>
  )
}

export default Header
