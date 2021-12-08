import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import SignUpForm from "../components/signupform"
import ContactLinks from "../components/contactlinks"
import RecentLinks from "../components/recentlinks"
import SList from "../components/slist"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <DatesNav />
    <div className="container-fluid pb-5 mb-5">
      <section className="row justify-content-center">
        <div className="col-8 col-md-6 d-flex flex-column">
          <div className="text-center my-5 h1 text-primary">^ FLYERS UPDATED 8/12/21^</div>
          <div className="text-center my-5 h3 text-primary">Big layout changes soon.</div>
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
