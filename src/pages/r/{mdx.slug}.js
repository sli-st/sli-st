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
    <div>
      <Layout>
        <Seo title={data.mdx.frontmatter.title} />
        <div className="container">
          <article className="py-10 max-w-prose prose dark:prose-invert">
            <h1 className="text-primary">{data.mdx.frontmatter.title}</h1>
            <GatsbyImage image={image} className="" />
            <div className="pt-4">
              <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </div>
            <Footer to="/r" label="More Reflections" />
          </article>
        </div>
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
      timeToRead
    }
  }
`

export default BlogPost
