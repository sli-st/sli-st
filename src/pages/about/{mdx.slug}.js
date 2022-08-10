import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import MarkdownWrapper from "../../components/textwrapper"

const BlogPost = ({ data }) => {
  return (
    <div className="vh-100">
      <Layout to="/about" label="About all">
        <Seo title={data.mdx.frontmatter.title} />
        <MarkdownWrapper>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </MarkdownWrapper>
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
