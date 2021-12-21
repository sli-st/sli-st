import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="About">
      <Seo title="About" />
      <div className="container-fluid pb-5">
        <div className="row justify-content-center mt-5">
          <div className="col-sm-5 text-light">
            <h1 className="pt-3">About</h1>
            <p className="pt-2">
              "SLi.ST" is my attempt at giving back to the underground rave
              scene. The scene and the music has saved my mental health and I
              want to spread that magic to as many uninitiated people as
              possible. The name is currently shared by multiple subprojects.
              Each of them has their own about page.
            </p>
            <div className="text-start pt-3">
              {data.allMdx.nodes.map(node => (
                <div className="my-3">
                  <Link
                    className="text-centr text-decoration-none text-light lead"
                    to={`/a/${node.slug}`}
                  >
                    <h1 className="lead text-primary">
                      {node.frontmatter.title}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
            <Footer to="/u" label="Updates" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/a/" } }
      sort: { fields: slug, order: ASC }
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
      }
    }
  }
`

export default BlogPage
