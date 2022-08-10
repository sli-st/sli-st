import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MarkdownWrapper from "../components/textwrapper"
// import { StaticImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="EPK" to="/mixtapes" label="Mixtapes">
      <Seo title="EPK" />
      <MarkdownWrapper>
        <h1>Press Kit</h1>
        <p>
          <br></br>
          Email: <a href="mailto: s@sli.st">s@sli.st</a>
          <br></br>
          Instagram: <a href="https://instagram.com/sli.st96">@sli.st96</a>
          <br></br>
          WhatsApp: <a href="https://wa.me/12123210632"> +1 212-321-0632</a>
        </p>
        <br />
        <p>
          <h2 className="font-bold text-primary">Biography:</h2>
          From Queens NYC, 25, new to techno. Went to his first rave in March
          2021, and then went to CDMX 3 months later. Got addicted to the darker
          sounds after his first weekend. Prompty cancelled all future travel
          plans. By the end of August he was learning from one of CDMX's hardest
          industrial DJs. Within the following month, he was invited to play at
          The Real Under, open for B Space at 49 Basan, and DJ for a few hours
          at the New Year's after party at NIX. Currently trying to collect all
          the gym badges before going back home at the end of 2022.
        </p>
        <br />
        <p>
          <h2 className="font-bold text-primary">Genres:</h2>
          As a DJ, sli.st likes to keep it dark. His interests range from dark
          ambient to apocalyptic gabber, but he also likes to play dembow, pop,
          synthwave, and more- when he can.
        </p>
        <p>
          Even when sli.st plays a seemingly happy track, you can always expect
          to hear some dark element
        </p>
        <br></br>
        <p>
          <h2 className="font-bold text-primary">Mixtapes: </h2>

          <ul>
            <li>
              <Link to="/mixtapes">high quality download links</Link>
            </li>
            <li>
              <a href="soundcloud.com/slist96">SoundCloud</a>
            </li>
          </ul>
        </p>
        <br></br>
        <p>
          <h2 className="font-bold text-primary">Past DJ sets: </h2>
          <Link to="/reflections">Flyers and reflections</Link>
        </p>

        <p>
          <h2 className="font-bold text-primary">Rider: </h2>

          <ul>
            <li>flyers may use my DJ name and/or logo, but not my face</li>
            <li>1 hour: $750 mxn, 2 hours: $1000; payment after set</li>
            <li>
              4+ guestlist for other local influencer friends to help promote
              the event
            </li>
          </ul>
        </p>
        <p>
          As a bonus, I am one of the biggest and most influential promoters of
          the local techno scene through my work as @cdmx.flyer.wey (past
          username). I am more than happy to leverage all my connections to help
          spread the event flyer, and also help sell tickets online (preferably
          with a discount for my followers) - via very agressive social media
          marketing.
        </p>
        <br></br>
        <p>
          <h2 className="font-bold text-primary">Text and Logos: </h2>

          <ul>
            <li>
              "sli.st" should preferably be kept lowercase as it is a reference
              to the URL of this website
            </li>
            <li>
              if the font can be specified, please use Arial, or another
              sans-serif font
            </li>
          </ul>
        </p>
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
      </MarkdownWrapper>
    </Layout>
  )
}

export default BlogPage
