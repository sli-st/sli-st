import { Link } from "gatsby"
import * as React from "react"
import MixtapeLink from "./mixtapelink"

const Mixtapes = ({ d, to, href, label }) => {
  return (
    <div>
      <nav aria-label="Primary navigation" id="mixtapes" className="">
        <h1>Mixtapes</h1>

        <MixtapeLink
          number="6"
          // date="2022-06-01"
          description="synthwave, minimal, apocalytpic gabber, psytechno"
          aiff="https://drive.google.com/file/d/1dvQ13OGK1HT5vXy8_FNvCcLEN1S2cFvi/view?usp=sharing"
          mp3="https://drive.google.com/file/d/10V-wUIuQ0C6kwhNJo1fUQVDNL3xtc5uw/view?usp=sharing"
        />
        <MixtapeLink
          number="5"
          // date="2022-03-17"
          description="dark house, minimal, apocalyptic, synthwave"
          aiff="https://drive.google.com/file/d/1WWFLS8E7Ke-oNBvor0T_29VU00KmjjZk/view?usp=sharing"
          mp3="https://drive.google.com/file/d/1hz26ha9wUZ3dE7-b9P41qrxR6pZrdrRb/view?usp=sharing"
        />
        <MixtapeLink
          number="4"
          // date="2022-03-05"
          description="fast apocalyptic melodies (160+)"
          aiff="https://drive.google.com/file/d/1jtAFAzX4aD53qqZNy4zMz8pvCHgx1w55/view?usp=sharing"
          mp3="https://drive.google.com/file/d/1hTHZTeBN2w-mwWsJ7sUsP-HQcRrrdLHI/view?usp=sharing"
        />
        <MixtapeLink
          number="3"
          // date="2022-01-22"
          description="dark melodic house and a bit of italo"
          aiff="https://drive.google.com/file/d/1333GtfPOVqpv0fPmAAcE_Aam4EB8nj13/view?usp=sharing"
          mp3="https://drive.google.com/file/d/11eYHSl_fNiBaF7RKdKQdGaf9AGX2XCV-/view?usp=sharing"
        />
        <MixtapeLink
          number="2"
          // date="2022-01-14"
          description="dark trance techno, industrial techno classics,"
          aiff="https://drive.google.com/file/d/1al35OnHFS77CWm6QLomkhvwSrkjYBr_P/view?usp=sharing"
          mp3="https://drive.google.com/file/d/1ikEeCqyuV9tqIJPdopaGxUxrpd60fReO/view?usp=sharing"
        />
        <MixtapeLink
          number="1"
          // date="2021-12-01"
          description="dark tech house, minimal, synthwave"
          aiff="https://drive.google.com/file/d/1WRM6cCxQc2oQajg-JCuYTZPSIWzVqqnc/view?usp=sharing"
          mp3="https://drive.google.com/file/d/10CWCnm9gMIy6vh__t8JTY5LrMaULovB5/view?usp=sharing"
        />

        <div className="flex flex-col gap-4 pb-10 text-center">
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1227248851&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1170268132&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
          <iframe
            width="100%"
            height="166"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1206940834&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </nav>
      {/* <p class="text-center">
        <a
          className=" border border-white p-4 text-center text-primary"
          href="https://soundcloud.com/slist96"
        >
          SoundCloud
        </a>
      </p> */}
    </div>
  )
}

export default Mixtapes
