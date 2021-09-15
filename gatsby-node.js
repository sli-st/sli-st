const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {

    // Query for markdown nodes to use in creating pages.
    const dates = await graphql(
        `
        {
            allDirectory(filter: {relativeDirectory: {eq: "dates"}}) {
                edges {
                  node {
                    name
                    relativePath
                  }
                }
              }
          }
    `
    )

    dates.data.allDirectory.edges.forEach(({ node }) => {
        actions.createPage({
            path: `/` + node.name,
            component: path.resolve(`./src/templates/events.js`),
            context: { slug: node.relativePath }
        })
    })
}