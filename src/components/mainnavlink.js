import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MainNavLink = ({ partiallyActive, className, to, children }) => {
  return (
    <AniLink
      cover
      direction="down"
      duration={1}
      bg="#000000"
      activeClassName="nav-active"
      partiallyActive={partiallyActive}
      to={to}
      className={className}>
      {children}
    </AniLink>
  )
}

MainNavLink.defaultProps = {
  partiallyActive: true,
  className: "text-light text-decoration-none lead",
}

export default MainNavLink