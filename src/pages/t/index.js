import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="About">
      <Seo title="About" />
      <div className="container-fluid pb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5 text-light">
            <h1 className="pt-3 text-center">
              {data.allMdx.totalCount} Rave Tips
            </h1>
            <Link
              to="/a/st"
              className="text-decoration-none pt-2 text-center d-flex justify-content-center text-primary"
            >
              about
            </Link>

            <div className="text-start pt-5">
              <ol reversed="reversed" className="decimal-leading-zero">
                {data.allMdx.nodes.map(node => (
                  <li className="py-1">{node.frontmatter.title}</li>
                ))}
              </ol>
            </div>
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
