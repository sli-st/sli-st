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
      <p className="pt-10 text-center text-2xl text-primary">
        More discounts coming soon!
      </p>
      <nav
        aria-label="Primary navigation"
        id="index-nav"
        className="md:px-20 lg:px-20"
      >
        <div className="grid grid-cols-12 gap-8 pt-16 text-xl text-white/[.70]">
          {data.allMdx.nodes.map(node => (
            <div className="group relative col-span-12 mx-8 mb-10 md:col-span-6 md:mx-0 lg:col-span-4 ">
              <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-primary text-xs opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>
              <a
                href={node.frontmatter.link}
                className="relative mx-0 flex w-full items-center divide-x divide-gray-600 rounded-lg bg-background leading-none"
              >
                <div className="grid grid-cols-12 rounded-lg">
                  <GatsbyImage
                    className="border-start border-bottom col-span-12 rounded-t-lg"
                    image={getImage(node.frontmatter.flyer)}
                  />
                  <span className="col-span-12 text-primary transition duration-200 group-hover:text-primary">
                    <div className="rounded-b-xl border-t-4 border-primary bg-black p-3 text-center">
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
