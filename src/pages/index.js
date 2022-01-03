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
      className="md:px-70 lg:mx-60 xl:px-80 xl:mx-5 text-primary text-center uppercase"
    >
      <div className="py-5 grid grid-cols-3 gap-4">
        <Link to="instagram.com/slistxmas">
          <StaticImage src="../images/index/igqr.png" alt="A kitten" />
        </Link>

        <Link
          to="https://us5.list-manage.com/survey?u=ffa00e0e7d456f08048753fe5&id=d2d82c8053&attribution=false"
          className="grid neon-button"
        >
          <div className="px-2 place-self-center">Share Feedback</div>
        </Link>
        <Link to="/r/">
          <StaticImage src="../images/index/x.png" alt="A kitten" />
        </Link>
        <Link to="/rave-tips/" className="grid neon-button">
          <div className="place-self-center px-2">
            {data.allMdx.totalCount} <br></br>Rave Tips
          </div>
        </Link>
        <Link to="/support">
          <StaticImage src="../images/index/sflyer1.jpeg" alt="A kitten" />
        </Link>
        <Link to="/rave-guides/" className="grid neon-button">
          <span className="place-self-center">
            <div className="px-2 ">
              <span>Rave Guides</span>
            </div>
            coming soon
          </span>
        </Link>

        <Link to="/mixes">
          <StaticImage src="../images/index/recorded.png" alt="A kitten" />
        </Link>
        <Link to="/rave-rants/" className="grid neon-button">
          <span className="place-self-center">
            <div className="px-2">Rave Rants</div>
            coming soon
          </span>
        </Link>
        <Link to="/list/">
          <StaticImage src="../images/index/m.jpeg" alt="A kitten" />
        </Link>
        <div class="py-3 col-span-3 ">
          <div class="grid gap-8 items-start justify-center">
            <div class="relative group ">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-secondary to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Link class="relative px-7 py-4 bg-background rounded-lg leading-none flex items-center divide-x divide-gray-600 w-full mx-0">
                <span class="flex items-center space-x-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="text-primary fill-primary stroke-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>

                  <span class="pr-6 text-secondary">Upcoming Event Flyers</span>
                </span>
                <span class="pl-6 text-primary group-hover:text-gray-100 transition duration-200">
                  @slistxmas &rarr;
                </span>
              </Link>
            </div>
          </div>
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
