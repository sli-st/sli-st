import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import Seo from "../components/seo"

const StoryPage = () => (
  <Layout>
    <Seo title="SLI.ST Story" />
    <section className="section section-lg pt-7">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="display-2 my-5">
              What to expect from your underground music tour
              <br />
            </h1>
            <ul>
              <li>
                we&rsquo;ll begin with a short chat over text or phone
                (number/link below)
              </li>
              <ul>
                <li>
                  <div>
                    I will ask you about your preferences in regards to things
                  </div>
                  <div>
                    such as music, social atmosphere, and when you want to go
                  </div>
                </li>
                <li>
                  you can tell me about your drug and sexual preferences as well
                </li>
                <li>
                  the more information you give me, the easier it is for me
                  to&nbsp;choose the best&nbsp;nightclub&nbsp;with the
                  right&nbsp;scene
                </li>
              </ul>
              <li>
                I will then take 15 minutes for planning and contact you back
              </li>
              <li>we will meet at a bar or cafe near the final venue&nbsp;</li>
              <ul>
                <li>
                  we&rsquo;ll chat for a little bit,&nbsp;have a few drinks, and
                  discuss the local party culture in all its aspects
                </li>
                <li>we&rsquo;ll stay there for 1-2 hours</li>
                <li>
                  I will collect the&nbsp;payment for the tour&nbsp;while
                  we&rsquo;re there
                </li>
              </ul>
              <li>
                we will then either walk to the venue or I will order us an Uber
                (complimentary)
              </li>
              <li>
                entry for most events is between 100 to 600 pesos, but usually
                250, and sometimes free if we arrive early
              </li>
              <li>
                typical drinks costs are:
                <ul>
                  <li>water 50</li>
                  <li>beer 80</li>
                  <li>shot 100</li>
                  <li>standard drink 150</li>
                </ul>
              </li>
              <li>
                I will stay at the venue the entire night with my phone on at
                all times.
              </li>
              <li>
                before we party we will start a group chat in case anyone wants
                to regroup for shots or whatever.
              </li>
              <ul>
                <li>
                  I am almost always at the front or near a speaker and
                  I&rsquo;m usually one of the last people to leave.
                </li>
                <li>
                  we will hang out until the very end of the night if you want
                  to.
                </li>
              </ul>
              <li>
                most nightclubs/raves are open from 9 to 6am
                <ul>
                  <li>they usually peak from 2 to 3 am</li>
                  <li>some clubs open from 2pm to 12am and peak at 9-10pm</li>
                </ul>
              </li>
              <li>the cost is $1000 pesos per person</li>
              <ul>
                <li>this does not include food, drinks, or entry</li>
              </ul>
              <li>expect to have fun</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p>
            <a
              href="https://wa.me/525512015702"
              className="btn btn-spotify mx-4"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>
            <a href="tel:+52 55 1201 5702">+52 55 1201 5702</a>
          </p>
          <p className="mt-5">
            "Hi, I'd like to book a tour, my name is _______"
            <br />
            I'll take it from there.
            <br />
          </p>
        </div>
      </div>
    </section>
  </Layout>
)

export default StoryPage
