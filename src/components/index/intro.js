import * as React from "react"
import { Link } from "gatsby"

const Intro = () => {
  return (
    <section className="text-center">
      <div className="container-fluid">
        <div className="row justify-content-center text-start">
          <div className="col-11 col-md-4">
            <p className="text-danger">Flyer sharing project for underground raves, events, nightclubs, and other interesting events in CDMX. Also reviews and membership for special discounts and perks.</p>
          </div>
        </div>
        <div className="row justify-content-center d-flex border-top border-danger pt-3">
          <div className="col-11 col-sm-4">
            <p className="text-danger text-end">

              <a href="mailto:s@sli.st" className="text-danger text-decoration-none"> sendflyers@sli.st</a>
              <br />
              <a href="sflyer.jpeg" class="text-danger text-decoration-none ">
                sflyer.jpeg
              </a>
            </p>


          </div>
        </div>
      </div>





    </section>
  )
}

export default Intro