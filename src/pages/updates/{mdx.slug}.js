import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import MarkdownWrapper from "../../components/markdownwrapper"

const BlogPost = ({ data }) => {
  return (
    <Layout to="/updates" label="All Updates">
      <Seo title={data.mdx.frontmatter.title} />
      <MarkdownWrapper>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MarkdownWrapper>
    </Layout>
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
