import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import DatesNav from "../components/datesnav"
import SignUpForm from "../components/signupform"
import InstagramLink from "../components/instagramlink"
import FlyerButton from "../components/flyerbutton"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <DatesNav />
    <div className="container-fluid text-start py-5 ">
      <section className="row justify-content-center">
        <div className="col-11 col-sm-4 py-3">
          <SignUpForm />
        </div>
      </section>
      <section className="row justify-content-center d-flex py-3">
        <div className="col-11 col-sm-4">
          <p className="text-info text-end">
            <InstagramLink />
          </p>
        </div>
      </section>
      <section className="row justify-content-center">
        <div className="col-11 col-sm-4 pt-3 pb-5 mb-5 text-white">
          <p className="text-success">OCT 21 5am: Big update. Playing with colors. Higher contrast with red. Membership registrations are finally open. New sections. 50+ flyers added today. Analytics looking good. More users everyday. Some people are actually reading some of this stuff xoxo.</p>
          <p>Already recieved some DMs regarding perks and deals for members... but no one has joined the list yet lol! I was a bit afraid of getting stuck in a "chicken and egg situation" (do I first work on getting people to sign-up or try to get perks to attract sign-ups). Looks like I won't have to worry too much about the latter, but the former is probably a bit harder?? </p>
          <p>I'm trying to go for minimalist techno vibes- a stranger approached me at a party on Oct 10th to ask me if I was behind this project and to say that the website looked techno! More features since that convo!</p>
          <p>The "Speed List" page is a WIP list of flyers/events that I'd like to write about. They were initially supposed to be structured, but I wrote the first couple on speed... and a few people have told me that they liked the manic style. I don't like taking speed, but I did enjoy just speed writing whatever came to mind instead of fussing over details, structure, grammar, etc. this is nighlife shit, we do drugs around here, no time for punctuation. only percocets. ive gotten good feedback on my speed humor so yeah... Speed List. All future writings for that page will be written in the same manner- hastily, relatively unedited, unstructured, free written... kind of like (fried) brain dumps.</p>
          <p>The page for displaying membership or "S List Perks" is ready for real content, and so is the username list page. Right now the members page needs to be updated manually, but I'll work on automating it soon.</p>
          <p>The S page is a long WIP. Not sure about the design, but there will be plenty of content. As from the very start, much of this project is for self-entertainment and personal enrichment, and for sharing flyers. I'm still having fun. Maybe more fun than before (just not as often)... but I'll be more active on social media again, so expect some funny comments in your local comment sections. going anonymous again (:</p>
          <p>Proper translations coming at some point after layout and features are finalized. Have fun!</p>
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
