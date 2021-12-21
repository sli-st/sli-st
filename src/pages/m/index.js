import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/Footer"

const IndexPage = () => (
  <Layout pageTitle="Recorded Mixes">
    <Seo title="Recorded Mixes" />
    <div className="container-fluid">
      <div className="row justify-content-center pt-5">
        <div className="col-lg-6 text-center text-light">
          <h1 className="text-center py-4">not for dancing (in public.</h1>

          <p className="text-center pb-5 ">
            I had a falling out with an ex-friend in early 2020 (just before the
            lockdowns). Less than a year later I tried to find her Instagram on
            Google, but instead I found her obituary. I didn't feel like
            dancing, but I took some time to reflect and listen to music we used
            to talk about. TMI.
          </p>

          <iframe
            title="SoundCloud"
            className="mb-5"
            width="100%"
            scrolling="no"
            frameborder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1170268132&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
          <a
            href="https://www.googleapis.com/drive/v3/files/1FL9N2FEyCNPTtjxp25CYmmaCd5QksJu9?alt=media&key=AIzaSyAP4ujJMv90h9GJpoezieXoRLq9NRW9Wzk&v=[.wav]"
            download="not for dancing.png"
            className="pt-5 text-primary text-decoration-none"
          >
            Download Original .WAV
          </a>
          <Footer to="#" label="EPK Coming Soon" />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
