import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import IndexNav from "../components/indexnav"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />

    <IndexNav />
  </Layout>
)

export default IndexPage
