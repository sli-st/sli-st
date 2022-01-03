import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import Header from "../../components/header"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Reflections" to="/about/rave-reflections" label="About">
      <Seo title="Reflections" />
      <div className="columns-3 md:columns-4 gap-3">
        {data.allMdx.nodes.map(node => (
          <Link className="" to={`/r/${node.slug}`}>
            <GatsbyImage
              image={getImage(node.frontmatter.hero_image)}
              className="mb-[1rem]"
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/r/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY, MMMM, D ")
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
