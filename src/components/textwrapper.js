import * as React from "react"

const TextWrapper = ({ children }) => {
  return (
    <article
      className="prose mx-auto max-w-2xl pt-5 text-primary 
     prose-headings:text-left prose-headings:font-normal prose-headings:leading-tight prose-headings:text-primary prose-p:leading-loose prose-a:text-primary"
    >
      {children}
    </article>
  )
}

export default TextWrapper
