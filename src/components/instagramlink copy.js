import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"




const InstagramLink = () => {
  return (

    <a
      href="https://www.instagram.com/slistslist/"
      target="_blank"
      className="text-info text-decoration-none mb-3"
    >
      <FontAwesomeIcon icon={faInstagram} className="mr-2" size="sm" /> slistslist
    </a>

  );
}

export default InstagramLink;