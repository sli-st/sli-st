import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import MarkdownWrapper from "../../components/markdownwrapper"

const BlogPage = ({ data }) => {
  return (
    <Layout
      pageTitle={data.allMdx.totalCount + " Rave Tips"}
      to="/a/a4"
      label="About"
    >
      <Seo
        title={data.allMdx.totalCount + " Rave Tips"}
        description="A constantly updating list of tips and tricks for raving. Brought to you by a frequent raver. There is bound to be at least one tip that is relevant for you."
      />
      <MarkdownWrapper>
        <h1>{data.allMdx.totalCount} Rave Tips</h1>
        <ol reversed="reversed" className="decimal-leading-zero list-decimal">
          {data.allMdx.nodes.map(node => (
            <li className="py-1">{node.frontmatter.title}</li>
          ))}
        </ol>
      </MarkdownWrapper>
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
