import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SignUpForm from "../../components/signupform"

const IndexPage = () => (
  <Layout pageTitle="List" to="/list" label="List">
    <Seo title="List" />
    <div className=" mx-auto">
      <SignUpForm id="join" />
    </div>
  </Layout>
)

export default IndexPage
