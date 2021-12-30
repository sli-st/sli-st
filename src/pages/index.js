import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ThemeToggle from "../components/themeToggle"
import Header from "../components/header"

const IndexPage = ({ data }) => (
  <Layout pageTitle="Index" to="/about" label="About">
    <Seo title="Index" />
    
    <nav
      aria-label="Primary navigation"
      id="index-nav"
      className="md:px-70 lg:mx-60 xl:px-80 xl:mx-5 text-primary text-center"
    >
      <div className="py-5 grid grid-cols-3 gap-4">
      <Link to="#">
          <StaticImage src="../images/index/black.png" alt="A kitten" />
        </Link>
        
        <Link
          to="https://us5.list-manage.com/survey?u=ffa00e0e7d456f08048753fe5&id=d2d82c8053&attribution=false"
          className="grid neon-button"
        >
          <div className="px-2 place-self-center">
              Anonymous Feedback Form
            </div>
        </Link>
        <Link to="/r/" >
          <StaticImage src="../images/index/x.png" alt="A kitten" />
        </Link>
        <Link
          to="/rave-tips/"
          className="grid neon-button"
        >
          <div className="place-self-center px-2">
              {data.allMdx.totalCount} <br></br>Rave Tips
            </div>
        </Link>
        <Link to="/support">
          <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
        </Link>
        <Link
          to="/rave-guides/"
          className="grid neon-button"
        >
          <span className="place-self-center">
            <div className="px-2 ">
              <span>Pro <br></br>Rave Guides</span>
            </div>
          </span>
        </Link>
        <Link to="/list/" className="col grid">
          <div className="place-self-center">
            <div className="text-xl border border-primary py-1 px-4">
              LIST
            </div>
          </div>
        </Link>
        <Link
          to="/rave-rants/"
          className="grid neon-button"
        >
          <span className="place-self-center">
            <div className="px-2">
              Rave Rants & Rambles
            </div>
          </span>
        </Link>
        <Link to="/mixes" >
          <StaticImage src="../images/index/recorded.png" alt="A kitten" />
        </Link>
        <a
        href="https://www.instagram.com/slistxmas/"
        className="col-span-3 no-underline pt-5"
      >
        <div className="neon-button text-primary py-2 w-full text-2xl md:text-3xl">
          FLYERS {"->"} IG @slistxmas
        </div>
      </a>
      </div>
      
      
    </nav>
    
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/t/" } }
      sort: { fields: slug, order: DESC }
    ) {
      totalCount
    }
  }
`
