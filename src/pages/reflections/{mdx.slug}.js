import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const BlogPost = ({ data }) => {
  return (
    <div className="vh-100">
      <Layout >
        <Seo title={data.mdx.frontmatter.title} />
        <article className="container-fluid bg-primary">
          <div className="row justify-content-center">
            <div className="col-md-7 col-xl-5">
              <div className="row justify-content-center align-items-center sticky-md-top px-0">
                <div className="col-lg-12 sticky-md-top px-0">

                </div>
              </div>
            </div>
            <div className="col-md-7 col-xl-4 pt-3 pb-5 mb-5">
              <h1 className="h6 text-light pt-5 pb-5 border-bottom border-3 border-danger  bg-primary sticky-top">{data.mdx.frontmatter.title}</h1>
              <div className="spacer"></div>
              <div className="text-light pt-5 mt-2 pb-3 ">
                <MDXRenderer>
                  {data.mdx.body}
                </MDXRenderer>
              </div>
            </div>
          </div>
        </article>
        <Footer />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost