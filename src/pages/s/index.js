import * as React from "react"
import Layout from "../../components/layout"

import Seo from "../../components/seo"
import SNavLink from "../../components/snavlink"


const Me = () => (
  <Layout pageTitle="S">
    <Seo title="S" />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-8 col-md-4 d-flex flex-column">
          <div className="text-center neon-button my-5">SLi.ST</div>
        </div>
        
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-8 col-md-5 d-flex flex-column">
          
          <nav className="d-flex flex-column pb-5 my-5">
            <SNavLink to="/s/mixes/">mixes</SNavLink>
            <SNavLink to="/adventures/">adventures</SNavLink>
            <SNavLink to="/s/release-notes/">release notes</SNavLink>
            <a href="https://instagram.com/slistxmas" className="text-center text-decoration-none pt-3 text-light lead mb-5 border border-primary border-bottom-0">@slistxmas</a>
            <SNavLink to="/s/">special thanks (coming soon)</SNavLink>
            <SNavLink to="/s/">visual medias (coming soon)</SNavLink>
          </nav>
        </div>
        
      </div>
    </div>
  </Layout>
)

export default Me