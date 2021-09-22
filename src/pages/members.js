import * as React from "react"
import Footer from "../components/footer"

import Layout from "../components/layout"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="S List" />
    <div className="vh-100 d-flex flex-column justify-content-between intro-bg text-soft">
      <section className="my-md-6 p-4 text-center">
        <h1>S LIST Members</h1>
        <p>Memberships coming soon.</p>
        <p>Membership perks will include discounts, free drinks, and cortesias for participating organizations.</p>
        <p>For the record, we already had all of that when the IG account was at its peak.</p>
      </section>
      <section className="row justify-content-center">
        <div className="col-md-4">
          <h2>Upcoming updates:</h2>
          <p>Better layout for flyers. Ability to click on a flyer for a fullscreen view. Better color scheme. Better fonts for readability. Translated writing. A small gallery of pictures from parties. A store (a bit later). Chat feature or just a whatsapp group.</p>
        </div>
      </section>
      <Footer />
    </div>
  </Layout>
)

export default IndexPage