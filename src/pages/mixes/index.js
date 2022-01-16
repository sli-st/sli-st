import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import MarkdownWrapper from "../../components/markdownwrapper"

const IndexPage = () => (
  <Layout pageTitle="Recorded Mixes" to="/epk" label="EPK">
    <Seo title="Recorded Mixes" />
    <MarkdownWrapper>
      <section className="pt-24">
        <h1>not for dancing (in public.</h1>
        <p>
          I had a falling out with an ex-friend just before the lockdowns. Less
          than a year later I tried to find her Instagram on Google, but instead
          I found her obituary.
        </p>

        <iframe
          title="SoundCloud"
          className="mb-10"
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
            download original .WAV
          </a>
        </p>
      </section>

      <section className="pt-24">
        <h1>Nod your head. Grit your teeth.</h1>
        <p>
          The purpose of this mix is to take listeners on a high energy journey
          to some really harsh sounds that would otherwise just be considered
          random annoying noises for mental torture. This is also an experiment
          with heavy layering and musical distortion in order to create
          "cathartic contrast" with bits of musical silence.
        </p>

        <iframe
          title="SoundCloud"
          className="mb-10"
          width="100%"
          scrolling="no"
          frameborder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196810608&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <p className="not-prose text-center text-primary">
          <a
            href="https://www.googleapis.com/drive/v3/files/1yHXdPLFJgM8rSBfCu-loz6118mm0FyQr?alt=media&key=AIzaSyAP4ujJMv90h9GJpoezieXoRLq9NRW9Wzk&v=[.wav]"
            download="not for dancing.png"
            className="text-center mx-auto"
          >
            download original .WAV
          </a>
        </p>
      </section>
    </MarkdownWrapper>
  </Layout>
)

export default IndexPage
