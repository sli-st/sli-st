import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Footer from "../../components/footer"
import { StaticImage } from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="List" >
      <div className="intro-bg container-fluid pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <section>
              <nav className="bg-primary sticky-top pt-3 pb-3 border-bottom border-danger">
                <div className="nav nav-justified gap-2 mx-auto d-md-flex justify-content-md-center  " id="nav-tab" role="tablist">
                  <button className="nav-link btn btn-outline-danger active text-danger" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Perks</button>
                  <button className="nav-link btn btn-outline-danger text-danger text-decoration-none" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Members</button>
                </div>

              </nav>
              <div className="tab-content mx-auto pt-5" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><section>
                  {
                    data.allMdx.nodes.map(node => (
                      <div className="row justify-content-around align-items-center py-1 g-0">
                        <div className="col-3 col-md-4  py-3 px-2 text-center">
                          <GatsbyImage
                            image={getImage(node.frontmatter.flyer)}

                          /></div>

                        <div className="col-8 col-md-7 text-danger"><MDXRenderer>
                          {node.body}
                        </MDXRenderer></div>
                      </div>
                    ))
                  }
                  <div className="row justify-content-center g-0">
                    <div className="col-11 col-md-8 rerow d-flex flex-wrap flex-row justify-content-center align-items-center p-0">

                    </div>
                  </div>
                </section></div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                  <div className="d-flex justify-content-center">
                    <div className="">
                      <ol className="text-danger">
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                        <li>@socialmediahhandle</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>



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
