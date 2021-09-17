import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Eventrecs from "../components/index/eventrecs"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout className="h-100 overflow-hidden">
    <Seo title="CDMX" />
    <Intro />
    <Eventrecs />
  </Layout>
)

export default IndexPage
