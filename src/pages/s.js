import * as React from "react"
import Footer from "../components/footer"

import Layout from "../components/layout"

import Seo from "../components/seo"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import SNavLink from "../components/snavlink"


const Me = () => (
  <Layout pageTitle="S">
    <Seo title="S" />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <h1 className="text-center pt-5 text-secondary">[S]</h1>
          <p className="text-center text-light">SOON!</p>
          <nav className="d-flex flex-column pb-5 my-5 mx-auto">
            <SNavLink to="/playlists/">playlists</SNavLink>
            <SNavLink to="/visualmedia">visual media</SNavLink>
            <SNavLink to="/recorded">recorded</SNavLink>
            <SNavLink to="/supdates">supdates</SNavLink>
            <SNavLink to="/contact">contact</SNavLink>
            <SNavLink to="/thanks">special thanks</SNavLink>
          </nav>
        </div>
      </div>
    </div>
  </Layout>
)

export default Me