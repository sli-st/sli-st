import * as React from "react"
import PropTypes from "prop-types"
import Header from "../components/header"
import { Script } from "gatsby"
import Seo from "../components/seo"
import "./styles.css"
import Footer from "./footer"

const Layout = ({ pageTitle, children, to, label }) => {
  return (
    <div>
      <Seo title={pageTitle} />
      <title>{pageTitle}</title>
      <Header to={to} label={label} />
      <main className="container pt-20 pb-32">
        <div className="flex flex-row place-content-center ">
          <div
            className="prose mx-auto max-w-2xl text-primary prose-headings:pt-16 prose-headings:text-left
     prose-headings:font-normal prose-headings:leading-tight prose-headings:text-primary prose-p:leading-loose prose-a:text-primary md:w-[60vw]"
          >
            {children}
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
