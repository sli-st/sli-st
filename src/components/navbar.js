import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useEffect } from "react"

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
        className="navbar navbar-main navbar-expand-lg navbar-theme-primary headroom"
      >
        <div className="container position-relative">
          <Link to="/" className="navbar-brand navbar-brand">
            {siteTitle}
          </Link>
          <div
            className="navbar-collapse collapse justify-content-end justify-space-around"
            id="navbar_global"
          >
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <Link to="/" className="navbar-brand navbar-brand">
                    {siteTitle}
                  </Link>
                </div>
                <div className="col-6 collapse-close">
                  <a
                    href="#navbar_global"
                    className="fas fa-times"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    title="close"
                    aria-label="Toggle navigation"
                  ></a>
                </div>
              </div>
            </div>
            <nav className="navbar-nav navbar-nav-hover align-items-lg-center">
              <Link to="/story/" className="nav-link">
                Story
              </Link>
              <Link to="/policy" className="nav-link">
                Policy
              </Link>
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </nav>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="navbar-toggler ml-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar_global"
              aria-controls="navbar_global"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
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
