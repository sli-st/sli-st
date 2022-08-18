import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Discounts">
      <Seo title="Discounts" />
      <h1>Exclusive Discounts</h1>
      <p class="py-5">
        <a href="https://instagram.com/sli.st96">DM Exclusive Discounts</a>{" "}
        <br />
        <Link to="/discount-tickets-experiment/">About: Discounts</Link>
      </p>
      <h1>Current Discounts</h1>
      <nav>
        <div className="grid grid-cols-12 gap-8">
          {data.current.nodes.map(node => (
            <div className="group relative col-span-12 mb-10 md:col-span-6 md:mx-0 lg:col-span-6 ">
              <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-primary text-xs opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>
              <a
                href={node.frontmatter.link}
                className="relative mx-0 flex w-full items-center divide-x divide-gray-600 rounded-lg bg-background leading-none"
              >
                <div className="flex flex-col rounded-lg">
                  <GatsbyImage
                    className="border-start border-bottom rounded-t-lg"
                    image={getImage(node.frontmatter.flyer)}
                  />
                  <span className=" transition duration-200 group-hover:text-primary">
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
      <h1>Past Discounts</h1>
      <nav>
        <div className="grid grid-cols-12 gap-8 ">
          {data.past.nodes.map(node => (
            <div className="group relative col-span-12 mb-10 md:col-span-6 md:mx-0 lg:col-span-6 ">
              <div className="absolute -inset-0.5 animate-tilt rounded-lg bg-gradient-to-r from-primary to-primary text-xs opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200 "></div>
              <a
                href={node.frontmatter.link}
                className="relative mx-0 flex w-full items-center divide-x divide-gray-600 rounded-lg bg-background leading-none"
              >
                <div className="flex flex-col rounded-lg">
                  <GatsbyImage
                    className="border-start border-bottom rounded-t-lg"
                    image={getImage(node.frontmatter.flyer)}
                  />
                  <span className=" transition duration-200 group-hover:text-primary">
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
    current: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/discounts/" }
        frontmatter: { status: { eq: "current" } }
      }
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
    past: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/content/discounts/" }
        frontmatter: { status: { eq: "past" } }
      }
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
