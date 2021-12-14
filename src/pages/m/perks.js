import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Perks">
      <Seo title="Perks" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              {data.allMdx.nodes.map(node => (
                <div className="row justify-content-around align-items-center g-">
                  <div className="col-4">
                    <GatsbyImage
                      className="border-start border-bottom border-primary"
                      image={getImage(node.frontmatter.flyer)}
                    />
                  </div>

                  <div className="col-8 text-secondary">
                    <div className="border-end border-primary">
                      <MDXRenderer>{node.body}</MDXRenderer>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/perks/" } }
      sort: { fields: frontmatter___flyer___relativeDirectory }
    ) {
      nodes {
        body
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
`

export default BlogPage
