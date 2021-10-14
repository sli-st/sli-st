import * as React from "react"

import Layout from "../components/layout"
import DatesNav from "../components/datesnav"
import Intro from "../components/index/intro"
import Footer from "../components/footer"
import Eventrecs from "../components/index/eventrecs"


import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CDMX" />
    <div className="vh-100 d-flex flex-column justify-content-center bg-primary">
      <DatesNav />
      <Intro />
      {/* <Eventrecs /> */}
      <Footer />
    </div>

  </Layout>
)

export default IndexPage
