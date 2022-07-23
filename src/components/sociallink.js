import * as React from "react"

const SocialLink = ({ d, to, label, handle }) => {
  return (
    <a href={to}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        fill="currentColor"
        // className="text-secondary fill-secondary stroke-2"
        viewBox="0 0 24 24"
      >
        <path d={d} />
      </svg>
    </a>
  )
}

export default SocialLink
