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
      <section className="row justify-content-center pt-5">
        <div className="col-md-6 px-0">
          <SList />
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
