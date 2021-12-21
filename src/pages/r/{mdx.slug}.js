import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <div className="vh-100">
      <Layout>
        <Seo title={data.mdx.frontmatter.title} />
        <article className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-7 col-xl-5">
              <div className="row justify-content-center align-items-center sticky-md-top px-0">
                <div className="col-lg-12 sticky-md-top pb-3 px-0">
                  <GatsbyImage image={image} className="img-fluid" />j
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xl-4 pt-3">
              <h1 className="h6 text-secondary pt-3 pb-3 border-bottom border-1 border-primary bg-black sticky-top">
                {data.mdx.frontmatter.title}
              </h1>
              <div className="text-light bg-dark pt-4">
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
              </div>
              <Footer to="/r" label="More Reflections" />
            </div>
          </div>
        </article>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
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
