import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import DatesNav from "../components/datesnav"
import Footer from "../components/footer"


export default function EventsList({ data }) {
  const list = data.allFile.edges
  return (
    <Layout>
      <DatesNav />
      <div className="container-fluid pb-5 intro-bg d-flex flex-column">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {list.map(({ node }) => (
              <GatsbyImage image={getImage(node)} alt={"fail"}
                className="flyer" />

            )
            )}
          </div>
        </div>
        <Footer />
      </div>

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






