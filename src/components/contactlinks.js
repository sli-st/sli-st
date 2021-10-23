import * as React from "react"

const ContactLinks = () => {
  return (
    <><a
      href="mailto:s@sli.st"
      target="_blank"
      rel="noreferrer"
      className="text-secondary my-4"
    >
      s@sli.st
    </a>
      <br />
      <a
        href="https://www.instagram.com/slistslist/"
        target="_blank"
        rel="noreferrer"
        className="text-secondary"
      >
        @slistslist
      </a>
    </>

  );
}

export default ContactLinks;