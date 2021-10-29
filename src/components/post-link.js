import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const SNavLink = ({ partiallyActive, className, to, children }) => {
  return (
    <AniLink
      cover
      direction="down"
      duration={1}
      bg="#000000"
      to={to}
      className={className}>
      {children}
    </AniLink>
  )
}

SNavLink.defaultProps = {
  partiallyActive: true,
  className: "row justify-content-center align-items-center py-3 text-light text-decoration-none lead mb-5 border border-primary border-bottom-0",
}

export default SNavLink