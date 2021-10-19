import * as React from "react"
import { Link } from "gatsby"

const Intro = () => {
  return (
    <section className="text-center">
      <div className="container-fluid">
        <p>STILL UPDATING. CHECK WEDNESDAY FOR NEW FLYERS AND SIGN UP FORM. UNDER CONSTRUCTION!</p>
        <section className="pb-3">
          <form>
            <div className="form-group d-flex">
              <input type="email" className="form-control bg-primary border-danger text-danger border-end-0 rounded-0 text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.xoxo" />
              <input type="email" className="form-control bg-primary border-danger text-danger rounded-0 text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@socialmedia" />

            </div>
            <div className="d-grid gap-2 col-12 mx-auto ">
              <button type="submit" className="btn text-soft btn-outline-danger border-top-0 rounded-0">
                get on the S List
              </button>
            </div>

          </form>

        </section>

        <div className="row justify-content-center text-start border-to border-bottom border-danger py-3">
          <div className="col-11 col-md-4">
            <p className="text-danger">A project for sharing underground raves, nightclubs, and other interesting events in CDMX. Feel free to send any and all leads. Updates every Wednesday.</p>
          </div>
        </div>
        <div className="row justify-content-center d-flex pt-3">
          <div className="col-11 col-sm-4">
            <p className="text-danger text-end">
              <a href="https://www.instagram.com/slistslist/" className="text-danger text-decoration-none">dm @slistslist</a>
              <br />
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