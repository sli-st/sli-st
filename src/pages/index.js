import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import SignUpForm from "../components/signupform"
import ContactLinks from "../components/contactlinks"
import RecentLinks from "../components/recentlinks"
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <DatesNav />
    <div className="container-fluid">
      <section className="row justify-content-center py-5 my-5">
        <div className="col-md-5 text-start">
          <RecentLinks />
        </div>
      </section>
      <section className="row justify-content-center py-5 my-5">
        <div className="col-md-5 text-center">
          <Link to="/members" className="p-3 border border-primary">Membership signups are finally open!</Link>
        </div>
      </section>
      <section className="row justify-content-center d-flex py-5 my-5">
        <div className="col-md-5 text-end">
          <ContactLinks />
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
