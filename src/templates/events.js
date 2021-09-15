import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function EventsList({ data }) {
  const list = data.allFile.edges
  return (
    <Layout>
      <h2 className="pt-7">fail</h2>
      {list.map(({ node }) => (
        <GatsbyImage image={getImage(node)} alt={"fail"} />
      )
      )}


    </Layout>)

}

export const events = graphql
  `
  query($slug: String!) {
    allFile(filter: {relativeDirectory: {eq: $slug}}) {
      edges {
        node {
          name
          relativeDirectory
          relativePath
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`






