import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

import Seo from "../components/seo"

const StoryPage = () => (
  <Layout>
    <Seo title="SLI.ST Story" />
    <section className="section section-lg pt-7">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-6 text-left">
            <h1 className="display-2 mb-4">The Story So Far</h1>
            <p className="lead">
              S List began as a finsta for following the underground music scene
              in CDMX. When I realized some of my friends could use some help
              with their nightlife, I spread the word. I remained anonymous as a
              personal challenge, for a long-term gag, and due to practical
              reasons.
            </p>
            <p className="lead">
              I enjoy the anonymity. It lets me be more expressive.
            </p>
            <a
              href="https://open.spotify.com/user/z09n91efexts02mucc1kils6z?si=a6Jox2yYTsOzO6nacl-leA&dl_branch=1&nd=1"
              target="_blank"
              className="btn btn-spotify mb-3 mt-lg-1 mb-lg-3 mr-3"
            >
              <FontAwesomeIcon icon={faSpotify} className="mr-2" />
              SlayList™
            </a>

            <p className="lead">
              There's two S Lists. The one described above, and another list for
              the events I'm personally looking forward to (pulic). I currently
              enjoy raunchy provacative dark techno, some "experimental", and
              "unique" events.
            </p>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-primary shadow-soft shadow-inset border-light organic-radius p-3">
              <StaticImage
                src="../images/me.jpg"
                className="organic-radius img-fluid"
                alt="me"
                placeholder="dominantColor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default StoryPage
