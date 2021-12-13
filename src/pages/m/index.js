import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SignUpForm from "../../components/signupform"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Members">
      <Seo title="Members" />
      <div className="intro-bg container-fluid pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              <nav className="nav justify-content-between py-3">
                <a className="" aria-current="page" href="/m/perks">
                  Perks
                </a>
                <a className="" href="/m/info">
                  Info
                </a>
              </nav>
              <div className="sticky-top bg-black border-bottom border-primary pb-3">
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
                  <li>@slistcdmx</li>
                  <li>@slist.cdmx</li>
                  <li>@sli.stcdmx</li>
                  <li>@sli.st.cdmx</li>
                  <li>@slistslist</li>
                  <li>@simontechyes</li>
                  <li>@v.o.t.e.x.p.e.d.r.o</li>
                </ol>
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
