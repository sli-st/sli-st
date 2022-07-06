import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Discounts" to="/about/discounts" label="About">
      <Seo title="Discounts" />
      <p className="text-center text-primary text-2xl pt-10">
        More discounts coming soon!
      </p>
      <nav
        aria-label="Primary navigation"
        id="index-nav"
        className="md:px-20 lg:px-20"
      >
        <div className="pt-16 grid grid-cols-12 gap-8 text-xl text-white/[.70]">
          {data.allMdx.nodes.map(node => (
            <div className="col-span-12 md:col-span-6 lg:col-span-4 relative group mx-8 md:mx-0 mb-10 ">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt text-xs "></div>
              <a
                href={node.frontmatter.link}
                className="relative bg-background rounded-lg leading-none flex items-center divide-x divide-gray-600 w-full mx-0"
              >
                <div className="grid grid-cols-12 rounded-lg">
                  <GatsbyImage
                    className="border-start border-bottom col-span-12 rounded-t-lg"
                    image={getImage(node.frontmatter.flyer)}
                  />
                  <span className="col-span-12 text-primary group-hover:text-secondary transition duration-200">
                    <div className="bg-black border-t-4 border-primary text-center p-3 rounded-b-xl">
                      <MDXRenderer>{node.body}</MDXRenderer>
                    </div>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </nav>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/discounts/" } }
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
          link
        }
      }
    }
  }
`

export default BlogPage
