import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="List">
      <Seo title="List" />
      <div className="intro-bg container md:px-96">
        <nav className="flex justify-between pt-4 pb-2 text-xl no-underline border-b border-primary">
          <a className="text-light" aria-current="page" href="/a/a5">
            About
          </a>
          <a className="text-primary text-decoration-none" href="/l/join">
            Join
          </a>
        </nav>
        <nav className="text-light flex flex-col text-2xl text-right">
          {[
            "axchacon",
            "b_wxng",
            "b_wxng",
            "dhiramprzz",
            "elissavinh",
            "_felix.vazquez_",
            "_____hcanyun",
            "_ironboard_",
            "nobinari_mx",
            "nos_autem",
            "simontechyes",
            "v.o.t.e.x.p.e.d.r.o",
          ].map(userName => (
            <a
              href={"https://www.instagram.com/" + userName}
              className=" border-primary border-l mb-3"
            >
              {userName}
            </a>
          ))}
        </nav>
        <Footer to="/a/a5" label="About" />
      </div>
    </Layout>
  )
}

export default BlogPage
