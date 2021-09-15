import * as React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
