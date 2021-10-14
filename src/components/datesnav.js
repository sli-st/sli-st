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
        <nav aria-label="event dates navigation" className="datesnav fixed-top text-danger container-fluid shadow-sm bg-primary">
          <div className="row justify-content-center ">
            <div className="col-md-8 d-flex flex-row align-items-center overflow-hidden">
              <Link to="/slist" className="text-danger p-0 m-0 markedbutton">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
              </Link>
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
