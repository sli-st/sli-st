import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Xperiences">
      <Seo title="Xperiences" />
      <div className="container-fluid pb-5">
        <div className="row justify-content-center g-3 align-items-center mb-5">
          {data.allMdx.nodes.map(node => (
            <div className="col-4 col-sm-3">
              <Link className="flyer-link" to={`/x/${node.slug}`}>
                <GatsbyImage image={getImage(node.frontmatter.hero_image)} />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/x/" } }
      sort: { fields: slug, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
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
