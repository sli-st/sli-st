import * as React from 'react'
import Layout from '../components/layout'
import Seo from "../components/seo"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import SignUpForm from "../components/signupform"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Perks" >
      <Seo title="Perks" />
      <div className="container-fluid pb-5 mb-5">
        <div className="row justify-content-center sticky-top">
          <div className="col-md-5">
            <nav className="bg-black pt-3 pb-3 border-bottom border-primary">
              <div className="nav nav-justified gap-2 mx-auto d-md-flex justify-content-md-center" id="nav-tab" role="tablist">
                <button className="nav-link btn btn-outline-light " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Perks</button>
                <button className="nav-link btn btn-outline-light text-decoration-none active text-light" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Members</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              <div className="tab-content mx-auto pt-2" id="nav-tabContent">
                <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><section>
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
                <div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <section>
              <div className="sticky-top bg-black border-bottom border-primary py-3">
                <SignUpForm />
              </div>
              <div className="pt-3" id="nav-tabContent">
                <ol className="text-secondary text-end">
                  <li>@_____hcanyun</li>
                  <li>@_felix.vazquez_</li>
                  <li>@_ironboard_</li>
                  <li>@axchacon</li>
                  <li>@b_wxng</li>
                  <li>@dhiramprzz</li>
                  <li>@elissavinh</li>
                  <li>@nobinari_mxL</li>
                  <li>@nos_autem</li>
                  <li>@simontechyes</li>
                  <li>@v.o.t.e.x.p.e.d.r.o</li>
                  <li>@slistcdmx</li>
                  <li>@slist.cdmx</li>
                  <li>@sli.stcdmx</li>
                  <li>@sli.st.cdmx</li>
                  <li>@slistslist</li>
                </ol>
              </div>
            </section>
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
