import * as React from "react"

const Intro = () => {
  return (
    <section className="text-center">
      <p className="pb-2 lead text-danger ">flyers + info
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right mx-2" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
        <a href="mailto:s@sli.st" className="text-danger text-decoration-none"> s@sli.st</a>
      </p>




      <a href="slistflyer.JPG" class="text-danger text-decoration-none btn btn-outline-danger">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="pb-1 bi bi-file-image" viewBox="0 0 16 16">
          <path d="M8.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
          <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8l-2.083-2.083a.5.5 0 0 0-.76.063L8 11 5.835 9.7a.5.5 0 0 0-.611.076L3 12V2z"></path>
        </svg>
        S List Flyer
      </a>


    </section>
  )
}

export default Intro