import * as React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import MainNavLink from "../components/mainnavlink"


const PrimaryNav = () => {
  return (
    <TransitionPortal>
      <nav
        aria-label="Primary navigation"
        className="primary-nav container-fluid fixed-bottom bg-black pb-4 pt-3"
      >
        <div className="row justify-content-center text-center pb-1">
          <div className="col-sm-5 d-flex justify-content-between align-items-center">
            <MainNavLink to="/s">§</MainNavLink>
            <MainNavLink to="/adventures/">§</MainNavLink>
            <MainNavLink
              to="/"
              className="text-white text-decoration-none border px-2 "
              partiallyActive={false}>
              SLi.ST
            </MainNavLink>
            <MainNavLink to="/perks">§</MainNavLink>
            <MainNavLink to="/members">§</MainNavLink>
          </div>
        </div>
      </nav>
    </TransitionPortal >


  )
}

export default PrimaryNav


