import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import MarkdownWrapper from "../../components/markdownwrapper"

const IndexPage = () => (
  <Layout pageTitle="Recorded Mixes" to="/epk" label="EPK Soon~">
    <Seo title="Recorded Mixes" />
    <MarkdownWrapper>
      <h1>not for dancing (in public.</h1>
      <p>
        I had a falling out with an ex-friend just before the lockdowns. Less
        than a year later I tried to find her Instagram on Google, but instead I
        found her obituary. I didn't feel like dancing.
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
          Download Original .WAV
        </a>
      </p>
    </MarkdownWrapper>
  </Layout>
)

export default IndexPage
