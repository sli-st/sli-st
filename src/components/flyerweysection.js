import * as React from "react"

const FlyerWeySection = ({ d, to, href, label }) => {
  return (
    <div>
      <p>
        sli.st was first introduced to the rave scene in March 2021. In June he
        travelled to CDMX and, after a few weeks of intense raving, sli.st
        started an online community to help map out the local rave scene. 2
        months later he was learning from one of CDMX's hardest industrial DJs.
        Over the next few months he was invited to play at The Real Under, open
        for B Space at 49 Basan, and DJ for a few hours at the New Year's after
        party at NIX.
      </p>
      <p>
        Through his online community, sli.st has become one of the most
        influential niche curators of the CDMX dark techno scene. When sli.st
        hears about a party he believes in, he agressively helps spread the
        word.
      </p>

      <div className="gap-4 md:columns-3">
        <img className="img-fluid" src="/epk/green.jpg" alt="black-white" />
        <img className="img-fluid" src="/epk/reddrink.jpg" alt="black-white" />
        <img
          className="img-fluid"
          src="/epk/greendrink.jpg"
          alt="black-white"
        />
        <img className="img-fluid" src="/epk/braids.jpg" alt="black-white" />
        <img className="img-fluid" src="/epk/chillcig.jpg" alt="black-white" />
        <img className="img-fluid" src="/epk/twocigs.jpg" alt="black-white" />
      </div>
    </div>
  )
}

export default FlyerWeySection
