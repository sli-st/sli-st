import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Intro from "../components/index/intro"
import Photogrid from "../components/index/photogrid"
import Scene from "../components/index/scene"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="SLIST" />
    <Intro />
    <Photogrid />
    <Scene />
  </Layout>
)

export default IndexPage
