import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SignUpForm from "../../components/signupform"
import Footer from "../../components/Footer"

const IndexPage = () => (
  <Layout pageTitle="Info">
    <Seo title="Info" />
    <div className="container-fluid pt-5 mt-5">
      <section className="row justify-content-center pt-5 mt-5">
        <div className="col-md-5 px-0 text-light">
          <SignUpForm id="join" />
          <Footer to="/a/a5" label="About" />
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
