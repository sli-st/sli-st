import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import MixtapeLinks from "../components/mixtapelinks"
import MarkdownWrapper from "../components/markdownwrapper"

const IndexPage = () => (
  <Layout pageTitle="Recorded Mixes" to="/epk" label="EPK">
    <Seo title="Recorded Mixes" />
    <MarkdownWrapper>
      <nav aria-label="Primary navigation" id="index-nav" className="">
        <h1>Mixtapes</h1>
        <p>320kbps MP3 files, and uncompressed AIFFs</p>
        <div className=" px-3">
          <MixtapeLinks
            number="6"
            date="2022-06-01"
            description="synthwave, minimal, apocalytpic gabber, psytechno"
            aiff="https://drive.google.com/file/d/10V-wUIuQ0C6kwhNJo1fUQVDNL3xtc5uw/view?usp=sharing"
            mp3="https://drive.google.com/file/d/10V-wUIuQ0C6kwhNJo1fUQVDNL3xtc5uw/view?usp=sharing"
          />
          <MixtapeLinks
            number="5"
            date="2022-03-17"
            description="dark house, minimal, apocalyptic, synthwave"
            aiff="https://drive.google.com/file/d/1WWFLS8E7Ke-oNBvor0T_29VU00KmjjZk/view?usp=sharing"
            mp3="https://drive.google.com/file/d/1hz26ha9wUZ3dE7-b9P41qrxR6pZrdrRb/view?usp=sharing"
          />
          <MixtapeLinks
            number="4"
            date="2022-03-05"
            description="fast apocalyptic melodies (160+)"
            aiff="https://drive.google.com/file/d/1jtAFAzX4aD53qqZNy4zMz8pvCHgx1w55/view?usp=sharing"
            mp3="https://drive.google.com/file/d/1hTHZTeBN2w-mwWsJ7sUsP-HQcRrrdLHI/view?usp=sharing"
          />
          <MixtapeLinks
            number="3"
            date="2022-01-22"
            description="dark melodic house and a bit of italo"
            aiff="https://drive.google.com/file/d/1333GtfPOVqpv0fPmAAcE_Aam4EB8nj13/view?usp=sharing"
            mp3="https://drive.google.com/file/d/1al35OnHFS77CWm6QLomkhvwSrkjYBr_P/view?usp=sharing"
          />
          <MixtapeLinks
            number="2"
            date="2022-01-14"
            description="dark trance techno, industrial techno classics,"
            aiff="https://drive.google.com/file/d/1al35OnHFS77CWm6QLomkhvwSrkjYBr_P/view?usp=sharing"
            mp3="https://drive.google.com/file/d/1WRM6cCxQc2oQajg-JCuYTZPSIWzVqqnc/view?usp=sharing"
          />
          <MixtapeLinks
            number="1"
            date="2021-12-01"
            description="dark tech house, minimal, synthwave"
            aiff="https://drive.google.com/file/d/1WRM6cCxQc2oQajg-JCuYTZPSIWzVqqnc/view?usp=sharing"
            mp3="https://drive.google.com/file/d/10CWCnm9gMIy6vh__t8JTY5LrMaULovB5/view?usp=sharing"
          />

          <p className="text-center pb-20">
            <a
              className="text-primary"
              href="https://soundcloud.com/slistslist"
            >
              SoundCloud
            </a>
          </p>
        </div>
      </nav>
    </MarkdownWrapper>
  </Layout>
)

export default IndexPage
