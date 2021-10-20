import * as React from "react"
import { Link } from "gatsby"
import SignUpForm from "../../components/signupform"

const Intro = () => {
  return (
    <section className="text-center">
      <section className="pb-3">
        <p className="text-danger"> Updates every Wednesday.</p>
      </section>



      <section className="row justify-content-center text-start border-to border-bottom border-danger py-3">
        <div className="col-11 col-md-4">
          <SignUpForm />
        </div>
      </section>





      <section className="row justify-content-center d-flex pt-3">
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
      </section>
    </section>
  )
}

export default Intro