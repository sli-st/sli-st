import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"

import Seo from "../../components/seo"
import SNavLink from "../../components/snavlink"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Members">
      <Seo title="Members" />
      <div className="intro-bg container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              <div className="sticky-top bg-black border-bottom border-primary pb-3">
                <nav className="nav justify-content-between pt-4 pb-2 text-decoration-none">
                  <a
                    className="text-decoration-none lead"
                    aria-current="page"
                    href="/a/sl"
                  >
                    About
                  </a>
                  <a
                    className="text-primary lead text-decoration-none"
                    href="/l/join"
                  >
                    Join
                  </a>
                </nav>
              </div>

              <div className="">
                <nav className="text-secondary d-flex flex-column mlist">
                  <a href="#">axchacon</a>
                  <a href="#">b_wxng</a>
                  <a href="#">dhiramprzz</a>
                  <a href="#">elissavinh</a>
                  <a href="#">_felix.vazquez_</a>
                  <a href="#">_____hcanyun</a>
                  <a href="#">_ironboard_</a>
                  <a href="#">nobinari_mxL</a>
                  <a href="#">nos_autem</a>
                  <a href="#">slistcdmx</a>
                  <a href="#">slist.cdmx</a>
                  <a href="#">sli.stcdmx</a>
                  <a href="#">sli.st.cdmx</a>
                  <a href="#">slistslist</a>
                  <a href="#">v.o.t.e.x.p.e.d.r.o</a>
                </nav>
              </div>
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
