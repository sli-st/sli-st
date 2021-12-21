import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/Footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Updates">
      <Seo title="Updates" />
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6">
            {data.allMdx.nodes.map(node => (
              <div className="py-3 my-5">
                <Link
                  className="text-centr text-decoration-none text-light lead"
                  to={`/u/${node.slug}`}
                >
                  <h1 className="lead text-primary">{node.frontmatter.date}</h1>
                  <h1 className="lead">{node.frontmatter.title}</h1>
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
