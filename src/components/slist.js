import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function SList() {
  return (
    <StaticQuery
      query={graphql`
      {
        allMdx(
          filter: {fileAbsolutePath: {regex: "/content/slist/"}}
          sort: {fields: frontmatter___flyer___relativeDirectory}
        ) {
          nodes {
            frontmatter {
              flyer {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
      
      `}
      render={data => (
        <div className="rw">
          {
            data.allMdx.nodes.map(node => (
              <GatsbyImage
                className="my-3"
                image={getImage(node.frontmatter.flyer)}
              />
            ))
          }
        </div>
      )}
    />
  )
}