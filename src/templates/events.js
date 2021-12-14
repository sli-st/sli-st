import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import { graphql } from "gatsby"
import SimpleReactLightbox from "simple-react-lightbox"
import { SRLWrapper } from "simple-react-lightbox"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const options = {
  settings: {
    overlayColor: "rgba(0, 0, 0, 0.9)",
    autoplaySpeed: 0,
    transitionSpeed: 200,
    disablePanzoom: true,
  },
  buttons: {
    backgroundColor: "#000",
    iconColor: "rgb(255, 0, 0)",
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showThumbnailsButton: false,
  },
  caption: {
    showCaption: false,
  },
}

export default function EventsList({ data }) {
  const list = data.allFile.edges
  return (
    <Layout pageTitle="Flyers">
      <Seo title="Flyers" />
      <DatesNav />
      <SimpleReactLightbox>
        <SRLWrapper options={options}>
          <div className="container-fluid">
            <div className="row justify-content-center my-5 pb-5">
              <div className="col-sm-8">
                <div className="row g-3 justify-content-center align-items-center pb-5">
                  {list.map(({ node }) => (
                    <div className="col-4">
                      <GatsbyImage image={getImage(node)} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
    </Layout>
  )
}

export const events = graphql`
  query($slug: String!) {
    allFile(filter: { relativeDirectory: { eq: $slug } }) {
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
