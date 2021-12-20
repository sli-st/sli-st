import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={data.allMdx.totalCount + " Rave Tips"}>
      <Seo title={data.allMdx.totalCount + " Rave Tips"} />
      <div className="container-fluid pb-5">
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
          </div>
        </div>
      </div>
      <footer className="d-flex align-items-center flex-column pt-4 pb-5">
        <Link to="/a/st" className=" text-decoration-none">
          <div className="text-primary px-3">about rave tips</div>
        </Link>
        <Link to="/" className=" text-decoration-none pt-4">
          <div className="border border-primary text-primary px-3 fs-3">
            SLi.ST
          </div>
        </Link>
      </footer>
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
