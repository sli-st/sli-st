import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import SNavLink from "../components/snavlink"
import { Link } from "gatsby"
import Footer from "../components/footer"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />

    <div className="container-fluid">
      <section className="row pb-5 justify-content-center">
        <Link to="/x/" className="col-6 col-md">
          <img src={"/sflyer1.jpeg"} className="img-fluid" alt="QR Code" />
        </Link>
        <Link to="/news/" className="col-6 col-md">
          <img src={"/sflyer6.jpg"} className="img-fluid" alt="QR Code" />
        </Link>
        <Link to="/about/" className="col-6 col-md">
          <img src={"/sflyer4.jpeg"} className="img-fluid" alt="QR Code" />
        </Link>

        <a href="https://www.instagram.com/slistxmas/" className="col-6 col-md">
          <img src={"/sflyer3.jpeg"} className="img-fluid" alt="QR Code" />
        </a>
        <Link to="/m/" className="col-6 col-md">
          <img src={"/sflyer7.jpeg"} className="img-fluid" alt="QR Code" />
        </Link>
      </section>

      <section className="row justify-content-center py-5 my-5 d-none">
        <div className="col-11 col-md-5 d-flex flex-column">
          <Link to="#" className="text-decoration-none">
            <div className="text-center neon-button text-primary d-flex justify-content-around">
              <span>→ </span>
              <span>Future Event Flyers</span>
              <span>←</span>
            </div>
          </Link>
        </div>
      </section>
      <DatesNav />
    </div>
  </Layout>
)

export default IndexPage
