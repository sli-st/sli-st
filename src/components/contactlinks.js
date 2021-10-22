import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"



const ContactLinks = () => {
  return (

    <section className="lead">
      <a
        href="mailto:s@sli.st"
        target="_blank"
        className="text-info text-decoration-none mb-3"
      >
        s@sli.st
      </a>
      <br />
      <a
        href="https://www.instagram.com/slistslist/"
        target="_blank"
        className="text-info text-decoration-none mb-3"
      >
        @slistslist
      </a>
    </section>

  );
}

export default ContactLinks;