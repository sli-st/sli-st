import * as React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import MainNavLink from "../components/mainnavlink"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexNav = () => {
  return (
    <nav
      aria-label="Primary navigation"
      id="index-nav"
      className="container-fluid p-0 fixed-bottom"
    >
      <section className="row justify-content-center g-3 gy-3">
        <Link to="/news/" className="col col-md-1">
          <StaticImage src="../images/index/canary.jpg" alt="A kitten" />
        </Link>
        <Link to="/sflyer1.jpeg/" className="col col-md-1">
          <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
        </Link>
        <Link to="/sflyer2.jpeg" className="col col-md-1">
          <StaticImage src="../images/index/sflyer2.jpeg" alt="A kitten" />
        </Link>
        <Link to="/sflyer3.jpeg" className="col col-md-1">
          <StaticImage src="../images/index/sflyer3.jpeg" alt="A kitten" />
        </Link>
      </section>

      <section className="row justify-content-center g-3 gy-3">
        <Link to="/x/" className="col-6 col-md-2">
          <StaticImage src="../images/index/x.png" alt="A kitten" />
        </Link>
        <Link to="/recorded/" className="col-6 col-md-2">
          <StaticImage src="../images/index/recorded.png" alt="A kitten" />
        </Link>
      </section>

      <section className="row justify-content-center g-3 gy-3">
        <Link to="/about/" className="col-6 col-md-2">
          <StaticImage src="../images/index/about.jpeg" alt="A kitten" />
        </Link>
        <Link to="/m/" className="col-6 col-md-2">
          <StaticImage src="../images/index/m.jpeg" alt="A kitten" />
        </Link>
      </section>

      {/* <section>
        <Link to="/sflyer1.jpeg/">
          <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
        </Link>
        <Link to="/sflyer2.jpeg">
          <StaticImage src="../images/index/sflyer2.jpeg" alt="A kitten" />
        </Link>
        <Link to="/sflyer3.jpeg">
          <StaticImage src="../images/index/sflyer3.jpeg" alt="A kitten" />
        </Link>
      </section> */}
    </nav>
  )
}

export default IndexNav
