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
            <div className="col-span-12 mb-10 md:col-span-6 md:mx-0 lg:col-span-6 ">
              <a
                href={node.frontmatter.link}
                className="relative mx-0 flex w-full flex-col no-underline"
              >
                <GatsbyImage
                  image={getImage(node.frontmatter.flyer)}
                  class="rounded-t-md"
                />
                <div className="not-prose font-bolder rounded-b-md bg-[red] py-2 text-center text-base text-black">
                  <MDXRenderer>{node.body}</MDXRenderer>
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
            <div className="col-span-12 mb-10 md:col-span-6 md:mx-0 lg:col-span-6 ">
              <a
                href={node.frontmatter.link}
                className="relative mx-0 flex w-full flex-col no-underline"
              >
                <GatsbyImage
                  image={getImage(node.frontmatter.flyer)}
                  class="rounded-t-md"
                />
                <div className="not-prose font-bolder rounded-b-md bg-[red] py-2 text-center text-base text-black">
                  <MDXRenderer>{node.body}</MDXRenderer>
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
