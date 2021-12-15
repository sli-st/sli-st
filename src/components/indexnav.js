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
      className="fixed-bottom container-fluid"
    >
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <section className="row d-flex justify-content-center mb-1">
            <div className="d-flex flex-column">
              <Link to="about" className="text-decoration-none">
                <div className="neon-button text-primary py-2 px-5 fs-2 d-flex justify-content-center">
                  About SLi.ST
                </div>
              </Link>
            </div>
          </section>
          <section className="row justify-content-center py-4">
            <div className="col-4">
              <div className="row">
                <Link to="/news/" className="col-12 bbg-primary">
                  <StaticImage src="../images/index/news.png" alt="A kitten" />
                </Link>
                <Link
                  to="/sflyer3.jpeg"
                  className="col-12 display-1 text-decoration-none text-center mt-5 text-primary "
                >
                  {"<3"}
                </Link>
              </div>
            </div>
            <Link to="#" className="col-8 grayscale">
              <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
            </Link>
          </section>

          <section className="row justify-content-center">
            <a href="https://www.instagram.com/slistxmas/" className="col">
              <StaticImage
                src="../images/index/igqr.jpg"
                alt="A kitten"
                className=""
              />
            </a>
            <Link to="/mixes/" className="col">
              <StaticImage
                src="../images/index/recorded.png"
                alt="A kitten"
                className="border border-primary"
              />
            </Link>

            <Link to="/x/" className="col">
              <StaticImage src="../images/index/x.png" alt="A kitten" />
            </Link>
          </section>

          <section className="row justify-content-center py-4">
            <Link
              to="https://us5.list-manage.com/survey?u=ffa00e0e7d456f08048753fe5&id=d2d82c8053&attribution=false"
              className="col text-cente d-flex align-items-center text-decoration-none"
            >
              <span className="w-100 h-100 d-flex align-items-center justify-content-center border border-light">
                <div className="text-primary px-3">Anonymous Feedback Form</div>
              </span>
            </Link>

            <Link to="/m/" className="col">
              <StaticImage src="../images/index/m.jpeg" alt="A kitten" />
            </Link>
            <Link to="/m/" className="col text-decoration-none ">
              <span className="w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="border border-primary text-primary px-3 fs-3">
                  LIST
                </div>
              </span>
            </Link>
          </section>
        </div>
      </div>
    </nav>
  )
}

export default IndexNav
