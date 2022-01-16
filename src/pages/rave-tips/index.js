import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import MarkdownWrapper from "../../components/markdownwrapper"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="102 Rave Tips" to="/about/rave-tips" label="About">
      <Seo
        title="102 Rave Tips"
        description="A constantly updating list of tips and tricks for raving. Brought to you by a frequent raver. There is bound to be at least one tip that is relevant for you."
      />
      <MarkdownWrapper>
        <h1>102 Rave Tips</h1>
        <ol reversed="reversed" class="decimal-leading-zero list-decimal ">
          <li>
            Try to find recent footage of an event on social media if you're
            unsure about an event.
          </li>
          <li>You’re with you forever and forevermore.</li>
          <li>Shop shop.</li>
          <li>Window shop.</li>
          <li>Always decide.</li>
          <li>Never know.</li>
          <li>96% is knowing.</li>
          <li>94% is okay.</li>
          <li>
            Take yourself on your own journeys and then see who wants to join
            you.
          </li>
          <li>Don’t pretend to like.</li>
          <li>Know your preferred footwear.</li>
          <li>Know thyself and thy moves.</li>
          <li>Rave to rave.</li>
          <li>Drink before if you’re going to drink.</li>
          <li>A list is of people interested.</li>
          <li>Beyond every person is a persona.</li>
          <li>Behind every persona is a person.</li>
          <li>Be, but definitely not less.</li>
          <li>Be, but not more.</li>
          <li>Prep but don’t prepare.</li>
          <li>Don’t trust promoters for anything besides their promotions. </li>
          <li>Follow people with similar tastes for similar discoveries. </li>
          <li>Every artistic decision is a decision.</li>
          <li>Pray to yourself, for yourself… if pray.</li>
          <li>Work on something at all times.</li>
          <li>Fool yourself no more than twice.</li>
          <li>Try to appreciate art and where it came from.</li>
          <li>Give feedback for feedback</li>
          <li>Hype the dj with your energy/drugs</li>
          <li>11:11</li>
          <li>Your body creates drugs for your brain.</li>
          <li>Know your body on different drugs/food/emotions.</li>
          <li>Resolve issues when possible.</li>
          <li>Choose spontaneity spontaneously.</li>
          <li>Try different genres and find the overlap.</li>
          <li>Try to enter for free and spend your savings at the bar.</li>
          <li>Know your strengths.</li>
          <li>Some people just want to hear that you like them.</li>
          <li>Keep your intentions clear. </li>
          <li>Know why you’re going to the party.</li>
          <li>Avoid twerking while your phone is in your back pocket.</li>
          <li>Keep your valuables in your front pocket.</li>
          <li>Share tips.</li>
          <li>Drink water, if you can, before you go to sleep.</li>
          <li>
            Assume you will be hungover and take precautions before sleeping.{" "}
          </li>
          <li>Don’t exchange money on the dance floor.</li>
          <li>Don’t share it in the open.</li>
          <li>Bribe the bar to bring in a bottle.</li>
          <li>Barter.</li>
          <li>The price of a drug does not reflect quality.</li>
          <li>The entry cover does not reflect quality.</li>
          <li>51. Drink more water than alcohol.</li>
          <li>You can't know what’s in any drug without testing.</li>
          <li>Rugs that smell bad can still be very strong.</li>
          <li>Beware of drinking too much water.</li>
          <li>Consider raving on an empty stomach.</li>
          <li>Not planning everything is okay.</li>
          <li>Bringing snacks is okay.</li>
          <li>Vote with your energy.</li>
          <li>Don’t encourage bad mixing.</li>
          <li>Don’t dance to bad music.</li>
          <li>
            If you’re going as a large group, consider negotiating for a
            discount before heading out.
          </li>
          <li>Wearing a mask is okay.</li>
          <li>Cigarettes increase in value towards the end.</li>
          <li>You don’t have to be wise.</li>
          <li>It’s almost always wiser to sleep (in hindsight).</li>
          <li>You don’t have to after.</li>
          <li>There’s always an after.</li>
          <li>Beware of DJs who don't seem to care.</li>
          <li>It’s okay to take a break.</li>
          <li>
            Chugging the cheapest alcohol right before entering the rave is
            okay.
          </li>
          <li>Using ear plugs is okay.</li>
          <li>Wearing shades is okay.</li>
          <li>DJs tend to have the best connects.</li>
          <li>Tacha is tacha.</li>
          <li>Some weekends are softer than others.</li>
          <li>Thursdays are generally for disco.</li>
          <li>
            25. Bring party favors or energy to every party for random perks.
          </li>
          <li>
            Consider detoxes to lower your tolerance before an upcoming event.
          </li>
          <li>Consider sleeping in order to better enjoy raving.</li>
          <li>Figure out which days of the week are for which crowds.</li>
          <li>'Everything in moderation, including moderation.'</li>
          <li>Research the lineup to avoid wasting time.</li>
          <li>Partying completely sober is a valid option.</li>
          <li>Know your tastes.</li>
          <li>Become a music snob to some degree.</li>
          <li>
            If you frequent a place, consider tipping as a bribe for random
            perks.
          </li>
          <li>If you smoke you can sometimes open invisible doors.</li>
          <li>Consider ear plugs.</li>
          <li>Prioritize protecting your trip.</li>
          <li>Abandon bad afters.</li>
          <li>Figure out which days are best for raving.</li>
          <li>Figure out what kind(s) of nutrients you enjoy raving on.</li>
          <li>Treat foods like drugs.</li>
          <li>
            If you stay awake long enough, you can have intense hallucinations.
          </li>
          <li>
            Going to 1 good event is better than multiple mediocre events.
          </li>
          <li>Reflect on what's working and what isn't.</li>
          <li>Reflect on your drug experiences.</li>
          <li>
            Avoid listening to your favorite music in miserable environments.
          </li>
          <li>Reflect on your drug experiences.</li>
          <li>Don’t stay if you’re not enjoying yourself.</li>
          <li>Trust your gut.</li>
        </ol>
      </MarkdownWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/content/t/" } }
      sort: { fields: slug, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
        }
        slug
      }
      totalCount
    }
  }
`

export default BlogPage
