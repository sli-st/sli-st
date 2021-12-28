import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Updates">
      <Seo title="Updates" />
      <div className="container">
        <div className="flex justify-center">
          <div className="max-w-prose">
            {data.allMdx.nodes.map(node => (
              <div className="py-3 my-5">
                <Link className="text-centr text-light" to={`/u/${node.slug}`}>
                  <span className=" text-primary">{node.frontmatter.date}</span>
                  <h1>{node.frontmatter.title}</h1>
                </Link>
              </div>
            ))}
            <Footer to="/a" label="About All" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/u/" } }
      sort: { fields: slug, order: DESC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YY-MM-DD")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
        excerpt
      }
    }
  }
`

export default BlogPage
