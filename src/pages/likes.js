import * as React from "react"
import Footer from "../components/footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import Layout from "../components/layout"
import JSONData from "../../content/likes.json"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

import Seo from "../components/seo"

const JSONbuildtime = () => (
  <Layout>
    <Seo title="Liked live" />
    <section className="container-fluid py-4 pb-5 mb-5 intro-bg text-light liked">
      <div className="row justify-content-center" >
        <div className="col-11 col-md-5 recommendations">
          {JSONData.category.map((data, index) => {
            return <div className="row border border-danger border-bottom-0 my-3 p-2">
              <div className="col-11 col-md-4 ">
                <p className="p-0">{data.name}</p>
                <div className="d-flex flex-row justify-content-between">
                </div>
              </div>
              <div className="col-1 col-md-1 ">
                <p className="p-0"><FontAwesomeIcon icon={faSpotify} size="md" className="text-danger" /></p>
                <div className="d-flex flex-row justify-content-between">
                </div>
              </div>
              <div className="col-md-7 d-flex align-items-cente">
                <p className="text-start">

                  {data.people.map((person, index) => {
                    var finalURL = ""
                    var googleURLfragment = "https://www.google.com/search?q="
                    var personURLfragment = person.replace(" ", "+")
                    var keywordsURLfragment = " music | dj"
                    finalURL = googleURLfragment + personURLfragment + keywordsURLfragment
                    return <a className="text-decoration-none text-light" href={finalURL}>
                      <>{person} &nbsp;</>
                    </a>
                  })}
                </p>

              </div>

            </div>
          })}
        </div>
      </div>
    </section >
    <Footer />
  </Layout >
)

export default JSONbuildtime
