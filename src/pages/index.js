import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import DatesNav from "../components/datesnav"
import SignUpForm from "../components/signupform"
import InstagramLink from "../components/instagramlink"
import FlyerButton from "../components/flyerbutton"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <DatesNav />
    <div className="container-fluid text-start py-5 ">
      <section className="row justify-content-center">
        <div className="col-11 col-sm-5 py-3 text-secondary">
          <p>Updated OCT/20 with more flyers. Membership registrations are now open. A few collabs lined-up, but always open to more. DM! Explore a bit. DM me feedback. Experimenting with colors.</p>
        </div>
      </section>
      <section className="row justify-content-center">
        <div className="col-11 col-sm-3 py-3">
          <SignUpForm />
        </div>
      </section>
      <section className="row justify-content-center d-flex pt-3">
        <div className="col-11 col-sm-3">
          <p className="text-info text-end">
            <InstagramLink />
          </p>
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
