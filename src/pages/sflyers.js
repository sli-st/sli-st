import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => (
  <Layout pageTitle="About">
    <Seo title="About" />
    <div className="container-fluid">
      <section className="row justify-content-center align-items-center">
        <h1 className="text-center py-5">
          {" "}
          Please Tag and Share! <br></br>Click to Download.
        </h1>
        <div className="col-lg-5">
          <a href="/sflyer1.jpeg" download>
            <img className="img-fluid" src="/sflyer1.jpeg" />
          </a>
        </div>
        <div className="col-lg-5">
          <a href="/sflyer2.jpeg" download>
            <img className="img-fluid" src="/sflyer2.jpeg" />
          </a>
        </div>
        <div className="col-lg-5">
          <a href="/sflyer3.jpeg" download>
            <img className="img-fluid" src="/sflyer3.jpeg" />
          </a>
        </div>
      </section>
    </div>
  </Layout>
)

export default About
