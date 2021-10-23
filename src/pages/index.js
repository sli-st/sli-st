import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import SignUpForm from "../components/signupform"
import ContactLinks from "../components/contactlinks"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <DatesNav />
    <div className="container-fluid text-start mt-5 pb-5 pt-5">
      <section className="row justify-content-center">
        <div className="col-md-5 py-3">
          <SignUpForm />
        </div>
      </section>
      <section className="row justify-content-center d-flex py-3">
        <div className="col-md-5">
          <p className="text-end">
            <ContactLinks />
          </p>
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
