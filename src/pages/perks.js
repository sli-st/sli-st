import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Footer from "../components/footer"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Perks" >
      <div className="container-fluid pb-5 mb-5">
        <div className="row justify-content-center sticky-top">
          <div className="col-md-5">
            <nav className="bg-black pt-3 pb-3 border-bottom border-primary">
              <div className="nav nav-justified gap-2 mx-auto d-md-flex justify-content-md-center" id="nav-tab" role="tablist">
                <button className="nav-link btn btn-outline-secondary active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Perks</button>
                <button className="nav-link btn btn-outline-secondary text-decoration-none" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Conditions</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              <div className="tab-content mx-auto pt-2" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><section>
                  {
                    data.allMdx.nodes.map(node => (
                      <div className="row justify-content-around align-items-center py-3">
                        <div className="col-4">
                          <GatsbyImage
                            className="border-start border-bottom border-primary"
                            image={getImage(node.frontmatter.flyer)}
                          /></div>

                        <div className="col-8 text-secondary">
                          <div className="border-end border-primary">
                            <MDXRenderer>{node.body}</MDXRenderer>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                  <div className="row justify-content-center g-0">
                    <div className="col-11 col-md-8 rerow d-flex flex-wrap flex-row justify-content-center align-items-center p-0">

                    </div>
                  </div>
                </section></div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <ul className="text-light">
                    <li>perks can only be redeemed by members on the list</li>
                    <li>monetary perks such as discounts, cortesias, and presale prices do not expire and are valid for the entire duration of an event</li>
                    <li>opening the socialmedia profile while logged-in is proof of membership</li>
                    <li>proof of membership is the only thing required to redeem a perk</li>
                    <li>all members have access to all current and future perks</li>
                    <li>event promoters have special access to member's attention</li>
                  </ul>
                </div>
              </div>
            </section>



          </div>
        </div>
      </div>
    </Layout >
  )
}

export const query = graphql`
query {
  allMdx(
    filter: {fileAbsolutePath: {regex: "/content/perks/"}}
    sort: {fields: frontmatter___flyer___relativeDirectory}
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
