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
          className="dates-nav pt-5 bg-black text-white container-fluid"
        >
          <div className="row justify-content-center">
            <div className="col-sm-6 d-flex justify-content-center overflow-hidden">
              <div className="scrolling-wrapper align-items-center hide-scroll lead">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  class="bi bi-calendar-week"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
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
