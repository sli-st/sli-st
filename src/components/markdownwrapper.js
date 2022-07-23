import * as React from "react"

const MarkdownWrapper = ({ children }) => {
  return (
    <article
      className="prose mx-auto max-w-2xl pt-5 text-primary 
     prose-headings:text-left prose-headings:font-normal prose-headings:leading-tight prose-headings:text-secondary prose-p:leading-loose prose-a:text-primary"
    >
      {children}
    </article>
  )
}

export default MarkdownWrapper
