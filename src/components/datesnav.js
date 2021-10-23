import * as React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

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
        <nav aria-label="event dates navigation" className="dates-nav sticky-top pt-4 pb-3 bg-black text-white container-fluid">
          <div className="row justify-content-center">
            <div className="col-sm-6 d-flex overflow-hidden">
              <div className="d-none">
                <Link
                  to="/"
                  className="text-white py-1 border-en border-2"

                  activeClassName="nav-active"
                >
                  <FontAwesomeIcon icon={faBookmark} size="2x" rotation={270} />
                </Link>
              </div>
              <div className="scrolling-wrapper align-items-center hide-scroll" >
                {data.currentmonth.edges.map(({ node }) => (
                  <Link
                    to={"/" + currentMonthNum + "/" + node.name}
                    className="text-white text-decoration-none px-3 px-xs-4"
                    activeClassName="nav-active"
                    partiallyActive={true}>
                    {node.name}
                  </Link>
                )
                )}
                <div className="text-light">-</div>
                {data.nextmonth.edges.map(({ node }) => (
                  <Link
                    to={"/" + nextMonthNum + "/" + node.name}
                    className="text-light text-decoration-none px-3 px-xs-4"
                    activeClassName="nav-active"
                    partiallyActive={true}>
                    {node.name}
                  </Link>
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
