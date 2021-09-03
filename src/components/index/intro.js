import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Intro = () => {
  return (
    <section
      className="section section bg-soft pb-md-7 overflow-hidden z-2 @@classNamees"
      id="intro"
    >
      <div className="container z-2">
        <div className="row justify-content-center text-center pt-6">
          <div className="col-lg-8 col-xl-8 np-element mb-md-4">
            <h1 className=" px-md-6 mb-2 np-element text-center">S LI.ST<br/>
            x<br/>
            Underground Music Events<br/>
            </h1>
            <p className="lead">From pre-gaming to after-partying.</p>
            <a
                href="#"
                target="_blank"
                className="btn btn-primary"
              >
                Tours available!
              </a>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
