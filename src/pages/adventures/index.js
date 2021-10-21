import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Footer from "../../components/footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Adventures" >
      <div className="container-full pb-5">
        <div className="row justify-content-center g-0">
          <div className="col-11 col-md-8 rerow d-flex flex-wrap flex-row justify-content-center align-items-center p-0">
            {
              data.allMdx.nodes.map(node => (
                <Link className="flyer-link" to={`/adventures/${node.slug}`}>
                  <GatsbyImage
                    image={getImage(node.frontmatter.hero_image)}

                  />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <Footer />
    </Layout >
  )
}

export const query = graphql`
  query {
      allMdx(
        filter: {fileAbsolutePath: {regex: "/content/adventures/"}}
        sort: {fields: slug, order: DESC}
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