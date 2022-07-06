import * as React from "react"
import { Link } from "gatsby"

const TicketLink = ({ d, to, label, handle }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt text-xs "></div>
      <a
        href={to}
        className="relative px-5 px-md-7 py-4 bg-background rounded-lg leading-none flex items-center divide-x divide-gray-600 w-full mx-0"
      >
        <span className="flex items-center space-x-3 md:space-x-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            // className="text-secondary fill-secondary stroke-2"
            viewBox="0 0 24 24"
          >
            <path d={d} />
          </svg>

          <span className="pr-3 md:pr-5 text-secondary">{label}</span>
        </span>
        <span className="pl-3 md:pl-5 text-primary group-hover:text-secondary transition duration-200">
          {handle}
        </span>
      </a>
    </div>
  )
}

export default TicketLink
