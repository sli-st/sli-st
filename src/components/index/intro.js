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
      className="section section intro-bg pb-md-7 overflow-hidden z-2 text-soft"
      id="intro"
    >
      <div className="container z-2">
        <div className="row justify-content-center text-center pt-6">
          <div className="col-lg-8 col-xl-8 mb-md-4">
            <h1 className="px-md-6 mb-2 text-center display-1 px-md-6 text-center">S LI.ST</h1>
            <p className="px-md-6">
              Sharing and listing underground events. 
            </p>
            <p>
            Bookmark for #official #accounts.
            </p>
          
        </div>
      </div>
      </div>
    </section>
  )
}

export default Intro
