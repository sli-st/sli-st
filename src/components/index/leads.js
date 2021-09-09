import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Leads = () => (
  <section className="container pt-7">
    <div className="text-center py-4">
      <h2 className="">All leads and events welcome!</h2>
      <p className="">
        DM or <a href="mailto:s@sli.st">s@sli.st
        </a>
      </p>
    </div>
    <div className="row justify-content-center">
      <div className="col-11 col-md-9 shadow-inset py-md-1">


        <div className="">

          <div className="accordion rounded" id="accordionExample1">
            <div className="card card-sm card-body bg-primary border-light mb-0">
              <a
                href="#panel-1"
                data-target="#panel-1"
                className="accordion-panel-header"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="panel-1"
              >
                <span className="h6 mb-0 font-weight-bold">
                  I will share every event and lead without
                  discrimination.
                </span>
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </a>
              <div className="collapse" id="panel-1">
                <div className="pt-3">
                  <p>
                    The goal is to share as many underground events with as many
                    people as possible. Even if I don't like a particular venue,
                    event, or organization, I will share their event with the
                    rest of the community. Everyone should be able to make their
                    own opinions, judgements, and choices. As a self-proclaimed
                    semi-professional event-sharer I cannot become a curator for
                    the general project.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-sm card-body bg-primary border-light mb-0">
              <a
                href="#panel-2"
                data-target="#panel-2"
                className="accordion-panel-header"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="panel-1"
              >
                <span className="h6 mb-0 font-weight-bold">
                  I will never accept any compensation for sharing or
                  recommending events.
                </span>
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </a>
              <div className="collapse" id="panel-2">
                <div className="pt-3">
                  <p className="mb-0">
                    All events I see will get shared for free. I only hope
                    people will return the courtesy and share this project as
                    well. More eyes, more leads, more events, more options for
                    everyone. Everyone wins when there are fewer barriers to
                    information.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-sm card-body bg-primary border-light mb-0">
              <a
                href="#panel-3"
                data-target="#panel-3"
                className="accordion-panel-header"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="panel-1"
              >
                <span className="h6 mb-0 font-weight-bold">
                  I will always welcomes suggestions, feedback, and criticism.
                </span>
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </a>
              <div className="collapse" id="panel-3">
                <div className="pt-3">
                  <p className="mb-0">
                    The biggest driver for the growth and recognition of the S
                    List community is the feedback and advice from the local
                    community. Up until the first account was taken down every single design,
                    layout, and operational decision has been voted on by the
                    communnity. Even the colors I use and how I sort the
                    events has been voted on. I appreciate the nuanced opinions
                    and feedback, and I will always rely on the community for
                    their perspective.
                  </p>
                </div>
              </div>
            </div>
            <div className="card card-sm card-body bg-primary border-light mb-0">
              <a
                href="#panel-4"
                data-target="#panel-4"
                className="accordion-panel-header"
                data-bs-toggle="collapse"
                role="button"
                aria-expanded="false"
                aria-controls="panel-1"
              >
                <span className="h6 mb-0 font-weight-bold">
                  I will only share what's allowed to be shared publically.
                </span>
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </a>
              <div className="collapse" id="panel-4">
                <div className="pt-3">
                  <p className="mb-0">
                    Please send flyers, screenshots, post-its, voice recordings, videos, set times etc. If there is something that I'm sharinng that is supposed to be kept a secret, please let me know and I will take it down.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Leads
