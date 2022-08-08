import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MarkdownWrapper from "../components/markdownwrapper"
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
          <span className="font-bold text-primary">Biography:</span>
          <br />
          25 and from NYC, and embarassingly new to techno. Went to his first
          rave in March'21. Arrived in CDMX on June'21 and got addicted to the
          darker sounds after his first weekend. Prompty cancelled all future
          travel plans. By the end of August he was learning from one of the
          hardest industrial DJs in CDMX. Within the following month, he was
          invited to play at The Real Under, open for B Space at 49 Basan, and
          DJ for a few hours at the New Year's after party at NIX. Currently
          trying to collect all the gym badges before going back home at the end
          of 2022.
        </p>
        <br />
        <p>
          <span className="font-bold text-primary">Genres:</span> <br></br>
          variety of electronic genres but almost exclusively the darker
          variants: ambient, melodic techno, minimal, industrial acid,
          apocalyptic gabber, a few seemingly random genres like dembow, pop,
          synthwave, and rock.
        </p>
        <p>
          sli.st is currently going through a dark tech house, speedy minimal,
          and apocalyptic industrial phase. His sets are fun, bouncy, but always
          dark. He usually likes to sprinkle some different genres before taking
          his audiences on a deep dive into some truly dark cathartic melodies.
        </p>
        <br></br>
        <p>
          <span className="font-bold text-primary">Mixtapes: </span>
          <br></br>
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
          <span className="font-bold text-primary">Past DJ sets: </span>
          <Link to="/reflections">Flyers and reflections</Link>
        </p>
        <br />
        <p>
          <span className="font-bold text-primary">Rider: </span>
          <br></br>
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
          <span className="font-bold text-primary">Text and Logos: </span>
          <br></br>
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
