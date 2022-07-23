import * as React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import { Script } from "gatsby"
import { Helmet } from "react-helmet"

import "./styles.css"

const Layout = ({ pageTitle, children, to, label }) => {
  return (
    <div>
      <Helmet>
        <meta property="og:image" content={"https://sli.st/cover.png"} />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:width" content="50" />
      </Helmet>
      <title>{pageTitle}</title>
      <Header to={to} label={label} />
      <main className="pt-5">
        <div className="container">{children}</div>
      </main>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-80661C8JJ3"
        strategy="post-hydrate"
      />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
