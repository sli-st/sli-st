import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/Footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={data.allMdx.totalCount + " Rave Tips"}>
      <Seo title={data.allMdx.totalCount + " Rave Tips"} />
      <div className="container-fluid">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5 text-light">
            <h1 className="pt-3 text-center">
              {data.allMdx.totalCount} Rave Tips
            </h1>

            <div className="text-start pt-5">
              <ol reversed="reversed" className="decimal-leading-zero">
                {data.allMdx.nodes.map(node => (
                  <li className="py-1">{node.frontmatter.title}</li>
                ))}
              </ol>
            </div>
            <Footer to="/a/a4" label="About Rave Tips" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/t/" } }
      sort: { fields: slug, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
        }
        slug
      }
      totalCount
    }
  }
`

export default BlogPage
