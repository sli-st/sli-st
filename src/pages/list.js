import * as React from "react"
import Footer from "../components/footer"

import Layout from "../components/layout"

import Seo from "../components/seo"
import { Link } from "gatsby"
import img from "../../static/sflyer.jpeg"

const IndexPage = () => (
  <Layout>
    <Seo title="S List" />
    <div className="vh-100 intro-bg text-danger container-fluid border border-danger d-flex flex-column justify-content-around">

      <p className="">COMING SOON. UNDER CONSTRUCTION. SOOOOOOOOOOOOON. Registrations open soon. First 50 sign ups free for rest of 2021. MAYBE THURSDAY NIGHT OR SUNDAY IDK. TINY BIT BUSY BUT EXCITED!!! Your PERSONAL CORTESIA RAVER BITCH IS LOOKING FOR CORTESIAS FOR YOUUUUUUUUU.</p>

      <section>
        <div className="row justify-content-center align-items-center py-1">
          <div className="col-4 border py-3 px-2 text-center">flyer.jpeg</div>
          <div className="col-7">some sort of discount</div>
        </div>

        <div className="row justify-content-center align-items-center py-1">
          <div className="col-4 border py-3 px-2 text-center">flyer.jpeg</div>
          <div className="col-7">free drink, shot, water, etc.</div>
        </div>

        <div className="row justify-content-center align-items-center py-1">
          <div className="col-4 border py-3 px-2 text-center">flyer.jpeg</div>
          <div className="col-7">free entry for 1 or more</div>
        </div>
        <div className="row justify-content-center align-items-center py-1">
          <div className="col-4 border py-3 px-2 text-center">flyer.jpeg</div>
          <div className="col-7">some sort of discount</div>
        </div>
      </section>

      <section className="row justify-content-center pb-5">
        <form>
          <div class="form-group d-flex pb-3">
            <input type="email" class="form-control bg-primary border-danger text-danger border-end-0 rounded-0 text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="your@email.xoxo" />
            <input type="email" class="form-control bg-primary border-danger text-danger border-end-0 rounded-0 text-center" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="@socialmedia" />
            <button type="submit" class="btn text-soft btn-outline-danger rounded-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
              </svg>
            </button>
          </div>

        </form>
        <div className="d-grid gap-2 col-12 mx-auto ">
          <Link to="/" className="text-danger btn btn-outline-danger btn-md btn-block">
            Click here to display the members list.
          </Link>
        </div>
      </section>


      <Footer />
    </div>
  </Layout>
)

export default IndexPage