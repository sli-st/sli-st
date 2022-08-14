import * as React from "react"

const FlyerWeySection = ({ d, to, href, label }) => {
  return (
    <div>
      <div class="py-16">
        <p>
          sli.st was first introduced to the rave scene in March 2021. 3 months
          later he went to CDMX in search of more techno. After a few weeks of
          raving, sli.st started an online flyer sharing community to help map
          out the local rave scene. 2 months later he started learning from one
          of the best industrial DJs of the CDMX underground.
        </p>
        <p>
          Thanks to his online community, sli.st has become a trusted curator of
          the CDMX dark techno scene. When sli.st gets excited about a party, he
          agressively helps spread the word.
        </p>
      </div>
      <div className="gap-4 py-20 md:columns-3 ">
        <img className="img-fluid" src="/epk/blue.jpg" alt="black-white" />
        <img className="img-fluid" src="/epk/green.jpg" alt="black-white" />
        <img className="img-fluid" src="/epk/reddrink.jpg" alt="black-white" />
        <img
          className="img-fluid"
          src="/epk/greendrink.jpg"
          alt="black-white"
        />
        <img className="img-fluid" src="/epk/braids.jpg" alt="black-white" />
        <img
          className="img-fluid"
          src="/epk/braidsflags.jpg"
          alt="black-white"
        />
        <img className="img-fluid" src="/epk/chillcig.jpg" alt="black-white" />
        <img className="img-fluid" src="/epk/twocigs.jpg" alt="black-white" />
      </div>
      <h1>Text and logo preferences </h1>
      <ul>
        <li>
          "sli.st" should be spelled with the period and kept lowercase as it is
          a reference to the URL of this website
        </li>
        <li>Arial font, standard spacing</li>
      </ul>

      <div className="not-prose grid grid-cols-4 pb-20">
        <a href="/epk/white-black.svg" download>
          <img
            className="img-fluid"
            src="/epk/white-black.svg"
            alt="white-black"
          />
        </a>
        <a href="/epk/gray-white.svg" download>
          <img
            className="img-fluid"
            src="/epk/gray-white.svg"
            alt="gray-white"
          />
        </a>
        <a href="/epk/gray-black.svg" download>
          <img
            className="img-fluid"
            src="/epk/gray-black.svg"
            alt="gray-black"
          />
        </a>
        <a href="/epk/black-white.svg" download>
          <img
            className="img-fluid"
            src="/epk/black-white.svg"
            alt="black-white"
          />
        </a>
      </div>
    </div>
  )
}

export default FlyerWeySection
