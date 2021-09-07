import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faSpotify,
  faInstagram, faPlus
} from "@fortawesome/free-brands-svg-icons"

const isActive = ({ isCurrent }) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = props => <Link getProps={isActive} {...props} />

const Navbar = ({ siteTitle }) => {
  return (
    <header className="header-global">
      <nav
        id="navbar-main"
        aria-label="Primary navigation"
        className="navbar navbar-main navbar-expand-lg intro-bg text-soft headroom"
      >
        <div className="container position-relative">
          <a
                href="https://www.instagram.com/sli.stcdmx/"
                target="_blank"
                className=""
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-1" />
                sli.stcdmx
              </a>
              <a
                href="#"
                target="_blank"
                className=""
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="mr-1" />Page
              </a>
              <a
                href="https://www.instagram.com/slistnyc"
                target="_blank"
                className=""
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="mr-1" />Group
              </a>
        </div>
      </nav>
    </header>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
