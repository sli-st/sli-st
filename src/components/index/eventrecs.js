import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Eventsrecs = () => {
  return (
    <section className="intro-bg pt-5 px-4 container-fluid">
      <div className="row justify-content-center ">
        <div className="col-md-9 text-center">
          <div className="d-none scrolling-wrapper event-recs-row shadow-lg ">
            <StaticImage
              className="gridphoto event-rec-img"
              src="../../images/flyer/1.jpg"
              alt="flyer"
              placeholder="dominantColor"
            />
            <StaticImage
              className="gridphoto event-rec-img"
              src="../../images/flyer/2.jpg"
              alt="flyer"
              placeholder="dominantColor"
            />
            <StaticImage
              className="gridphoto event-rec-img"
              src="../../images/flyer/3.jpg"
              alt="flyer"
              placeholder="dominantColor"
            />
            <StaticImage
              className="gridphoto event-rec-img"
              src="../../images/flyer/4.jpg"
              alt="flyer"
              placeholder="dominantColor"
            />
            <StaticImage
              className="gridphoto event-rec-img"
              src="../../images/flyer/5.jpg"
              alt="flyer"
              placeholder="dominantColor"
            />
            <StaticImage
              className="gridphoto event-rec-img"
              src="../../images/flyer/6.jpg"
              alt="flyer"
              placeholder="dominantColor"
            />
            <StaticImage
              className="gridphoto event-rec-img"
              src="../../images/flyer/7.jpg"
              alt="flyer"
              placeholder="dominantColor"
            />

          </div>
        </div>
      </div>
    </section>
  )
}
export default Eventsrecs
