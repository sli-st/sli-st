import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query ($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/blog/" }
      }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
          }
          slug
        }
      }
    }
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={`"${tag}" tag`} />
      <h1>{tagHeader}</h1>
      {edges.map(({ node }) => {
        const { excerpt } = node
        const { title } = node.frontmatter
        const { slug } = node

        return (
          <div key={slug}>
            <Link to={`/${slug}`}>
              <h3>{title}</h3>
            </Link>

            <p>{excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export default Tags
