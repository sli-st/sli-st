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

        <p>Learned to mix in CDMX - born and raised in NYC</p>
        <p>
          <span className="text-primary">Genres/styles: </span>darkwave,
          progressive, minimal, melodic, hard, techno
        </p>
        <p>
          Thanks to multiple impromptu casual b2b sessions with some of the most
          well renowned DJs in Mexico, SLi.ST has earned himself a reputation
          for his heavier tastes. Through that reputation, he likes to tease his
          audiences with his dark selection of progressive house and minimal
          techno while slowly creeping in what he's really known for- angry,
          twisting, melodic techno that leaves his listeners feeling cathartic,
          connected, and horny.
        </p>
        <p>
          <span className="text-primary">Bio: </span>
          <br></br>
          SLi.ST began as a mid-mid-life crisis sometime in mid-July'21. After
          finding himself at the right after, he started learning from one of
          the hardest industrial DJs in CDMX (8/28/21). By October 1st, SLi.ST
          was invited to play at The Real Under and open for B Space at 49
          Basan. After some encouragment from local DJs who came to watch him
          play, SLi.ST finally bought a mixer, entered the hyperbolic time
          chamber, and pretty much disapeared from the dancefloors for the next
          few months in order to develop his personal mixing syle.
        </p>
        <p>
          SLi.ST made his "grand reentry" to the scene at the NIX New Year
          afterparty, wiggled in a few hours of mixing time and shocked every
          single raver and DJ. After getting some much appreciated love,
          support, and approval, SLi.ST is finally sliding into a DM near you
          (with his EPK).
        </p>

        <div className="columns-3 gap-4 py-16">
          <a href="/epk/flyer1.png" download>
            <img className="img-fluid" src="/epk/flyer1.png" alt="sflyer1" />
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
        {/* <p>
          NYC born and raised. Arrived in CDMX June 7, '21. Started the SLi.ST
          flyer sharing project mid-July. A common face on the hard techno
          dancefloors, many ravers know him as S----. However, many more know
          him as the relatively anonymous SLi.ST due to his overly personal rave
          stories and bizarre history of community (re)building.
        </p> */}

        {/* <ul>
          <li>
            March 2021: discovered the Colombian influenced dark techno scene in
            NYC and fell in love.
          </li>
          <li>
            July: came to CDMX on a one-way to see if I could find a similar
            scene with plans to go explore more of Mexico after a couple weeks.
          </li>
          <li>
            Discovered a much darker, filthier, and more experimental techno
            scene in CDMX. Fell in love and abandoned all other plans.
          </li>
          <li>
            Started the SLi.ST flyer sharing project anonymously in July.
            Started going to a lot of events and meeting more people (especially
            a lot of DJs whose music tastes I liked).
          </li>
          <li>
            Had a quarter-life crisis and realized I loved the music scene and
            that I also needed to share my personal tastes with the people
            around me so that I could be happy with myself and find inner peace.
          </li>
          <li>
            Started watcing youtube videos on DJing, downloaded some music, and
            basically started telling everyone around me that I was trying to
            become a DJ. Asked friends if I could play b2b with them in order to
            learn from them. (Very casual but very informative).
          </li>
          <li>
            Got my first couple gigs in September and Octobber at "The Real
            Under" and "49 Basan". Organizers liked my taste in dark melodic
            house/techno.
          </li>
          <li>
            January 1st, saw a flyer for a 7am afterparty at NIX. A DJ friend
            asked if I had my USB and if I'd like to play later. I said yes. Got
            to play for a bunch of people who gave me some of the most
            encouraging words ever about my skills and taste in progressive
            house and dark industrial techno. Big confidence boost so I wrote up
            my very first EPK (Jan 3rd).
          </li>
        </ul> */}
        <p></p>
        <p></p>
      </MarkdownWrapper>
    </Layout>
  )
}

export default BlogPage
