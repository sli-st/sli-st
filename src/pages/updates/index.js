import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import MarkdownWrapper from "../../components/markdownwrapper"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Updates" to="/about" label="About All">
      <Seo title="Updates" />
      <MarkdownWrapper>
        {data.allMdx.nodes.map(node => (
          <div className="py-3 my-5">
            <Link to={`/updates/${node.slug}`}>
              <span className="text-[#ff0000]">{node.frontmatter.date}</span>
              <div>{node.frontmatter.title}</div>
            </Link>
          </div>
        ))}
      </MarkdownWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/u/" } }
      sort: { fields: slug, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YY-MM-DD")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
        excerpt
      }
    }
  }
`

export default BlogPage
