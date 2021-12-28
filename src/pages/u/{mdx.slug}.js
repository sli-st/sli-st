import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"

const BlogPost = ({ data }) => {
  return (
    <div className="vh-100">
      <Layout>
        <Seo title={data.mdx.frontmatter.title} />
        <article className="container">
          <div className="flex justify-center">
            <div className="max-w-prose">
              <h1 className="text-primary pt-3 pb-3 border-b border-primary">
                {data.mdx.frontmatter.title}
              </h1>
              <div className="text-light pt-4">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
              <Footer to="/u" label="All Updates" />
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
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost
