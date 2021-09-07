import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Photogrid from "../components/index/photogrid"
import Story from "../components/index/story"
import How from "../components/index/how"
import Share from "../components/index/share"
import Thanks from "../components/index/thanks"
import Sharing from "../components/index/sharing"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="CDMX" />
    <Intro />
    <Photogrid />
    <Story/>
    <Sharing/>
    <Share/>
    <Thanks/>
  </Layout>
)

export default IndexPage
