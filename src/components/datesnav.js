import * as React from "react"

import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"


// const dates = await graphql(
//   `
//   {
//       allDirectory(filter: {relativeDirectory: {eq: "dates"}}) {
//           edges {
//             node {
//               name
//               relativePath
//             }
//           }
//         }
//     }
// `
// )

// dates.data.allDirectory.edges.forEach(({ node }) => {
//   actions.createPage({
//       path: `/` + node.name,
//       component: path.resolve(`./src/templates/events.js`),
//       context: { slug: node.relativePath }
//   })
// })




//get array of all folders in current month that has atleast one flyer
//turn each name in array into a page and a link




// export const events = graphql
//   `
//   query($slug: String!) {
//     allFile(filter: {relativeDirectory: {eq: $slug}}) {
//       edges {
//         node {
//           name
//           relativeDirectory
//           relativePath
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

var d = new Date();
var currentMonthNum = d.getMonth() + 1;
var nextMonthNum = d.getMonth() + 2;

export default function DatesNav() {
  return (
    <StaticQuery
      query={graphql`
      query dates {
        currentmonth: allDirectory(
          filter: {relativeDirectory: {eq: "dates/currentmonth"}, size: {gt: 64}}
          sort: {order: ASC, fields: name}
        ) {
          edges {
            node {
              name
              size
              relativePath
            }
          }
        }
        nextmonth: allDirectory(
          filter: {relativeDirectory: {eq: "dates/nextmonth"}, size: {gt: 64}}
          sort: {order: ASC, fields: name}
        ) {
          edges {
            node {
              name
              size
              relativePath
            }
          }
        }
      }
      
      `}
      render={data => (
        <nav aria-label="event dates navigation" className="datesnav fixed-top text-danger pt-2 container-fluid shadow-sm bg-primary">
          <div className="row justify-content-center ">
            <div className="col-md-8">
              <div className="d-flex justify-content-between scrolling-wrapper align-items-center" >
                {data.currentmonth.edges.map(({ node }) => (
                  <Link to={"/" + currentMonthNum + "/" + node.name} className="text-danger text-decoration-none">{node.name}</Link>
                )
                )}
                <div>-</div>
                {data.nextmonth.edges.map(({ node }) => (
                  <Link to={"/" + nextMonthNum + "/" + node.name} className="text-danger text-decoration-none">{node.name}</Link>
                )
                )}
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}
