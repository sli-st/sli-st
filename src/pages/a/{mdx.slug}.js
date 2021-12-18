import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPost = ({ data }) => {
  return (
    <div className="vh-100">
      <Layout>
        <Seo title={data.mdx.frontmatter.title} />
        <article className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-7 col-xl-6 pt-3">
              <h1 className="h6 text-secondary pt-3 pb-3 border-bottom border-1 border-primary bg-black sticky-top">
                {data.mdx.frontmatter.title}
              </h1>
              <div className="text-light bg-dark pt-4">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
            </div>
          </div>
        </article>
        <footer className="d-flex align-items-center flex-column pt-4 pb-5">
          <Link to="/" className=" text-decoration-none">
            <div className="text-primary px-3">About Index</div>
          </Link>
          <Link to="/" className=" text-decoration-none pt-4">
            <div className="border border-primary text-primary px-3 fs-3">
              SLi.ST
            </div>
          </Link>
        </footer>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default BlogPost
