import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import MarkdownWrapper from "../../components/markdownwrapper"

const Sflyers = () => (
  <Layout pageTitle="Support" to="/about" label="About">
    <Seo title="Support" />
    <MarkdownWrapper>
      <h1 className="pt-5">Want to support this project?</h1>
      <p className="">
        The best way to support this project is by sharing it. You can download
        one (or more!) of the flyers below and spread the word on social media.
        Feel free to share it for as long as you like! Every bit of exposure
        helps me find and share more flyers.
      </p>

      <p>Don't forget to tag SLi.ST so I can thank you properly! Thanks!</p>

      <section className="grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <a href="/sflyer1.jpeg" download>
            <img className="img-fluid" src="/sflyer1.jpeg" alt="sflyer1" />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/sflyer2.jpeg" download>
            <img className="img-fluid" src="/sflyer2.jpeg" alt="sflyer2" />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/sflyer3.jpeg" download>
            <img className="img-fluid" src="/sflyer3.jpeg" alt="sflyer3" />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/sflyer4.png" download>
            <img className="img-fluid" src="/sflyer4.png" alt="sflyer3" />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/sflyer5.png" download>
            <img className="img-fluid" src="/sflyer5.png" alt="sflyer3" />
          </a>
        </div>
        <div className="col-span-1">
          <a href="/igqr.png" download>
            <img className="img-fluid" src="/igqr.png" alt="sflyer3" />
          </a>
        </div>
      </section>
    </MarkdownWrapper>
  </Layout>
)

export default Sflyers
