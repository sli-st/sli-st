import * as React from "react"

const MarkdownWrapper = ({ children }) => {
  return (
    <article
      className="pt-5 mx-auto prose text-primary prose-headings:text-secondary 
     prose-p:leading-loose lg:prose-lg lg:leading-8 prose-headings:font-normal prose-headings:leading-tight prose-a:text-primary"
    >
      {children}
    </article>
  )
}

export default MarkdownWrapper
