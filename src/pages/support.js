import * as React from "react"

import Layout from "../components/layout"

import Seo from "../components/seo"
import Support from "../components/support/support"
import Send from "../components/support/send"
import Perks from "../components/support/perks"
import Materials from "../components/support/materials"
import Share from "../components/support/share"

const SupportPage = () => (
  <Layout>
    <Seo title="SLI.ST Story" />
    <section>
      <Support />
      <Send />
      <Perks />
      <Materials />
      <Share />
    </section>
  </Layout>
)

export default SupportPage
