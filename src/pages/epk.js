import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import TextWrapper from "../components/textwrapper"
import EPKlink from "../components/epklink"
import ListLink from "../components/listlink"
import Mixtapes from "../components/mixtapes"
import Gigs from "../components/gigs"
// import { StaticImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="EPK" to="/mixtapes" label="Mixtapes">
      <Seo title="EPK" />
      <TextWrapper>
        <h1>Press Kit</h1>
        <p>
          Email: <a href="mailto: s@sli.st">s@sli.st</a>
          <br />
          Instagram: <a href="https://instagram.com/sli.st96">@sli.st96</a>
          <br />
          WhatsApp: <a href="https://wa.me/12123210632"> +1 212-321-0632</a>
        </p>

        <h1>Biography</h1>
        <ul>
          <li>Name: Simon Howlader</li>
          <li>Age: 25</li>
          <li>NYC born and raised, Bengali roots</li>
        </ul>
        <p>
          sli.st is a <span class="font-bold">dark </span>
          electronic DJ. From lofi to gabber, he only plays
          <span class="font-bold"> dark</span>. Happy music makes him physically
          uncomfortable. His sets sometimes feature "random" genres like dembow,
          europop, and synthwave - but always the
          <span class="font-bold"> darker </span>
          variants.
        </p>

        <div id="mixtapes">
          <Mixtapes />
        </div>

        <Gigs data={data} />
        <p>
          sli.st was first introduced to the rave scene in March 2021. In June
          he travelled to CDMX and, after a few weeks of intense raving, sli.st
          started an online community to help map out the local rave scene. 2
          months later he was learning from one of CDMX's hardest industrial
          DJs. Over the next few months he was invited to play at The Real
          Under, open for B Space at 49 Basan, and DJ for a few hours at the New
          Year's after party at NIX.
        </p>
        <p>
          Through his online community, sli.st has become one of the most
          influential niche curators of the CDMX dark techno scene. When sli.st
          hears about a party he believes in, he agressively helps spread the
          word.
        </p>

        <div className="gap-4 md:columns-3">
          <img className="img-fluid" src="/epk/green.jpg" alt="black-white" />
          <img
            className="img-fluid"
            src="/epk/reddrink.jpg"
            alt="black-white"
          />
          <img
            className="img-fluid"
            src="/epk/greendrink.jpg"
            alt="black-white"
          />
          <img className="img-fluid" src="/epk/braids.jpg" alt="black-white" />
          <img
            className="img-fluid"
            src="/epk/chillcig.jpg"
            alt="black-white"
          />
          <img className="img-fluid" src="/epk/twocigs.jpg" alt="black-white" />
        </div>

        <h1>Rider: </h1>
        <ul>
          <li>1 hour: $750 mxn, 2 hours: $1000; payment after set</li>
          <li>
            4+ guestlist for other local influencer friends to help promote the
            event
          </li>
        </ul>

        <h1>Text and Logo Preferences: </h1>
        <ul>
          <li>
            "sli.st" should be spelled with the period and kept lowercase as it
            is a reference to the URL of this website
          </li>
          <li>Arial font, standard spacing</li>
        </ul>

        <div className="not-prose grid grid-cols-4 pb-20">
          <a href="/epk/white-black.svg" download>
            <img
              className="img-fluid"
              src="/epk/white-black.svg"
              alt="white-black"
            />
          </a>
          <a href="/epk/gray-white.svg" download>
            <img
              className="img-fluid"
              src="/epk/gray-white.svg"
              alt="gray-white"
            />
          </a>
          <a href="/epk/gray-black.svg" download>
            <img
              className="img-fluid"
              src="/epk/gray-black.svg"
              alt="gray-black"
            />
          </a>
          <a href="/epk/black-white.svg" download>
            <img
              className="img-fluid"
              src="/epk/black-white.svg"
              alt="black-white"
            />
          </a>
        </div>
      </TextWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/reflections/" } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY, MMMM, D ")
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
        excerpt
      }
    }
  }
`

export default BlogPage
