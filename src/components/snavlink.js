import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SNavLink = ({ partiallyActive, className, to, children }) => {
  return (
    <AniLink
      cover
      direction="up"
      duration={1}
      bg="#000000"
      to={to}
      className={className}
    >
      {children}
    </AniLink>
  )
}

SNavLink.defaultProps = {
  partiallyActive: true,
  className:
    "text-center text-decoration-none pt-2 mb-3 text-light lead  border border-primary border-bottom-0",
}

export default SNavLink
