import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import TextWrapper from "../components/textwrapper"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <TextWrapper>
        <p className="text-center">{data.mdx.timeToRead} min read</p>
        <h1 className="text-center">{data.mdx.frontmatter.title}</h1>
        <div className="grid place-items-center">
          <GatsbyImage image={image} />
        </div>

        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </TextWrapper>
    </Layout>
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
