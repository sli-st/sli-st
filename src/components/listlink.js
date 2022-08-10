import { Link } from "gatsby"
import * as React from "react"

const ListLink = ({ d, to, href, label, handle }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-primary opacity-60 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <Link
        to={to}
        href={href}
        className="pl-md-7 relative mx-0 flex w-full items-center divide-x divide-primary rounded-lg bg-background py-4 pl-5 leading-none"
      >
        <span className="flex items-center space-x-3 md:space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            // className="text-primary fill-primary stroke-2"
            viewBox="0 0 24 24"
          >
            <path d={d} />
          </svg>

          <span className="pr-3 text-primary md:pr-5">{label}</span>
        </span>
        <span className="pl-3 text-primary transition duration-200 group-hover:text-primary md:pl-5">
          {handle}
        </span>
      </Link>
    </div>
  )
}

export default ListLink
