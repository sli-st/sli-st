import { Link } from "gatsby"
import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdx(
            limit: 2000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { eq: "gig" } } }
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
      `}
      render={data => (
        <div>
          <h1>Appearances</h1>
          <div className="gap-3">
            <div
              className="md:columns-3 
        "
            >
              {data.allMdx.nodes.map(node => (
                <Link to={`/${node.slug}`}>
                  <GatsbyImage
                    image={getImage(node.frontmatter.hero_image)}
                    className="mb-[1rem]"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  )
}
