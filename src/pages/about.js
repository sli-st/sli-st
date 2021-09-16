import * as React from "react"

import Layout from "../components/layout"
import Intro from "../components/about/intro"
import Story from "../components/about/story"
import Share from "../components/about/share"
import Thanks from "../components/about/thanks"
import Leads from "../components/about/leads"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="About" />
    <Story />
    <Leads />
    <Share />
    <Thanks />
  </Layout>
)

export default IndexPage
