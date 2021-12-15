import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import IndexNav from "../components/indexnav"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <section className="row justify-content-center py-5">
      <div className="col-md-8 text-center d-flex flex-column align-items-center text-light pt-5">
        <h1 className="text-center">Title: "not for dancing (in public."</h1>
        <p className="text-center pb-5">
          Same music. Two different sources. The 2nd link is the original wav
          file hosted on Google Drive. It seems to sound better.
        </p>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1170268132&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>

        <iframe
          frameborder="0"
          width="100%"
          height="200"
          src="https://drive.google.com/file/d/1FL9N2FEyCNPTtjxp25CYmmaCd5QksJu9/preview?usp=sharing"
          crossorigin="anonymous"
        ></iframe>
      </div>
    </section>
  </Layout>
)

export default IndexPage
