import * as React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

var d = new Date()
var currentMonthNum = d.getMonth() + 1
var nextMonthNum = d.getMonth() + 2

export default function DatesNav() {
  return (
    <StaticQuery
      query={graphql`
        query dates {
          currentmonth: allDirectory(
            filter: {
              relativeDirectory: { eq: "dates/currentmonth" }
              size: { gt: 64 }
            }
            sort: { order: ASC, fields: name }
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
            filter: {
              relativeDirectory: { eq: "dates/nextmonth" }
              size: { gt: 64 }
            }
            sort: { order: ASC, fields: name }
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
        <nav
          aria-label="event dates navigation"
          className="dates-nav sticky-top pt-4 pb-3 bg-black text-white container-fluid"
        >
          <div className="row justify-content-center pt-1">
            <div className="col-sm-6 d-flex justify-content-center overflow-hidden">
              <div className="scrolling-wrapper align-items-center hide-scroll lead">
                {data.currentmonth.edges.map(({ node }) => (
                  <Link
                    to={"/" + currentMonthNum + "/" + node.name}
                    className="text-white text-decoration-none px-3 px-xs-4"
                    activeClassName="nav-active"
                    partiallyActive={true}
                  >
                    {node.name}
                  </Link>
                ))}
                <div className="text-light">-</div>
                {data.nextmonth.edges.map(({ node }) => (
                  <Link
                    to={"/" + nextMonthNum + "/" + node.name}
                    className="text-light text-decoration-none px-3 px-xs-4"
                    activeClassName="nav-active"
                    partiallyActive={true}
                  >
                    {node.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      )}
    />
  )
}
