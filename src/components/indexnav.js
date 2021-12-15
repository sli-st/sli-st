import * as React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import MainNavLink from "../components/mainnavlink"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const IndexNav = () => {
  return (
    <nav aria-label="Primary navigation" id="index-nav">
      <section>
        <Link to="/x/">
          <StaticImage src="../images/index/x.png" alt="A kitten" />
        </Link>
        <Link to="/about/">
          <StaticImage src="../images/index/about.jpeg" alt="A kitten" />
        </Link>
        <Link to="/m/">
          <StaticImage src="../images/index/m.jpeg" alt="A kitten" />
        </Link>
      </section>
      <section className="pt-3 pb-4">
        <Link to="/news/">
          <StaticImage src="../images/index/canary.jpg" alt="A kitten" />
        </Link>
        <Link to="/qr/">
          <StaticImage src="../images/index/qr.png" alt="A kitten" />
        </Link>
        <Link to="/recorded/">
          <StaticImage src="../images/index/recorded.png" alt="A kitten" />
        </Link>
      </section>
      <section>
        <Link to="/sflyer1.jpeg/">
          <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
        </Link>
        <Link to="/sflyer2.jpeg">
          <StaticImage src="../images/index/sflyer2.jpeg" alt="A kitten" />
        </Link>
        <Link to="/sflyer3.jpeg">
          <StaticImage src="../images/index/sflyer3.jpeg" alt="A kitten" />
        </Link>
      </section>
    </nav>
  )
}

export default IndexNav
