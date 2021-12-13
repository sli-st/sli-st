import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import SNavLink from "../components/snavlink"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <DatesNav />
    <div className="container-fluid">
      <section className="row pb-2 justify-content-center">
        <div className="col-8 col-md-5 d-flex flex-column">
          <div className="text-center neon-button mt-5 text-primary d-flex justify-content-around">
          <span>↖ </span>
          <span>FLYERS UPDATED: 12/12</span>
          <span>↗</span> 
          </div>
        </div>
      </section>

      <section className="row flex-row justify-content-center align-items-center my-5">
      <img src={'/sflyer2.jpeg'} className="sflyer" />
      <img src={'/sflyer3.jpeg'} className="sflyer" />
      <img src={'/sflyer4.jpeg'} className="sflyer" />
      </section>

      <section className="row justify-content-center">
        <div className="col-8 col-md-4 d-flex flex-column">
          
          <nav className="d-flex flex-column pb-5 mb-5">
            <SNavLink to="/about/">about</SNavLink>
            <SNavLink to="/s/mixes/">release notes</SNavLink>
            <a href="https://instagram.com/slistxmas" className="text-center text-decoration-none pt-1 mb-3 text-light lead border border-primary border-bottom-0">@slistxmas</a>
            <SNavLink to="/s/">sign up</SNavLink>
            <SNavLink to="/s/">adventiures, Xperiences, rave reflections</SNavLink>
            <SNavLink to="/s/">special thanks (coming soon)</SNavLink>
            <SNavLink to="/s/">visual medias (coming soon)</SNavLink>
          </nav>
        </div>
        
      </section>
    </div>
  </Layout >
)

export default IndexPage
