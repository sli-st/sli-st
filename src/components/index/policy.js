import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const policy = () => (
  <section>
    
    <div className="container-fluid">
    <h1 className="display-4 mb-4">S LI.ST <strike>promoting</strike> Sharing Guidelines</h1>
          <div className="accordion shadow-soft rounded" id="accordionExample1">
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
                  I will share every event that comes my way without
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
                    the general project. I will bring this up to a vote if an
                    issue ever arrises that calls for me to stop sharing events
                    from a venue or organization for some crime against the
                    community. Use your imagination, or ask me what I mean.
                  </p>
                  <p>
                    I keep a seperate list of events that I am personally
                    looking forward to based on my tastes which are completely
                    subjective. I like dark techno, experimental, and "unique"
                    events. There's a few people that appreciate that and count
                    on me for that list so I will continue to share my personal
                    curated S List of events alongside everything else.
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
            <div className="card card-sm card-body bg-primary border-light">
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
                  I will always be open to suggestions, feedback, and criticism.
                </span>
                <FontAwesomeIcon icon={faPlus} className="icon" />
              </a>
              <div className="collapse" id="panel-3">
                <div className="pt-3">
                  <p className="mb-0">
                    The biggest driver for the growth and recognition of the S
                    List community is the feedback and advice from the local
                    community. Up until the previous week every single design,
                    layout, and operational decision has been voted on by the
                    communnity. Even the colors I use and where I sort the
                    events has been voted on. I appreciate the nuanced opinions
                    and feedback and I will always rely on the community for
                    your perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  </section>
)

export default policy
