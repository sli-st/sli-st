import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/about/intro"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CDMX" />
    <Intro />
  </Layout>
)

export default IndexPage
