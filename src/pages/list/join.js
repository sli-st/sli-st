import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SignUpForm from "../../components/signupform"
import Footer from "../../components/footer"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout pageTitle="List" to="/about/list" label="About">
    <Seo title="List" />
    <div className=" mx-auto">
      <SignUpForm id="join" />
    </div>
  </Layout>
)

export default IndexPage
