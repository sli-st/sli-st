import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import { graphql } from "gatsby"
import SimpleReactLightbox from 'simple-react-lightbox'
import { SRLWrapper } from "simple-react-lightbox"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function EventsList({ data }) {
  const list = data.allFile.edges
  return (
    <Layout pageTitle="Flyers by date" >
      <Seo title="Flyers by date" />
      <DatesNav />
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="container py-5">
            <div className="row justify-content-center g-3 align-items-center mb-5">
              <div className="col-sm-8">
                <div className="row">
                  {list.map(({ node }) => (
                    <div className="col-4">
                      <GatsbyImage image={getImage(node)} alt={"fail"} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Layout >)
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
          publicURL
        }
      }
    }
  }
`