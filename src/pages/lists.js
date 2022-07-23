import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import SocialLink from "../components/sociallink"
import MarkdownWrapper from "../components/markdownwrapper"
import ListLink from "../components/listlink"
import ExternalIndexLink from "../components/externalindexlink"

const IndexPage = ({ data }) => (
  <Layout pageTitle="Index" to="/epk" label="EPK">
    <Seo title="Index" />
    {/* <nav className="text-lg text-center text-primary flex gap-5 flex-row justify-around md:px-36 lg:px-60 xl:px-96 pt-5 md:pt-10 ">
      <Link to="/rave-tips" className="">
        <div className="text-secondary">105</div>rave tips
      </Link>
      <Link to="/reflections">
        <div className="text-secondary">5</div> reflections
      </Link>
      <Link to="/menus">
        <div className="text-secondary">4</div> menus
      </Link>
      <Link to="/mixtapes">
        <div className="text-secondary">6</div> mixtapes
      </Link>
    </nav> */}
    <nav
      aria-label="Primary navigation"
      id="index-nav"
      className="md:px-40 lg:px-80 xl:px-96 container"
    >
      <div className="flex flex-col gap-8 justify-center text-secondary pt-20 xl:px-16">
        <ExternalIndexLink
          d="m3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
          to="https://myanimelist.net/mangalist/slist96"
          label="mangas"
        />
        <ExternalIndexLink
          d="m3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
          to="https://www.goodreads.com/review/list/153875603?shelf=read"
          label="books"
        />
        <ExternalIndexLink
          d="m3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
          to="https://www.imdb.com/list/ls567189511/"
          label="hollywood movies"
        />
        <ExternalIndexLink
          d="m3.3 15.4c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.85c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6.55c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7 1.3c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75zm-2.7-6c.717 0 1.3.583 1.3 1.3s-.583 1.3-1.3 1.3-1.3-.583-1.3-1.3.583-1.3 1.3-1.3zm2.7.75c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
          to="https://myanimelist.net/animelist/slist96"
          label="animes"
        />
      </div>
      <div className="grid grid-cols-4 text-xl text-secondary md:px-10">
        <div className="pt-10 col-span-4 ">
          <MarkdownWrapper>
            <p className="mt-10 mb-20 mx-2.5 md:mx-5 p-3 md:p-3 border border-stone-700 rounded-xl">
              sli.st is a reference to S tier lists. I've found that the DJs I
              like tend to have similar tastes as me in other forms of media. I
              imagine the reverse is probably true - people who like the same
              stuff I do are also likely to enjoy similar music.
            </p>
          </MarkdownWrapper>
        </div>
      </div>
    </nav>
  </Layout>
)
export default IndexPage
