import * as React from "react"
import Footer from "../components/footer"

import Layout from "../components/layout"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="S List" />
    <div className="vh-100 d-flex flex-column justify-content-center intro-bg text-danger container-fluid">
      <section className="row justify-content-center">
        <div className="col-md-4">
          <h1>S LIST Members</h1>
          <p>Memberships coming soon.</p>
          <p>Basically you join, have your name or social media username displayed on this page, and show it at the door for various perks.</p>
          <p>Membership perks will include discounts, free drinks, and cortesias for participating organizations.</p>
          <p>For the record, we were getting discounts and cortesias for the S List community left and right before the IG account was at its peak. This time we're growing with more support, so... expect cool stuff soon.</p>

          <h2>Upcoming updates:</h2>
          <p>Better layout for flyers. Ability to click on a flyer for a fullscreen view. Better color scheme. Better fonts for readability. Translated writing. A small gallery of pictures from parties. A store (a bit later). Chat feature or just a whatsapp group.</p>
        </div>
      </section>
      <Footer />
    </div>
  </Layout>
)

export default IndexPage