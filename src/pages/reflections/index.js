import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    // to="/about/rave-reflections"
    <Layout pageTitle="Reflections" label="About" to="/about/reflections">
      <Seo title="Reflections" />
      <div className="gap-3">
        <div
          className="columns-3 
        "
        >
          {data.allMdx.nodes.map(node => (
            <Link to={`/reflections/${node.slug}`}>
              <GatsbyImage
                image={getImage(node.frontmatter.hero_image)}
                className="mb-[1rem]"
              />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/reflections/" } }
      sort: { fields: frontmatter___date, order: ASC }
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
