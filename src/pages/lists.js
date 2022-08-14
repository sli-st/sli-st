import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ListLink from "../components/listlink"

const IndexPage = ({ data }) => (
  <Layout pageTitle="Index" to="/about/lists" label="About">
    <Seo title="Index" />
    <nav aria-label="Primary navigation" id="index-nav">
      <h1>Entertainment lists</h1>
      <div className="flex flex-col justify-center gap-8">
        <ListLink
          href="https://myanimelist.net/mangalist/slist96"
          label="Mangas: not adapted to anime"
        />
        <ListLink
          href="https://www.goodreads.com/review/list/153875603?shelf=read"
          label="Books: variety"
        />
        <ListLink
          href="https://www.imdb.com/list/ls567189511/"
          label="Hollywood movies: dark atmospheres"
        />
        <ListLink
          href="https://myanimelist.net/animelist/slist96"
          label="Animes: variety"
        />
      </div>
    </nav>
  </Layout>
)
export default IndexPage
