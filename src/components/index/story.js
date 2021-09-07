import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"


const Story = () => (
  <section className="section section-lg pt-md-7 my-md-7 p-md-6">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          
          <div className="col-md-6 text-left ">
            <h1 className="display-3 mb-4">The S LI.ST Origin Story</h1>
            <p className="lead">
              S List began as a finsta for following the underground music scene
              in CDMX. When I realized some of my friends could use some help
              finding parties, I had to spread the word. I remained anonymous as a
              personal challenge, for a long-term joke, and due to practical
              reasons.
            </p>
            <p className="lead">
              I enjoy the anonymity. It lets me be more expressive.
            </p>
          </div>
          <div className="col-md-4 mb-5">
            <div className="card bg-primary shadow-soft shadow-inset border-light p-3">
              <StaticImage
                src="../../images/me.jpg"
                className="img-fluid"
                alt="me"
                placeholder="dominantColor"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
)

export default Story
