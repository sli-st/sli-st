import { Link } from "gatsby"
import * as React from "react"

const ListLink = ({ d, to, href, label, handle, tags }) => {
  return (
    <div className="not-prose group relative my-2">
      <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-primary text-xs opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>
      <Link
        to={to}
        href={href}
        className="relative mx-0 flex content-between gap-0 rounded-lg bg-background px-5 py-4 leading-none"
      >
        {label}
      </Link>
    </div>
  )
}

ListLink.defaultProps = {
  d: null,
}
export default ListLink
