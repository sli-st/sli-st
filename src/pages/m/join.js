import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import SignUpForm from "../../components/signupform"

const IndexPage = () => (
  <Layout pageTitle="Info">
    <Seo title="Info" />
    <div className="container-fluid pb-5 mb-5">
      <section className="row justify-content-center pt-5">
        <div className="col-md-5 px-0 text-light">
          <SignUpForm id="join" />
          <h1 className="">Info</h1>
          <p>
            More info to be be added about the membership as more people sign
            up. Expect infrequent emails.
          </p>
          <h2>Conditions</h2>
          <ul class="text-light">
            <li>
              monetary perks such as discounts, cortesias, and presale prices
              can not expire and must be redeemable for the entire duration of
              an event
            </li>
            <li>
              consumable perks must be redeemable while supplies last (shots,
              tacos, coffee)
            </li>
            <li>
              your IG username needs to be on the list in order for you to
              redeem a perk
            </li>
            <li>
              opening the social media profile while logged in is proof of
              membership
            </li>
            <li>all members have access to all current and future perks</li>
            <li>this is a lifetime membership with no tiers</li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage
