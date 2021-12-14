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
    <DatesNav />
    <div className="container-fluid index">
      <section className="row py-2 justify-content-center">
        <div className="col-11 col-md-5 d-flex flex-column">
          <div className="text-center neon-button mt-4 mt-md-5 d-flex justify-content-around">
            <span>↑ </span>
            <span>NEW FLYERS - 13/12</span>
            <span>↑</span>
          </div>
        </div>
      </section>
      <section className="row justify-content-center py-5">
        <div className="col-12 col-md-4">
          <nav className="d-flex flex-column text-center">
            <Link to="/about/">about</Link>
            <a href="https://instagram.com/slistxmas" className="text-light">
              ig: @slistxmas
            </a>
            <Link to="#">my-recorded-mixes.wav</Link>
            <Link to="/release-notes/">project updates</Link>
          </nav>
        </div>
      </section>
      <section className="row d-flex flex-row justify-content-center align-items-center py-5">
        <div className="col-12 col-md-6 py-3">
          <div className="row">
            <Link to="sflyer1.jpeg" className="col-6">
              <img
                src={"/sflyer1.jpeg"}
                className="img-fluid"
                alt="Chain Post"
              />
            </Link>
            <Link to="sflyer2.jpeg" className="col-6">
              <img src={"/sflyer2.jpeg"} className="img-fluid" alt="SFlyer" />
            </Link>
            <Link to="sflyer3.png" className="col-6">
              <img src={"/sflyer3.png"} className="img-fluid" alt="QR Code" />
            </Link>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
