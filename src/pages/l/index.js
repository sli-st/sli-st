import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/Footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="List">
      <Seo title="List" />
      <div className="intro-bg container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              <div className="sticky-top bg-black border-bottom border-primary pb-3">
                <nav className="nav justify-content-between pt-4 pb-2 text-decoration-none">
                  <a
                    className="text-decoration-none lead"
                    aria-current="page"
                    href="/a/a5"
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
                  <a href="https://www.instagram.com/axchacon">axchacon</a>
                  <a href="https://www.instagram.com/b_wxng">b_wxng</a>
                  <a href="https://www.instagram.com/dhiramprzz">dhiramprzz</a>
                  <a href="https://www.instagram.com/elissavinh">elissavinh</a>
                  <a href="https://www.instagram.com/_felix.vazquez_">
                    _felix.vazquez_
                  </a>
                  <a href="https://www.instagram.com/_____hcanyun">
                    _____hcanyun
                  </a>
                  <a href="https://www.instagram.com/_ironboard_">
                    _ironboard_
                  </a>
                  <a href="https://www.instagram.com/nobinari_mx">
                    nobinari_mx
                  </a>
                  <a href="https://www.instagram.com/nos_autem">nos_autem</a>
                  <a href="https://www.instagram.com/v.o.t.e.x.p.e.d.r.o">
                    v.o.t.e.x.p.e.d.r.o
                  </a>
                </nav>
              </div>
            </section>
            <Footer to="/a/a5" label="About" />
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
