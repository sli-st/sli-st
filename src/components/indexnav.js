import * as React from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import MainNavLink from "../components/mainnavlink"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ReactAudioPlayer from "react-audio-player"

const IndexNav = () => {
  return (
    <nav
      aria-label="Primary navigation"
      id="index-nav"
      className=" container-fluid"
    >
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <section className="row justify-content-center">
            <div className="col-4">
              <div className="row">
                <Link to="/news/" className="col-12 bbg-primary">
                  <StaticImage src="../images/index/news.jpeg" alt="A kitten" />
                </Link>
                <Link
                  to="/sflyer3.jpeg"
                  className="col-12 display-1 text-decoration-none text-center mt-5 text-primary "
                >
                  {"<3"}
                </Link>
              </div>
            </div>
            <Link to="/sflyer1.jpeg/" className="col-8">
              <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
            </Link>
          </section>

          <section className="row justify-content-center py-4">
            <a href="https://www.instagram.com/slistxmas/" className="col">
              <StaticImage
                src="../images/index/igqr.jpg"
                alt="A kitten"
                className=""
              />
            </a>
            <Link to="/mixes/" className="col">
              <StaticImage src="../images/index/Untitled.png" />
            </Link>

            <Link to="/x/" className="col">
              <StaticImage src="../images/index/x.png" alt="A kitten" />
            </Link>
          </section>

          <section className="row justify-content-center pb-4">
            <Link to="/mixes/" className="col">
              <StaticImage
                src="../images/index/recorded.png"
                alt="A kitten"
                className="border border-primary"
              />
            </Link>
            <Link to="/m/" className="col">
              <StaticImage src="../images/index/m.jpeg" alt="A kitten" />
            </Link>
            <Link to="/about/" className="col">
              <StaticImage src="../images/index/about.jpeg" alt="A kitten" />
            </Link>
          </section>
        </div>
      </div>
    </nav>
  )
}

export default IndexNav
