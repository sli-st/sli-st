import * as React from "react"
import PropTypes from "prop-types"
import Footer from "../components/footer"

import "./layout.scss"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main className="bg-black">{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
