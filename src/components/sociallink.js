import * as React from "react"

const SocialLink = ({ d, to, label, handle }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <a
        href={to}
        className="relative  py-4 bg-background rounded-lg flex justify-center "
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
        </span>
      </a>
    </div>
  )
}

export default SocialLink
