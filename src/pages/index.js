import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout pageTitle="Index">
    <Seo title="Index" />

    <nav
      aria-label="Primary navigation"
      id="index-nav"
      className="fixed-botto container"
    >
      <div className="row justify-content-center">
        <div className="col-md-9 col-lg-5">
          <section className="row d-flex justify-content-center mt-3">
            <div className="d-flex flex-column">
              <a
                href="https://www.instagram.com/slistxmas/"
                className="col text-decoration-none"
              >
                <div className="neon-button text-primary py-2 fs-4 d-flex justify-content-center ">
                  FLYERS {"->"} IG @slistxmas
                </div>
              </a>
            </div>
          </section>
          <section className="row justify-content-center mt-3">
            <div className="col-4">
              <div className="row d-flex justify-content-between flex-column">
                <div className="col-12">
                  <Link to="/u/" className="bg-primary">
                    <StaticImage
                      src="../images/index/news.png"
                      alt="A kitten"
                    />
                  </Link>
                </div>
                <div className="col-12 pt-4">
                  <Link to="/m">
                    <StaticImage
                      src="../images/index/recorded.png"
                      alt="A kitten"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <a
              href="/"
              className="col-8 red-tint1 d-flex justify-content-center align-items-center"
            >
              <Link to="/r/" className="col">
                <StaticImage
                  src="../images/index/sflyer1.jpeg"
                  alt="A kitten"
                />
              </Link>
            </a>
          </section>

          <section className="row justify-content-center mt-3">
            <Link to="/r/" className="col">
              <StaticImage src="../images/index/x.png" alt="A kitten" />
            </Link>
            <Link to="/l/" className="col text-decoration-none ">
              <span className="w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="border border-primary text-primary px-3 fs-3">
                  LIST
                </div>
              </span>
            </Link>
            <Link to="/f/" className="col text-decoration-none text-center">
              <StaticImage src="../images/index/fire.png" alt="A kitten" />
            </Link>
          </section>

          <section className="row justify-content-center mt-3">
            <Link
              to="https://us5.list-manage.com/survey?u=ffa00e0e7d456f08048753fe5&id=d2d82c8053&attribution=false"
              className="col text-cente d-flex align-items-center text-decoration-none"
            >
              <span className="w-100 h-100 d-flex align-items-center justify-content-center border\ border-light border-start-0">
                <div className="text-primary text-center">
                  Anonymous Feedback <br></br>Form
                </div>
              </span>
            </Link>
            <Link to="/a/" className="col border-warning">
              <StaticImage src="../images/index/i.svg" alt="A kitten" />
            </Link>

            <Link
              to="/t/"
              className="col text-cente d-flex align-items-center text-decoration-none"
            >
              <span className="w-100 h-100 d-flex align-items-center justify-content-center border\ border-light border-start-0">
                <div className="text-primary text-center fs-1 d-flex flex-column">
                  <span>{data.allMdx.totalCount}</span>
                </div>
              </span>
            </Link>
          </section>
          <setion className></setion>
        </div>
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
