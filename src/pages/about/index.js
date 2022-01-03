import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import MarkdownWrapper from "../../components/markdownwrapper"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="About" to="/updates" label="Updates">
      <Seo title="About" />
      <MarkdownWrapper>
        <h1>About SLi.ST</h1>
        <p>
          "SLi.ST" is my attempt at giving back to the underground rave scene.
          The scene and the music has saved my mental health and I want to
          spread that magic to as many uninitiated people as possible. The name
          is currently shared by multiple subprojects. Each of them has their
          own about page.
        </p>
        <nav className="flex flex-col">
          {data.allMdx.nodes.map(node => (
            <Link to={`/about/${node.slug}`}>{node.frontmatter.title}</Link>
          ))}
        </nav>
      </MarkdownWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/about/" } }
      sort: { fields: slug, order: ASC }
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
      }
    }
  }
`

export default BlogPage
