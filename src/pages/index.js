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
    {/* <section className="d-flex justify-content-center py-3 ">
      <div className="d-flex flex-column">
        <Link to="#" className="text-decoration-none">
          <div className="text-center neon-button text-success d-flex justify-content-around py-2 px-3">
            @slistslist
          </div>
        </Link>
      </div>
    </section> */}
    <IndexNav />
  </Layout>
)

export default IndexPage
