import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"
import MarkdownWrapper from "../../components/markdownwrapper"

const Sflyers = () => (
  <Layout pageTitle="Support" to="/a" label="About">
    <Seo title="Support" />
    <MarkdownWrapper>
      <h1 className="pt-10">Want to support this project?</h1>
      <p className="">
        Please click a flyer to download. Tag SLi.ST so I can thank you. And
        then just share it as a story or post for however long you'd like! Thank
        You!
      </p>

      <section className="grid grid-cols-3">
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
      </section>
    </MarkdownWrapper>
  </Layout>
)

export default Sflyers
