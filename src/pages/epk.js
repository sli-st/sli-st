import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MarkdownWrapper from "../components/markdownwrapper"
import { StaticImage } from "gatsby-plugin-image"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="EPK" to="/mixes" label="Recorded Mix">
      <Seo title="EPK" />
      <MarkdownWrapper>
        <h1>SLi.ST - Press Kit</h1>
        <p>
          <span className="text-primary">Real name: </span>Simon Howlader
        </p>
        <p>
          <span className="text-primary">Contact:</span>
          <br></br>
          Instagram #1: <a href="https://instagram.com/slistxmas">@slistxmas</a>
          <br></br>
          Instagram #2:{" "}
          <a href="https://instagram.com/simontechyes">@simontechyes</a>
          <br></br>
          WhatsApp: <a href="https://wa.me/12123210632"> +1 212-321-0632</a>
        </p>

        <p>From NYC - Taught by CDMX</p>
        <p>
          <span className="text-primary">Genres/styles: </span>dark wave,
          progressive, minimal, melodic, hard, rave, techno
        </p>
        <p>
          Due to his dancefloor presence at many of the hardest dark techno
          events of 2021, and a bunch of casual b2b sessions with some of the
          most prominent DJs in CDMX, SLi.ST has earned himself a reputation for
          his heavier tastes. With that expectation in mind, he likes to tease
          his audiences with his dark selection of progressive house and minimal
          techno while slowly creeping in what he's really known for- angry,
          twisting, melodic techno that leaves his listeners cathartic,
          connected, and horny.
        </p>
        <p>
          <span className="text-primary">Biography: </span>
          <br></br>
          "SLi.ST" began as a quarter-life crisis sometime in July'21. After
          inviting himself to the right afters, he started learning from one of
          the hardest industrial DJs in CDMX (8/28/21). By October 1st, SLi.ST
          was invited to play at The Real Under, and open for B Space at 49
          Basan. Thanks to some positive responses from local DJs who came to
          hear him play, SLi.ST finally got a mixer, entered the hyperbolic time
          chamber, and pretty much disappeared from the dancefloors for the next
          few months in order to develop his personal mixing syle.
        </p>
        <p>
          SLi.ST reentered the underground scene on New Year's Day at the NIX
          New Year's afterparty. With a bit of persistance, SLi.ST managed to
          wiggle in a few hours of mixing and shocked every single raver and DJ.
          After recieving some much appreciated love, support, and approval,
          SLi.ST is finally sliding into a DM near you (with his EPK).
        </p>

        <div className="columns-3 gap-4 py-16">
          <a href="/epk/flyer1.png" download>
            <img className="img-fluid" src="/epk/flyer1.PNG" alt="sflyer1" />
          </a>
          <a href="/epk/flyer2.jpg" download>
            <img className="img-fluid" src="/epk/flyer2.jpg" alt="sflyer2" />
          </a>
          <a href="/epk/flyer3.jpg" download>
            <img className="img-fluid" src="/epk/flyer3.jpg" alt="sflyer2" />
          </a>
          <a href="/epk/logo.svg" download>
            <img className="img-fluid" src="/epk/logo.svg" alt="sflyer1" />
          </a>
          <a href="/epk/pic2.jpeg" download>
            <img className="img-fluid" src="/epk/pic2.jpeg" alt="sflyer1" />
          </a>
          <a href="/epk/pic3.jpg" download>
            <img className="img-fluid" src="/epk/pic3.jpg" alt="sflyer1" />
          </a>
        </div>
        <iframe
          title="SoundCloud"
          className="pt-10"
          width="100%"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1170268132&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <p className="not-prose text-center text-primary">
          <a
            href="https://www.googleapis.com/drive/v3/files/1FL9N2FEyCNPTtjxp25CYmmaCd5QksJu9?alt=media&key=AIzaSyAP4ujJMv90h9GJpoezieXoRLq9NRW9Wzk&v=[.wav]"
            download="not for dancing.png"
            className="text-center mx-auto"
          >
            Download Original .WAV
          </a>
        </p>
        <p className="text-center pt-10">
          Came here on a dare. Stayed for dark techno.
        </p>
        <p className="text-center pb-20 text-primary">Let's sweat.</p>
      </MarkdownWrapper>
    </Layout>
  )
}

export default BlogPage
