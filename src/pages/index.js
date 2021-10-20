import * as React from "react"

import Layout from "../components/layout"
import DatesNav from "../components/datesnav"
import Intro from "../components/index/intro"
import Footer from "../components/footer"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CDMX" />
    <div className="vh-100 d-flex justify-content-between flex-column">
      <DatesNav />
      <Intro />
      <div></div>
    </div>
    <Footer />
  </Layout >
)

export default IndexPage
