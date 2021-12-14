import * as React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const MainNavLink = ({ partiallyActive, className, to, children }) => {
  return (
    <AniLink
      activeClassName="nav-active"
      partiallyActive={partiallyActive}
      to={to}
      className={className}
    >
      {children}
    </AniLink>
  )
}

MainNavLink.defaultProps = {
  partiallyActive: true,
  className: "text-light text-decoration-none lead p-3",
}

export default MainNavLink
