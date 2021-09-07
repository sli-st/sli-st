import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"



const How = () => (
  <section className="my-7 py-7">
    <div className="container">
        <div className="row align-items-center justify-content-around">
            
            <div className="col-md-6 col-xl-7 text-md-left lead">
                <h2 className="md-h1 mb-4">How to make your own S List:</h2>
                <ol>
                    <li>start by following atleast 1 DJ/event organizer/promoter</li>
                    <li>follow every relevant account they tag in their posts/stories</li>
                    <li>browse your feeds for event posts and reshare them to your story</li>
                    <li>after "you're all caught up", highlight all your your stories by date</li>
                    <li>re-highlight the most interesting events as a Special List (subjective)</li>
<br/>
                    <li>optional: use your Special List to better plan your nightlife adventures</li>
                    <li>optional: share with friends and/or develop an event sharing community</li>
                    <li>optional: ask your beloved community to spread your project </li>
                    <br/>
                    <li>repeat steps 1-8 as often as you can until you don't want to :c</li>
                </ol>
                <ul>
                    <li>Do this for yourself (finding events) and you will never get tired.</li>
                    <li>Alternate and ice your thumbs.</li>
                    <li>Share for the sake of sharing.</li>
                </ul>
                

            <p className="mt-5">
              My "Special List" highlight is titled "S List". It's to let my friends, and people with similar tastes, know which events I'm looking forward to. I currently
              enjoy raunchy provacative dark techno, experimental music, and
              "unique" events.
            </p>
            <a
              href="https://open.spotify.com/user/z09n91efexts02mucc1kils6z?si=a6Jox2yYTsOzO6nacl-leA&dl_branch=1&nd=1"
              target="_blank"
              className="btn btn-spotify mb-3 mt-lg-1 mb-lg-3 mr-3"
            >
              <FontAwesomeIcon icon={faSpotify} className="mr-2" />
              SlayList™
            </a>
            </div>
            
            <div className="col-md-6 col-xl-4 mb-5">
                <div className="card bg-primary shadow-soft border-light shadow-inset organic-radius1 p-3">
                <StaticImage
            className="gridphoto"
            src="../../images/how.jpg"
            alt="me"
            placeholder="dominantColor"
          />
          
                    
                </div>
            </div>
            
        </div>
    </div>
</section>
)

export default How
