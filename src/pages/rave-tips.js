import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MarkdownWrapper from "../components/textwrapper"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Rave Tips" to="/about/rave-tips" label="About">
      <Seo
        title="Rave Tips"
        description="A constantly updating list of tips and tricks for raving. Brought to you by a frequent raver. There is bound to be at least one tip that is relevant to you."
      />
      <MarkdownWrapper>
        <h1>105 Rave Tips</h1>
        <ol
          reversed="reversed"
          className="decimal-leading-zero list-decimal px-10"
        >
          <li>If you only see videos of the mixer, the dancefloor is empty.</li>
          <li>Share to be shared with.</li>
          <li>Raving with company can be security.</li>
          <li>Raving solo is freedom.</li>
          <li>Going solo is better than going with unwanted company.</li>
          <li>Swiping through Instagram stories is research.</li>
          <li>Research an event to avoid disappointment.</li>
          <li>You’re with you forever and forevermore.</li>
          <li>Shop with purpose.</li>
          <li>Don't be afraid to window shop.</li>
          <li>Try to make your own decisions.</li>
          <li>The future is uncertain by definition.</li>
          <li>Plan your own trip and then see who wants to join you.</li>
          <li>Don’t pretend to like.</li>
          <li>Know your preferred footwear.</li>
          <li>Know thyself and thy moves.</li>
          <li>Rave to rave.</li>
          <li>Drink before if you’re going to drink.</li>
          <li>A list is of people moderately interested.</li>
          <li>Beyond every person is a persona.</li>
          <li>Behind every persona is a person.</li>
          <li>Be, but definitely not less.</li>
          <li>Be, but not more.</li>
          <li>Prep but don’t prepare.</li>
          <li>Don’t trust promoters for anything besides their promotions.</li>
          <li>Follow people with similar tastes for similar discoveries.</li>
          <li>Every artistic decision was/is a decision.</li>
          <li>Pray to yourself, for yourself, if you pray.</li>
          <li>Work on something at all times.</li>
          <li>Fool yourself no more than twice.</li>
          <li>Try to appreciate art and where it came from.</li>
          <li>Give feedback for feedback.</li>
          <li>Hype the dj with your energy/drugs.</li>
          <li>11:11</li>
          <li>Your body creates drugs for your brain.</li>
          <li>Know your body on different drugs/food/emotions.</li>
          <li>Resolve issues when possible.</li>
          <li>Choose spontaneity- spontaneously.</li>
          <li>Try different genres and find the overlap.</li>
          <li>Try to enter for free and spend your savings at the bar.</li>
          <li>Know your strengths.</li>
          <li>Some people just want to hear that you like them.</li>
          <li>Keep your intentions clear.</li>
          <li>Know why you’re going to the party.</li>
          <li>Avoid twerking while your phone is in your back pocket.</li>
          <li>Keep your valuables in your front pockets.</li>
          <li>Share tips.</li>
          <li>Drink water before you go to sleep.</li>
          <li>If drunk, drink water before sleeping.</li>
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
          <li>Don’t dance to music you don't like.</li>
          <li>Going as a large group? Ask for a group discount.</li>
          <li>Wearing a mask is okay.</li>
          <li>Cigarettes increase in value towards the end of a rave.</li>
          <li>You don’t have to be wise.</li>
          <li>It’s almost always wiser to sleep (in hindsight).</li>
          <li>You don’t have to after.</li>
          <li>There’s always an after.</li>
          <li>Beware of DJs who don't seem to care.</li>
          <li>It’s okay to take a break.</li>
          <li>Chugging the cheapest alcohol right before raving is okay.</li>
          <li>Using ear plugs is okay.</li>
          <li>Wearing shades is okay.</li>
          <li>DJs tend to have the best connects.</li>
          <li>Tacha is tacha.</li>
          <li>Some weekends are softer than others.</li>
          <li>Thursdays are generally for disco.</li>
          <li>Bring party favors to parties for random perks.</li>
          <li>Drug detox to lower your tolerance before an upcoming event.</li>
          <li>Consider a nap before raving for more energy.</li>
          <li>Different days of the week are for different crowds.</li>
          <li>"Everything in moderation, including moderation."</li>
          <li>Research the lineup to avoid wasting time.</li>
          <li>Partying completely sober is a valid option.</li>
          <li>Know your tastes.</li>
          <li>Become a music snob to some degree.</li>
          <li>If you frequent a place, regularly tip for random perks.</li>
          <li>If you smoke you can sometimes open invisible doors.</li>
          <li>Consider ear plugs.</li>
          <li>Prioritize protecting your trip.</li>
          <li>Abandon bad afters.</li>
          <li>Figure out which days are best for raving.</li>
          <li>Figure out what kind(s) of nutrients you enjoy raving on.</li>
          <li>Treat foods like drugs.</li>
          <li>Stay awake for hallucinations on a budget.</li>
          <li>1 good event is better than multiple mediocre events.</li>
          <li>Reflect on what's working and what isn't.</li>
          <li>Reflect on your drug experiences.</li>
          <li>Avoid listening to music you like in miserable environments.</li>
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
