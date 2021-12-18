import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Reflections">
      <Seo title="Reflections" />
      <div className="container-fluid">
        <div className="row justify-content-center g-3 align-items-center">
          {data.allMdx.nodes.map(node => (
            <div className="col-4 col-sm-3">
              <Link className="flyer-link" to={`/r/${node.slug}`}>
                <GatsbyImage image={getImage(node.frontmatter.hero_image)} />
              </Link>
            </div>
          ))}
          <div className="col-4 col-sm-3 d-flex justify-content-center ">
            <Link
              to="/a/sr"
              className="text-decoration-none text-center fs-3 border border-primary p-5"
            >
              <div>About</div>
              <div>These</div>
              <div>Reflections</div>
            </Link>
          </div>
          <div className="col-4 col-sm-3">
            <Link to="/">
              <StaticImage
                src="../../images/logo.jpeg"
                alt="A kitten"
                className=""
              />
            </Link>
          </div>
        </div>
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
