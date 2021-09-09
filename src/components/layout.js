import * as React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
