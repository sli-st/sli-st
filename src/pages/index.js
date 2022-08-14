import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import SocialLink from "../components/sociallink"
import ListLink from "../components/listlink"

const IndexPage = ({ data }) => (
  <Layout pageTitle="Home" to="/about/meaning" label="Meaning">
    <Seo title="Home" />
    <nav aria-label="Primary navigation" className=" md:px-28">
      <div className="flex flex-col justify-center gap-10 text-primary ">
        <div class="flex flex-row justify-between border-b border-primary p-4 px-0">
          <SocialLink
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            to="https://instagram.com/sli.st96"
          />
          <SocialLink
            d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"
            to="https://soundcloud.com/slist96"
          />
          <SocialLink
            d="M24 11.779c0-1.459-1.192-2.645-2.657-2.645-.715 0-1.363.286-1.84.746-1.81-1.191-4.259-1.949-6.971-2.046l1.483-4.669 4.016.941-.006.058c0 1.193.975 2.163 2.174 2.163 1.198 0 2.172-.97 2.172-2.163s-.975-2.164-2.172-2.164c-.92 0-1.704.574-2.021 1.379l-4.329-1.015c-.189-.046-.381.063-.44.249l-1.654 5.207c-2.838.034-5.409.798-7.3 2.025-.474-.438-1.103-.712-1.799-.712-1.465 0-2.656 1.187-2.656 2.646 0 .97.533 1.811 1.317 2.271-.052.282-.086.567-.086.857 0 3.911 4.808 7.093 10.719 7.093s10.72-3.182 10.72-7.093c0-.274-.029-.544-.075-.81.832-.447 1.405-1.312 1.405-2.318zm-17.224 1.816c0-.868.71-1.575 1.582-1.575.872 0 1.581.707 1.581 1.575s-.709 1.574-1.581 1.574-1.582-.706-1.582-1.574zm9.061 4.669c-.797.793-2.048 1.179-3.824 1.179l-.013-.003-.013.003c-1.777 0-3.028-.386-3.824-1.179-.145-.144-.145-.379 0-.523.145-.145.381-.145.526 0 .65.647 1.729.961 3.298.961l.013.003.013-.003c1.569 0 2.648-.315 3.298-.962.145-.145.381-.144.526 0 .145.145.145.379 0 .524zm-.189-3.095c-.872 0-1.581-.706-1.581-1.574 0-.868.709-1.575 1.581-1.575s1.581.707 1.581 1.575-.709 1.574-1.581 1.574z"
            to="https://www.reddit.com/user/sli-st"
          />
        </div>
        <ListLink to="/epk#mixtapes" label="Mixtape archive" />
        <ListLink to="/lists" label="Curated entertainment lists" />
        <a href="https://instagram.com/nyc.flyer.girl">NYC Flyers</a>
        <a href="https://facebook.com/groups/cdmxflyers">CDMX Flyers Group</a>
        {/* <Link to="/discounts">Discount Codes</Link> */}
        <div class="">
          <h1>105 Rave Tips</h1>
          <ol reversed="reversed" className="decimal-leading-zero list-decimal">
            <li>
              If you only see videos of the mixer, the dancefloor is empty.
            </li>
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
            <li>
              Don’t trust promoters for anything besides their promotions.
            </li>
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
            <li>
              Drug detox to lower your tolerance before an upcoming event.
            </li>
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
            <li>
              Avoid listening to music you like in miserable environments.
            </li>
            <li>Don’t stay if you’re not enjoying yourself.</li>
            <li>Trust your gut.</li>
          </ol>
        </div>
      </div>
    </nav>
  </Layout>
)
export default IndexPage
