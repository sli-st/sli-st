import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Mixtapes from "../components/mixtapes"
import Gigs from "../components/gigs"
import { graphql } from "gatsby"
import FlyerWeySection from "../components/flyerweysection"

// import { StaticImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="EPK">
      <Seo title="EPK" />
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
        <li>DJ Name: sli.st</li>
        <li>Age: 25</li>
        <li>From: NYC, Bengali roots, CDMX DJ</li>
      </ul>
      <p>
        sli.st is a <span class="font-bold">dark </span>
        electronic DJ. From lofi to gabber, he keeps it
        <span class="font-bold"> dark</span>. Happy music makes him physically
        uncomfortable. His sets sometimes feature "random" genres like dembow,
        europop, or Japanese trap - but only the
        <span class="font-bold"> darker </span>
        variants.
      </p>

      <Mixtapes />
      <Gigs data={data} />

      <FlyerWeySection />
      <h1>Rider</h1>
      <ul>
        <li>1 hour: $750 mxn, 2 hours: $1000; payment after set</li>
        <li>
          4+ guestlist for local influencer friends to help promote the event
        </li>
      </ul>
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
