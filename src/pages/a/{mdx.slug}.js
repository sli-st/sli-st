import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const BlogPost = ({ data }) => {
  return (
    <div className="vh-100">
      <Layout>
        <Seo title={data.mdx.frontmatter.title} />
        <article className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-7 col-xl-6 pt-3 pb-5 mb-5">
              <h1 className="h6 text-secondary pt-3 pb-3 border-bottom border-1 border-primary bg-black sticky-top">
                {data.mdx.frontmatter.title}
              </h1>
              <div className="text-light bg-dark pt-4">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
            </div>
          </div>
        </article>
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
