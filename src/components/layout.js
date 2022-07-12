import * as React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import { Script } from "gatsby"
import { Partytown } from "@builder.io/partytown/react"

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
        src={`https://www.googletagmanager.com/gtag/js?id=G-80661C8JJ3`}
        strategy="off-main-thread"
        forward={[`gtag`]}
      />
      <Script id="gtag-config" strategy="off-main-thread">
        {`
    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', G-80661C8JJ3, { send_page_view: false })
  `}
      </Script>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
