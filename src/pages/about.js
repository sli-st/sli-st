import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import DatesNav from "../components/datesnav"
import SignUpForm from "../components/signupform"
import ContactLinks from "../components/contactlinks"
import RecentLinks from "../components/recentlinks"
import SList from "../components/slist"

const IndexPage = () => (
  <Layout pageTitle="Index">
    <Seo title="Index" />
    <div className="container-fluid pb-5 mb-5">
      <section className="row justify-content-center pt-5">
        <div className="col-md-5 px-0 text-light">
          <h1 className="">About</h1>
          <p>"SLi.ST" is an umbrella term for multiple projects. The website is divided into 3 main sections (bottom navigation links).</p>
          <p></p>
          <p>The "homepage" is for sharing upcoming events. At the top is a navigation menu to all the flyers I can find sorted by date. I share every flyer that I come across on my feed and my DMs. On the actual homepage I list the events that I am personally looking forward to. This is because I personally like dark techno events and some people like to know what I think are going to be the best events for my particular tastes. I also like to let people know where I'll be. This used to be shared as a story highlight named "S List" as my personal S List of events.</p>
          <p>The link at the bottom right is for listing people who are "on the S list" - a play on being on the guest list. This section is also for displaying offers that are for S List members. The list of members is to attract offers and the offers are meant to attract signups. Members can show proof of their membership at the door for various perks. Event organizers can get special attention on the website for their events by offerring something special. Win win for everyone.</p>
          <p>The link at the bottom left is a bit more personal- it includes contact information, reflections on events I've attended, music I like, community playlists, updates regarding the webite, and my personal progress as a new DJs. It's like a blog, but not too self-centered. It's more for fun and community building.</p>
          <h2>Sharing Philosophy</h2>
          <p>All flyers are accepted on this website. If I find it on my instragram feed or if someone messages me a copy, I will share it here. It is completely free in the spirit of sharing the underground scene with as many interested people as possible. I enjoy the occassional cortesia every now and then, but there is absolutely no exchange for any preferential treatment. This is a public statement so if I am being dishonest it would be very easy to tag me in a story, share some screenshots, and call me out.</p>
          <h2>Goals</h2>
          <p>One of the current goals is to build a large enough members list in order to attract really special offers for events. The theory is that if a person is willing to sign up on this website then they must really be a supporter of the project, and that they trust this website for event related information. In other words, the signup progress self-selects for serious ravers - the type of people event organizers want at their parties. After we hit 100 members on the list, I will ask the community if they would like me to moderate the list. Right now anyone can join. I don't think I should moderate signups, and I don't think there should be tiers. However, many of the major decisions have been left up to the community so far so I will always be open to feedback.</p>
          <p>Some other goals are to connect event organizers in CDMX and NYC, starting a magazine, and a few other bold ideas, but the main goal is to increase viewership and signups.</p>
          <h2>History:</h2>
          <p>SLi.ST, as it is now called, started off as @slistcdmx on Instagram. It started off as an Instagram account (@slistcdmx) for finding, sorting, and sharing event flyers. At first I was simply following every account that I could find that were sharing flyers (DJs, promoters, organizers, etc.) When I realized that some of my friends could also use that information, I started screenshotting every flyer I could find and resharing them as individual posts. That got a bunch of people to follow me. Thanks to some of their comments I started tagging the people on the flyers which helped grow the account pretty quickly.  It began as a project for sharing flyers. Due to rapid growth, rapid sharing, and rapid following, the first account and the 3 or 4 accounts that came after were all suspended. After the 3rd account was taken down, I started working on a website that was simply for directing people to whatever the current "@slist----" handle was being used. Luckily there was enough brand recognition that people were following me back before I even started sharing flyers again. For about 1 month, i stopped sharing flyers while I worked on the website. And at some point I decided to just share the flyers on the website. I figured there was potential for even greater reach with people who weren't using instagram for finding events - (tourists, people searching on google, etc.). I decided to make the website and use social media primarily for sharing the website instead of sharing everything on Instagram. This is to avoid getting flagged by Instagram's automatic spam detectors which are not the best. I only share a few events there - mostly for community building and also for fun. Sometimes I write something and people find it funny. I like the bit of anonymity.</p>
          <p>In September I saw a post from "El Real Under" about their open deck events on Thursdays. I sent them a DM with a description of what I liked to play and they invited me over and asked for my DJ name. Somehow I never decided on a name at that point despite having been practicing for many hours on end. I figured "S List" already had some branding behind it, that some of my closest friends here knew that I was behind the project, and that it was easy enough to pronounce for me to use as my DJ name so I went with S List. Towards the end of September, I was invited to play at one of their events at 49 Basan. It was my first official gig (they put my face on a flyer official). and they asked me for my DJ name. Since this felt a bit more like a real gig I decided to include the "." and remove the space. I figured if anyone in the future was going to google that name they would be able to find the website even if an instagram doesn't exist at the time. Yes, I have ptsd from my accounts getting taken down. That is also when I decided to add a personal section to the website. For that gig I went with SLIST</p>
          <p>The SLi.ST spelling and capitalization came from the play on symmetry and the letter "i" and the use of a dot</p>
        </div>
      </section>
    </div>
  </Layout >
)

export default IndexPage
