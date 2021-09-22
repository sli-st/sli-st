import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Leads from "../../components/about/leads"
import Card1 from "../../components/index/card1"

const Eventsrecs = () => {
  return (
    <section className="intro-bg px-4 container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-9">
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
          </div>
        </div>
      </div>
    </section>
  )
}
export default Eventsrecs
