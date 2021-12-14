import * as React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import MainNavLink from "../components/mainnavlink"

const PrimaryNav = () => {
  return (
    <nav
      aria-label="Primary navigation"
      className="primary-nav container-fluid bg-black"
    >
      <div className="row justify-content-center text-center">
        <div className="col-sm-5 d-flex justify-content-between align-items-center">
          <MainNavLink to="/x/">§</MainNavLink>
          <MainNavLink
            to="/"
            className="text-white text-decoration-none border px-2 "
            partiallyActive={false}
          >
            SLi.ST
          </MainNavLink>
          <MainNavLink to="/m/">§</MainNavLink>
        </div>
      </div>
    </nav>
  )
}

export default PrimaryNav
