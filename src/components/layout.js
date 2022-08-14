import * as React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import { Script } from "gatsby"
import Seo from "../components/seo"
import "./styles.css"
import TextWrapper from "./textwrapper"
import Footer from "./footer"

const Layout = ({ pageTitle, children, to, label }) => {
  return (
    <div>
      <Seo title={pageTitle} />
      <title>{pageTitle}</title>
      <Header to={to} label={label} />
      <main className="container pt-20 pb-32">
        <div className="flex flex-row place-content-center ">
          <div className="md:w-[60vw]">
            <TextWrapper>{children}</TextWrapper>
          </div>
        </div>
      </main>
      <Footer />

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
