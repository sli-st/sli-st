import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Updates">
      <Seo title="Updates" />
      <div className="container-fluid pb-5">
        <div className="row justify-content-center mb-5 ">
          <div className="col-12 col-sm-6">
            {data.allMdx.nodes.map(node => (
              <div className="py-3 my-5">
                <h1 className="lead">{node.frontmatter.date}</h1>
                <h1 className="lead text-primary">{node.frontmatter.title}</h1>
                <Link
                  className="text-centr text-decoration-none text-light lead"
                  to={`/tt/${node.slug}`}
                ></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/tt/" } }
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
