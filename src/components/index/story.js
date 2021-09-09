import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
          <p className="">
            Recently IG has been deactivating my accounts. With the first account, and all the others, the problem has been that I share too much content for each relatively new account. It raises their automated alarms and marks my actions as being spammy. I will continue to try using IG while I develop another solution. Maybe I will just post flyers here, and spread awareness of this website offline.
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
