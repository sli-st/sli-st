import * as React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"

import "./styles.css"
// import "./layout.scss"

const Layout = ({ pageTitle, children, to, label }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header to={to} label={label} />
      <main className="theme-dark bg-background text-primary container">
        {children}
      </main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
