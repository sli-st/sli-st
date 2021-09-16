import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Photogrid from "../components/index/photogrid"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CDMX" />
    <Intro />
    <Photogrid />
  </Layout>
)

export default IndexPage
