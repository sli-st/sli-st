import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import IndexLink from "../components/indexlink"
import MarkdownWrapper from "../components/markdownwrapper"

const IndexPage = ({ data }) => (
  <Layout pageTitle="Index" to="/epk" label="EPK">
    <Seo title="Index" />
    <nav className="text-lg text-center text-primary flex gap-5 flex-row justify-around md:px-36 lg:px-60 xl:px-96 pt-5 md:pt-10 ">
      <Link to="/rave-tips" className="">
        <div className="text-secondary">105</div>rave tips
      </Link>

      <Link to="/lists">
        <div className="text-secondary">4</div> lists
      </Link>
      {/* <Link to="/gigs">
        <div className="text-primary">4</div> Sets
      </Link> */}
      <Link to="/list">
        <div className="text-secondary">36</div>listees
      </Link>
      <Link to="/mixtapes">
        <div className="text-secondary">6</div> mixtapes
      </Link>
    </nav>
    <nav
      aria-label="Primary navigation"
      id="index-nav"
      className="md:px-40 lg:px-80 xl:px-96"
    >
      <div className="grid grid-cols-4 text-xl text-secondary">
        <div className="pt-16 col-span-4 ">
          <div className="grid gap-8 justify-center">
            <IndexLink
              d="M7 17.939h-1v-8.068c.308-.231.639-.429 1-.566v8.634zm3 0h1v-9.224c-.229.265-.443.548-.621.857l-.379-.184v8.551zm-2 0h1v-8.848c-.508-.079-.623-.05-1-.01v8.858zm-4 0h1v-7.02c-.312.458-.555.971-.692 1.535l-.308-.182v5.667zm-3-5.25c-.606.547-1 1.354-1 2.268 0 .914.394 1.721 1 2.268v-4.536zm18.879-.671c-.204-2.837-2.404-5.079-5.117-5.079-1.022 0-1.964.328-2.762.877v10.123h9.089c1.607 0 2.911-1.393 2.911-3.106 0-2.233-2.168-3.772-4.121-2.815zm-16.879-.027c-.302-.024-.526-.03-1 .122v5.689c.446.143.636.138 1 .138v-5.949z"
              to="https://soundcloud.com/slist96"
              label="SoundCloud"
              handle="sli.st"
            />
            <IndexLink
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              to="https://instagram.com/sli.st96"
              label="Instagram"
              handle="@sli.st96"
            />
            <IndexLink
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              to="https://instagram.com/nyc.flyer.girl"
              label="NYC Flyers"
              handle="@nyc.flyer.girl"
            />
            <IndexLink
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
              to="https://facebook.com/groups/cdmxflyers"
              label="FB Group"
              handle="CDMX Flyers"
            />
            <IndexLink
              d="M19.899 19.899c.168.145.072.381-.132.618-.156.183-.305.283-.434.283l-.156-.06c-.157-.136-.089-.383.123-.625.144-.166.302-.276.44-.276l.159.06zm-1.421-5.899h-4.478v4.48l5.518 5.52 4.482-4.48-5.522-5.52zm-.447 3.364c.21-.245.479-.379.745-.379.188 0 .374.067.538.208.403.346.376.835.033 1.234-.234.272-.502.39-.752.39-.198 0-.385-.074-.534-.202-.354-.307-.407-.813-.03-1.251zm-2.031-.614c-.413 0-.75-.335-.75-.75s.338-.75.75-.75.75.335.75.75-.337.75-.75.75zm1.25 2.866l3.417-1.262.295.252-3.42 1.259-.292-.249zm2.944 1.225c-.233.272-.5.39-.75.39-.197 0-.384-.074-.533-.202-.353-.302-.405-.809-.032-1.25.21-.245.479-.379.745-.379.188 0 .374.066.539.208.402.345.377.834.031 1.233zm-1.864-2.516c-.158-.136-.09-.383.119-.627.144-.166.304-.275.442-.275l.157.059c.168.145.075.384-.128.621-.156.182-.307.283-.436.283l-.154-.061zm-6.33-10.325c1.066 0 2-.936 2-2.002v-1.098l-1.047-4.9h-1.906l-1.047 4.902v1.098c0 1.067.934 2 2 2zm3-2c0 1.067.934 2 2 2s1.998-.833 1.998-1.9v-1.098l-2.994-5.002h-1.943l.939 4.902v1.098zm5 0c0 1.067.934 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971h-2.014l2.887 4.902v1.098zm-8.312 13h-8.688v-7h18v1.693l2 1.999v-5.692h-22v14h15.69l-5.002-5zm-7.688-12.932v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.934 1.931 2 1.931s2-.865 2-1.932zm1 0c0 1.067.934 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097z"
              to="/discounts"
              label="Discounts"
              handle='"SCODE"'
            />
          </div>
          <MarkdownWrapper>
            <p className="mt-10 mb-20 mx-2.5 md:mx-8 lg:mx-10 p-3 md:p-3 border border-stone-700 rounded-xl">
              SLi.ST began as a finsta in June'21 for finding CDMX raves. In
              order to also help others find events I started resharing and
              tagging every flyer I could find. Despite my anonymity, most
              people would reshare my posts which I found kind of ridiculous. So
              then I started shitposting about the rave scene which surprisingly
              resonated with a lot of people. A few months later I started DJing
              and decided to name myself after the community that had been
              introducing me to new music, new scenes, and welcoming my
              (sometimes) controversial posts. Thanks for including me. - SLi.ST
              (2022-07-12)
            </p>
          </MarkdownWrapper>
        </div>
      </div>
    </nav>
  </Layout>
)
export default IndexPage
