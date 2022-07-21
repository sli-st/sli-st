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
        <br></br>
        <p>
          <span className="text-primary font-bold">Genres:</span> <br></br>
          dark ambient, dark melodic house and techno, minimal, apocalyptic
          industrial techno, gabber, dnb and other genres but with a darker
          twist.
        </p>
        <p>
          sli.st is going through a darkwave and trancey phase. His sets tend to
          include bits of unnexpected genres and cultural shoutouts as a
          reminder that most people have multiple layers: dembow, synthwave,
          psytechno, rock, etc. etc.
        </p>
        <br></br>
        <p>
          <span className="text-primary font-bold">Mixtapes: </span>
          <br></br>
          <ul>
            <li>
              <Link to="/mixtapes">high quality download links</Link>
            </li>
            <li>
              <a href="soundcloud.com/slistslist">SoundCloud</a>
            </li>
          </ul>
        </p>
        <br></br>
        <p>
          <span className="text-primary font-bold">Biography: </span>
          <br></br>In March 2021 I was introduced to the underground rave scene
          in NYC. 3 months later I traveled to CDMX and found that the CDMX
          scene was much darker and more intense. In late 2021, I started
          learning how to DJ from one of CDMX's hardest industrial DJs. Within
          the next few months I was invited to play at The Real Under, open for
          B Space at 49 Basan, and also DJ for a few hours at the NIX New Year's
          afterparty.
        </p>
        <br></br>
        <p>
          <span className="text-primary font-bold">Rider: </span>
          <br></br>
          <ul>
            <li>flyers may use my DJ name and/or logo, but not my face</li>
            <li>1 hour: $750 mxn, 2 hours: $1000; payment due after set</li>
            <li>
              4+ guestlist for local influencers to help promote the event
            </li>
          </ul>
        </p>
        <br></br>
        <p>
          <span className="text-primary font-bold">Text and Logos: </span>
          <br></br>
          <ul>
            <li>
              "sli.st" should be kept lowercase as it is a reference to the URL
              of this website
            </li>
            <li>
              if the font can be specified, please use Arial, or another
              sans-serif font
            </li>
          </ul>
        </p>
        <div className="grid grid-cols-3 pb-20 not-prose">
          <a href="/epk/black-white.svg" download>
            <img className="img-fluid" src="/epk/black-white.svg" alt="5" />
          </a>
          <a href="/epk/red-black.svg" download>
            <img className="img-fluid" src="/epk/red-black.svg" alt="2" />
          </a>
          <a href="/epk/white-red.svg" download>
            <img className="img-fluid" src="/epk/white-red.svg" alt="4" />
          </a>
          <a href="/epk/white-black.svg" download>
            <img className="img-fluid" src="/epk/white-black.svg" alt="3" />
          </a>
          <a href="/epk/black-red.svg" download>
            <img className="img-fluid" src="/epk/black-red.svg" alt="6" />
          </a>
          <a href="/epk/red-white.svg" download>
            <img className="img-fluid" src="/epk/red-white.svg" alt="1" />
          </a>
        </div>
      </MarkdownWrapper>
    </Layout>
  )
}

export default BlogPage
