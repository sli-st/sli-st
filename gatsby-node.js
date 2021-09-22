const path = require("path")

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions }) => {

  // Query for markdown nodes to use in creating pages.
  const dates = await graphql(
    `
    query dates{
      currentmonth: allDirectory(
        filter: {relativeDirectory: {eq: "dates/currentmonth"}, size: {gt: 64}}
      ) {
        edges {
          node {
            name
            relativePath
          }
        }
      }
      nextmonth: allDirectory(
        filter: {relativeDirectory: {eq: "dates/nextmonth"}, size: {gt: 64}}
      ) {
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

  var d = new Date();
  var currentMonthNum = d.getMonth() + 1;
  var nextMonthNum = d.getMonth() + 2;

  dates.data.currentmonth.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/` + currentMonthNum + '/' + node.name,
      component: path.resolve(`./src/templates/events.js`),
      context: { slug: node.relativePath, currentMonthNum }
    })
  })

  dates.data.nextmonth.edges.forEach(({ node }) => {
    actions.createPage({
      path: `/` + nextMonthNum + '/' + node.name,
      component: path.resolve(`./src/templates/events.js`),
      context: { slug: node.relativePath, nextMonthNum }
    })
  })
}