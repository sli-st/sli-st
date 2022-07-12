import * as React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import { Script } from "gatsby"

import "./styles.css"
// import "./layout.scss"

const Layout = ({ pageTitle, children, to, label }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <Header to={to} label={label} />
      <main className="pt-5">
        <div className="container">{children}</div>
      </main>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-80661C8JJ3"
        strategy={ScriptStrategy.postHydrate}
      ></Script>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
