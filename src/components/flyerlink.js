import * as React from "react"

import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"

const FlyerLink = (props) => (
  <Link to={"/event/" + props.name}>
    <GatsbyImage image={getImage(props)} alt={"fail"}
      className="flyer" />
  </Link>
)

export default IndexPage
