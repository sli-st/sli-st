import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const Card1 = () => (
  <section className="leads">
    <div className="card card-sm card-body bg-primary border-light mb-0">
      <a

        className="accordion-panel-header"

      >
        <span className="h6 mb-0 font-weight-bold">
          I will share every event and lead without
          discrimination.
        </span>
      </a>
      <div id="panel-1">
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


  </section>
)

export default Card1
