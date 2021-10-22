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
    <div className="container-fluid text-start my-5 py-5 ">
      <section className="row justify-content-center">
        <div className="col-md-4 py-3">
          <SignUpForm />
        </div>
      </section>
      <section className="row justify-content-center d-flex py-3">
        <div className="col-md-4">
          <p className="text-info text-end">
            <InstagramLink />
          </p>
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
