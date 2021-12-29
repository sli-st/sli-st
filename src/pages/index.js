import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import ThemeToggle from "../components/themeToggle"

const IndexPage = ({ data }) => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <nav
      aria-label="Primary navigation"
      id="index-nav"
      className="container md:px-80 xl:px-96 xl:mx-20 pt-4 h-screen"
    >
      <a
        href="https://www.instagram.com/slistxmas/"
        className="mb-10 text-decoration-none"
      >
        <div className="neon-button text-primary py-1.5 w-full text-center">
          FLYERS {"->"} IG @slistxmas
        </div>
      </a>
      <div className="pt-5 grid grid-cols-3 gap-5">
        <Link to="#" className="col-span-1">
          <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
        </Link>
        <Link to="#" className="col-span-1">
          <StaticImage src="../images/index/sflyer2.jpeg" alt="A kitten" />
        </Link>
        <Link to="#" className="col-span-1">
          <StaticImage src="../images/index/flyer2.png" alt="A kitten" />
        </Link>

        <Link to="/r/" className="col-span-1">
          <StaticImage src="../images/index/x.png" alt="A kitten" />
        </Link>
        <Link
          to="/rave-tips/"
          className="d-flex grid aspect-square border border-primary"
        >
          <span className="place-self-center">
            <div className="text-primary text-center text-xl d-flex flex-column px-5">
              <span>{data.allMdx.totalCount} Rave Tips</span>
            </div>
          </span>
        </Link>
        <Link
          to="/rave-guides/"
          className="d-flex grid aspect-square border border-primary"
        >
          <span className="place-self-center">
            <div className="text-primary text-center text-xl d-flex flex-column px-5">
              <span>Rave Guide</span>
            </div>
          </span>
        </Link>
        <Link
          to="/rave-rants/"
          className="d-flex grid aspect-square border border-primary"
        >
          <span className="place-self-center">
            <div className="text-primary text-center text-xl d-flex flex-column px-5">
              <span>Rave Rants</span>
            </div>
          </span>
        </Link>
        <Link to="/l/" className="col text-decoration-none col-span-1 grid">
          <div className="place-self-center">
            <div className="text-xl border border-primary text-primary py-1 px-4">
              LIST
            </div>
          </div>
        </Link>

        <Link
          to="https://us5.list-manage.com/survey?u=ffa00e0e7d456f08048753fe5&id=d2d82c8053&attribution=false"
          className="text-center no-underline grid"
        >
          <span className="place-self-center">
            <div className="text-primary text-center text-xl">
              Anonymous Feedback Form
            </div>
          </span>
        </Link>
        <Link to="/m">
          <StaticImage src="../images/index/recorded.png" alt="A kitten" />
        </Link>
        <ThemeToggle />
        <Link to="/a/">
          <StaticImage src="../images/index/i.svg" alt="A kitten" />
        </Link>
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
