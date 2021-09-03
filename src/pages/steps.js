import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="SLI.ST Story" />
    <section className="section-lg">
      <div className="container">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-6 col-xl-4 mb-5">
            <div className="card bg-primary shadow-soft border-light shadow-inset organic-radius1 p-3">
              <StaticImage
                className="card shadow-soft border-light"
                src="../../images/how.jpg"
                alt="me"
                placeholder="tracedSVG"
              />
            </div>
          </div>
          <div className="col-md-6 col-xl-7 text-md-left">
            <h2 className="md-h1 mb-4">How to make your own S List:</h2>
            <ol>
              <li>start by following atleast 1 DJ/event organizer/promoter</li>
              <li>
                follow every relevant account they tag in their posts/stories
              </li>
              <li>
                browse your feeds for event posts and reshare them to your story
              </li>
              <li>
                after "you're all caught up", highlight all your your stories by
                date
              </li>
              <li>
                re-highlight the most interesting events as a Special List
                (subjective)
              </li>
              <br />
              <li>
                optional: use your Special List to better plan your nightlife
                adventures
              </li>
              <li>
                optional: share with friends and/or develop an event sharing
                community
              </li>
              <li>
                optional: ask your beloved community to spread your project{" "}
              </li>
              <br />
              <li>
                repeat the steps above as often as you can until you don't want
                to
              </li>
            </ol>
            <ul>
              <li>
                Do this for yourself (finding events) and you will never get
                tired.
              </li>
              <li>Alternate and ice your thumbs.</li>
              <li>Share for the sake of sharing.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
