import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import DatesNav from "../components/datesnav"
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



export default function EventsList({ data }) {
  const list = data.allFile.edges
  return (
    <Layout>
      <DatesNav />
      <div className="container-fluid pb-5 intro-bg d-flex flex-column">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row justify-content-center">
              {list.map(({ node }) => (

                <div className="col-3">
                  <Zoom>
                    <GatsbyImage image={getImage(node)} alt={"fail"}
                    />
                  </Zoom>
                </div>

              )
              )}

            </div>
          </div>
        </div>
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






