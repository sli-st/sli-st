import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Eventsrecs = () => {
  return (
    <section className="intro-bg">
      <div className="scrolling-wrapper event-recs-row">
        <StaticImage
          className="gridphoto event-rec-img"
          src="../../images/flyer/1.jpg"
          alt="me"
          placeholder="dominantColor"
        />
        <StaticImage
          className="gridphoto event-rec-img"
          src="../../images/flyer/2.jpg"
          alt="me"
          placeholder="dominantColor"
        />
        <StaticImage
          className="gridphoto event-rec-img"
          src="../../images/flyer/3.jpg"
          alt="me"
          placeholder="dominantColor"
        />
        <StaticImage
          className="gridphoto event-rec-img"
          src="../../images/flyer/4.jpg"
          alt="me"
          placeholder="dominantColor"
        />
        <StaticImage
          className="gridphoto event-rec-img"
          src="../../images/flyer/5.jpg"
          alt="me"
          placeholder="dominantColor"
        />
        <StaticImage
          className="gridphoto event-rec-img"
          src="../../images/flyer/6.jpg"
          alt="me"
          placeholder="dominantColor"
        />

        <div className="event-rec-img"></div>
      </div>


    </section>
  )
}
export default Eventsrecs
