import * as React from "react"
import { useState, useEffect } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function DateFlyer({ node }) {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? 'col-12 col-sm-12 order-first' : "col-4 col-sm-3"}>
      <GatsbyImage
        onClick={toggleClass}
        image={getImage(node)}
        alt={"fail"} />

    </div>


  );
}