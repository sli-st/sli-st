import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'



const FlyerButton = () => {
  return (

    <a
      href="sflyer.jpeg"
      target="_blank"
      className="btn btn-outline-primary text-primary mt-2"
      download
    >
      <span className="pl-3">sflyer.jpeg</span> <FontAwesomeIcon icon={faCloudDownloadAlt} size="sm" className="fa-flip-horizontal" />
    </a>

  );
}

export default FlyerButton;