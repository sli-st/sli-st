import * as React from "react"

const MarkdownWrapper = ({ children }) => {
  return (
    <article
      className="pt-5 mx-auto prose prose-stone dark:prose-invert prose-headings:font-serif 
    prose-p:font-serif prose-p:leading-loose  lg:prose-lg lg:leading-8 prose-headings:font-normal prose-headings:leading-tight "
    >
      {children}
    </article>
  )
}

export default MarkdownWrapper
