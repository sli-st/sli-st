import * as React from "react"
import PropTypes from "prop-types"

import "./styles.css"
// import "./layout.scss"

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <main className="theme-dark bg-background text-primary h-100">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
