import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ListLink from "../components/listlink"
import kebabCase from "lodash/kebabCase"

const BlogPage = ({
  data: {
    allMdx: { group, nodes },
  },
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <h1>Blog</h1>

      <nav className="p8-10 flex justify-around gap-8 pb-20 text-center ">
        Tags:
        {group.map(({ fieldValue, totalCount }) => (
          <Link key={fieldValue} to={`/tags/${kebabCase(fieldValue)}`}>
            {fieldValue}
          </Link>
        ))}
      </nav>
      <nav aria-label="Primary navigation" id="index-nav">
        <div className="flex flex-col justify-center gap-8 text-primary ">
          {nodes.map(node => (
            <ListLink to={`/${node.slug}`} label={node.frontmatter.title} />
          ))}
        </div>
      </nav>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      nodes {
        frontmatter {
          title
          date(formatString: "MMM DD YYYY")
          tags
        }
        slug
      }
    }
  }
`

export default BlogPage
