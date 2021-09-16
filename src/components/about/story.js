import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Story = () => (
  <section className="section section-lg my-md-6 p-md-6">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-6 text-left ">
          <h1 className="display-3 mb-4">The S LI.ST Origin Story</h1>
          <p className="">
            S List began as a finsta for following the underground music scene
            in CDMX. When I realized some of my friends could use some help
            finding parties, I had to spread the word. I remained anonymous as a
            personal challenge, for a long-term joke, and due to practical
            reasons.
          </p>
          <p className="">
            I enjoy the anonymity. It lets me be more expressive.
          </p>
          <p className="">
            IG deactivated my first account which had hit 800 real followers (600 CDMX) within a month. I tried restarting from scratch, but they also deactivated the next 3 accounts. The problem was that I was sharing too much content way too quickly for such relatively new accounts. Their automated systems kept flagging me for spam. There's virtually zero customer service and I'm too scared to build up yet another account just to have it get deleted. I will continue to use IG for finding events, but I will be resharing them here.
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
