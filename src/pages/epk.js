import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MarkdownWrapper from "../components/markdownwrapper"
import { StaticImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="EPK" to="/mixtapes" label="Mixtapes">
      <Seo title="EPK" />
      <MarkdownWrapper>
        <h1>Press Kit</h1>
        <p>
          <span className="text-primary">Contact:</span>
          <br></br>
          Email: <a href="mailto: s@sli.st">s@sli.st</a>
          <br></br>
          Instagram: <a href="https://instagram.com/sli.st96">@sli.st96</a>
          <br></br>
          WhatsApp: <a href="https://wa.me/12123210632"> +1 212-321-0632</a>
        </p>
        <p>
          <span className="text-primary">Genres:</span> dark ambient, dark
          melodic house and techno, minimal, apocalyptic industrial techno,
          gabber, dnb and other genres but with a darker twist.
        </p>
        <p>
          SLi.ST is going through a darkwave phase. Almost everything he plays
          is deep, dark, and gut twisting - a bit dualistic and subtly euphoric.
          His sets tend to include small shoutouts to unnexpected genres and
          cultures as a reminder that most people have multiple layers: dembow,
          synthwave, psytrance, rock, etc. etc.
        </p>
        <p>
          <span className="text-primary">Mixtapes: </span>
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
        <p>
          <span className="text-primary">Biography: </span>
          <br></br>In March 2021 I was introduced to the underground rave scene
          in NYC. 3 months later I traveled to CDMX and found that the CDMX
          scene was much darker and more intense. In late 2021, I started
          learning how to DJ from one of CDMX's hardest industrial DJs. Within
          the next few months I was invited to play at The Real Under, open for
          B Space at 49 Basan, and also DJ for a few hours at the NIX New Year's
          afterparty.
        </p>
        <p>
          <span className="text-primary">Rider: </span>
          <br></br>
          <ul>
            <li>flyers may use my DJ name and/or logo, but not my face</li>
            <li>1 hour: $750 mxn, 2 hours: $1000; payment right after set</li>
            <li>
              4+ guestlist for local influencers to help promote the event
            </li>
          </ul>
        </p>
        <p>
          <span className="text-primary">Text and Logos: </span>
          <br></br>
          <ul>
            <li>
              The lowercase i and period in "SLi.ST" are very important as they
              reflect the URL of this website
            </li>
            <li>
              if the font can be specified, please use SF Pro Ultrathin, or
              another sans-serif font
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
