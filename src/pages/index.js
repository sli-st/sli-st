import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import SNavLink from "../components/snavlink"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <DatesNav />
    <div className="container-fluid">
      <section className="row py-2 justify-content-center">
        <div className="col-11 col-md-5 d-flex flex-column">
          <div className="text-center neon-button mt-4 mt-md-5 text-primary d-flex justify-content-around">
            <span>↑ </span>
            <span>NEW FLYERS - 13/12</span>
            <span>↑</span>
          </div>
        </div>
      </section>

      <section className="row d-flex flex-row justify-content-center align-items-center py-5 mx-md-5 px-md-5 bg-dark">
        <div className="col-12 col-md-7">
          <div className="row g-0">
            <Link to="sflyer1.jpeg" className="col-4">
              <img
                src={"/sflyer1.jpeg"}
                className="img-fluid"
                alt="Chain Post"
              />
            </Link>
            <Link to="sflyer2.jpeg" className="col-4">
              <img src={"/sflyer2.jpeg"} className="img-fluid" alt="SFlyer" />
            </Link>
            <Link to="sflyer3.png" className="col-4">
              <img src={"/sflyer3.png"} className="img-fluid" alt="QR Code" />
            </Link>
          </div>
        </div>
      </section>

      <section className="row justify-content-center">
        <div className="col-10 col-md-4 d-flex flex-column">
          <nav className="d-flex flex-column pt-3 pb-5 mb-5">
            <SNavLink to="/about/">about</SNavLink>
            <SNavLink to="/release-notes/">project updates</SNavLink>
            <a
              href="https://instagram.com/slistxmas"
              className="text-center text-decoration-none pt-2 mb-3 text-light lead border border-primary border-bottom-0"
            >
              ig: @slistxmas
            </a>
            <SNavLink to="#">my_recorded_mixes.wav</SNavLink>
            <SNavLink to="/x/">rave reflections | xperiences</SNavLink>
            <SNavLink to="/m/">sign up</SNavLink>
          </nav>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
