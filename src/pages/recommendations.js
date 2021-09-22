import * as React from "react"
import Footer from "../components/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Personal Recommendations" />
    <section className="container-fluid pt-4 intro-bg text-soft" >
      <div className="text-center py-4 ">
        <p>Completely subjective, continuously updated.</p>
        <p>Based on IRL experiences.</p>
      </div>
      <div className="row justify-content-center" >
        <div className="col-md-9 recommendations columns">
          <p>Dark techno</p>
          <ul>
            <li>Vendex - cathartic music, produces a ton, constant variety in his sets, wears masks, and set design is fire</li>
            <li>Anders Bart</li>
            <li>k1lltheelite</li>
            <li>Miss Crafty</li>
            <li>SOEL</li>
            <li>Sonico</li>
          </ul>
          <p>Acid Techno</p>
          <ul>
            <li>Miss Crafty</li>
            <li>Lindsey Herbert</li>
          </ul>
          <p>Industrial</p>
          <ul>
            <li>k1lltheelite</li>
            <li>Secret Raver</li>
            <li>Vendex</li>
            <li>Lindsey Herbert</li>
            <li>Sonico</li>
          </ul>
          <p>Performer</p>
          <ul>
            <li>Vendex</li>
          </ul>
          <p>Crowd Engagement</p>
          <ul>
            <li>Cera Khin</li>
            <li>Lindsey Herbert</li>
          </ul>
          <p>Performer</p>
          <ul>
            <li>Vendex</li>
          </ul>
          <p>Collectives</p>
          <ul>
            <li>Taken NYC</li>
            <li>Common Sense Records</li>
            <li>BPM Global</li>
            <li>UFOPIA</li>
            <li>Just Us Collective</li>
          </ul>
          <p>Psy Techno</p>
          <ul>
            <li>Anders Bart</li>
          </ul>
          <p>Tech House</p>
          <ul>
            <li>Rafiko</li>
          </ul>
          <p>Break beat</p>
          <ul>
            <li>Valac</li>
          </ul>
          <p>Experimental</p>
          <ul>
            <li>LYO.XS</li>
            <li>Vanderlinden</li>
          </ul>
          <p>Minimal</p>
          <ul>
            <li>SOEL</li>
          </ul>
          <p>Venue</p>
          <ul>
            <li>NIX</li>
            <li>Pervert MX</li>
          </ul>
          <p>House</p>
          <ul>
            <li>BastardLove</li>
            <li>WhatYouWantnyc</li>
          </ul>
          <p>Versatile</p>
          <ul>
            <li>Chipsy Riot</li>
          </ul>
        </div>
      </div>
    </section >
    <Footer />
  </Layout >
)

export default IndexPage
