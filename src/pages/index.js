import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Photogrid from "../components/index/photogrid"
import Story from "../components/index/story"
import Share from "../components/index/share"
import Thanks from "../components/index/thanks"
import Leads from "../components/index/leads"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CDMX" />
    <Intro />
    <Photogrid />
    <Leads />
    <Story />
    <Share />
    <Thanks />
  </Layout>
)

export default IndexPage
