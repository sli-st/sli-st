const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    {
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  // ...

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
// const path = require("path")

// // Implement the Gatsby API “createPages”. This is called once the
// // data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = async ({ graphql, actions }) => {

//   // Query for markdown nodes to use in creating pages.
//   const dates = await graphql(
//     `
//     query dates{
//       currentmonth: allDirectory(
//         filter: {relativeDirectory: {eq: "dates/currentmonth"}, size: {gt: 64}}
//       ) {
//         edges {
//           node {
//             name
//             relativePath
//           }
//         }
//       }
//       nextmonth: allDirectory(
//         filter: {relativeDirectory: {eq: "dates/nextmonth"}, size: {gt: 64}}
//       ) {
//         edges {
//           node {
//             name
//             relativePath
//           }
//         }
//       }
//     }
//     `
//   )

//   var d = new Date();
//   var currentMonthNum = d.getMonth() + 1;
//   var nextMonthNum = d.getMonth() + 2;

//   dates.data.currentmonth.edges.forEach(({ node }) => {
//     actions.createPage({
//       path: `/` + currentMonthNum + '/' + node.name,
//       component: path.resolve(`./src/templates/events.js`),
//       context: { slug: node.relativePath, currentMonthNum }
//     })
//   })

//   dates.data.nextmonth.edges.forEach(({ node }) => {
//     actions.createPage({
//       path: `/` + nextMonthNum + '/' + node.name,
//       component: path.resolve(`./src/templates/events.js`),
//       context: { slug: node.relativePath, nextMonthNum }
//     })
//   })
// }
