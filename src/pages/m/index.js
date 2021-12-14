import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import SignUpForm from "../../components/signupform"
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
                <nav className="nav justify-content-between py-3">
                  <a className="" aria-current="page" href="/m/perks">
                    Perks
                  </a>
                  <a className="" href="#join">
                    Join
                  </a>
                </nav>
              </div>

              <div className="pt-3">
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
                  <a href="#">simontechyes</a>
                  <a href="#">v.o.t.e.x.p.e.d.r.o</a>
                  <a href="#">nobinari_mxL</a>
                  <a href="#">nos_autem</a>
                  <a href="#">simontechyes</a>
                  <a href="#">v.o.t.e.x.p.e.d.r.o</a>
                  <a href="#">nobinari_mxL</a>
                  <a href="#">nos_autem</a>
                  <a href="#">simontechyes</a>
                  <a href="#">v.o.t.e.x.p.e.d.r.o</a>
                </nav>
              </div>
              <div id="join">
                <SignUpForm id="join" />
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
