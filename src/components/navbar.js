import * as React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

const Navbar = () => {
  return (
    <header className="header-global">
      <nav
        id="navbar-main"
        aria-label="Primary navigation"
        className="navbar navbar-main navbar-expand-lg intro-bg text-soft headroom"
      >
        <div className="container d-flex justify-content-around">
          <a
            href="https://www.instagram.com/dm.para.link/"
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-1" />
            Follow
          </a>
          <a
            href="https://www.instagram.com/dm.para.link/"
            target="_blank"
            rel="noreferrer"
            className="d-none"
          >
            <FontAwesomeIcon icon={faFacebookSquare} className="mr-1" />Page
          </a>
          <a
            href="https://www.instagram.com/slistnyc"
            target="_blank"
            rel="noreferrer"
            className="d-none"
          >
            <FontAwesomeIcon icon={faFacebookSquare} className="mr-1" />Group
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
