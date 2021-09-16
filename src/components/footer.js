import * as React from "react"

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <footer
      aria-label="Primary navigation"
      className="footer intro-bg text-soft"
    >
      <div className="container d-flex justify-content-around">
        <a
          href="https://www.instagram.com/dm.para.link/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="mr-1" />
        </a>
        <a
          href="/"
        >
          S LI.ST
        </a>
        <a
          href="/about"
        >
          About
        </a>
      </div>
    </footer>
  )
}

export default Footer
