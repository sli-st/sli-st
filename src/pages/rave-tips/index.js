import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={data.allMdx.totalCount + " Rave Tips"}>
      <Seo
        title={data.allMdx.totalCount + " Rave Tips"}
        description="A constantly updating list of tips and tricks for raving. Brought to you by a frequent raver. There is bound to be at least one tip that is relevant for you."
      />
      <div className="container prose dark:prose-invert mx-auto">
        <h1 className="pt-10 text-primary text-5xl ">
          {data.allMdx.totalCount} Rave Tips
        </h1>
        <ol
          reversed="reversed"
          className="decimal-leading-zero list-decimal text-white"
        >
          {data.allMdx.nodes.map(node => (
            <li className="py-1">{node.frontmatter.title}</li>
          ))}
        </ol>
        <Footer to="/a/a4" label="About Rave Tips" />
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
