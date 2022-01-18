import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import SignUpForm from "../components/signupform"

const IndexPage = () => (
  <Layout pageTitle="List" to="/list" label="List">
    <Seo
      title="Invite"
      description="Secret signup form for the SLi.ST guestlist. Free entry for all participating events. Invite only."
    />
    <div className="pt-5 mx-auto">
      <SignUpForm />
    </div>
  </Layout>
)

export default IndexPage
