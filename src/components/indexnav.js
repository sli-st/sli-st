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
      className="fixed-bottom container-fluid"
    >
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <section className="row justify-content-center">
            <div className="col-4">
              <div className="row">
                <Link to="/news/" className="col-12">
                  <StaticImage
                    src="../images/index/canary.jpg"
                    alt="A kitten"
                  />
                </Link>
                <Link
                  to="/sflyer3.jpeg"
                  className="col-12 display-1 text-decoration-none text-center mt-5 "
                >
                  ❤️
                </Link>
              </div>
            </div>
            <Link to="/sflyer1.jpeg/" className="col-8">
              <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
            </Link>
          </section>

          <section className="row justify-content-center py-4">
            <Link to="/x/" className="col">
              <StaticImage
                src="../images/index/igqr.jpg"
                alt="A kitten"
                className=""
              />
            </Link>
            <Link to="/recorded/" className="col"></Link>

            <Link to="/m/" className="col">
              <StaticImage src="../images/index/m.jpeg" alt="A kitten" />
            </Link>
          </section>

          <section className="row justify-content-center align-items-center">
            <Link to="/sflyer3.jpeg" className="col">
              <StaticImage src="../images/index/recorded.png" alt="A kitten" />
            </Link>
            <Link to="/x/" className="col">
              <StaticImage src="../images/index/x.png" alt="A kitten" />
            </Link>
            <Link to="/about/" className="col">
              <StaticImage src="../images/index/about.jpeg" alt="A kitten" />
            </Link>
          </section>
        </div>
      </div>

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
