import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faSpotify,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Intro = () => {
  return (
    <section
      className="section section bg-soft pb-md-7 overflow-hidden z-2"
      id="intro"
    >
      <div className="container z-2">
        <div className="row justify-content-center text-center pt-6">
          <div className="col-lg-8 col-xl-8 np-element mb-md-4">
            <h1 className="display-2 mb-3">S LI.ST</h1>
            <p className="lead px-md-6 mb-4 np-element">
              A list of all the upcoming underground music events I can find.
              For sharing! Not promoting.
            </p>
            <div className="d-flex flex-column flex-wrap flex-md-row justify-content-md-center mb-3">
              <a
                href="https://www.instagram.com/sli.stcdmx/"
                target="_blank"
                className="btn btn-instagram mb-3 mb-lg-0 mr-3"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-2" /> CDMX
              </a>{" "}
              <a
                href="#"
                target="_blank"
                className="btn btn-facebook mb-3 mb-lg-0 mr-3"
              >
                <FontAwesomeIcon icon={faFacebookSquare} className="mr-2" />{" "}
                CDMX
              </a>{" "}
              <a
                href="https://www.instagram.com/slistnyc"
                target="_blank"
                className="btn btn-primary mb-3 mb-lg-0 mr-3"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-2" /> NYC
              </a>
            </div>
            <p>Facebook & NYC IG work in progress</p>
            <div className="d-flex flex-column flex-wrap flex-md-row justify-content-md-center mb-5">
              <a
                href="https://open.spotify.com/user/z09n91efexts02mucc1kils6z?si=a6Jox2yYTsOzO6nacl-leA&dl_branch=1&nd=1"
                target="_blank"
                className="btn btn-spotify mb-3 mt-lg-1 mb-lg-3 mr-3"
              >
                <FontAwesomeIcon icon={faSpotify} className="mr-2" />
                SlayList™
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
