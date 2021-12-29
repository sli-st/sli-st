import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Footer from "../../components/footer"

const Sflyers = () => (
  <Layout pageTitle="Support">
    <Seo title="Support" />
    <div className="container prose">
      <h1 className="text-center d-flex flex-column text-light pt-10">
        <span>Want to support the project?</span>
      </h1>
      <p className="text-center text-primary">
        Please click a flyer to download. Tag SLi.ST. And share!
      </p>
      <p className="text-center text-primary">Thank You!</p>
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
          <a href="/sflyer3.jpeg" download>
            <img className="img-fluid" src="/sflyer3.jpeg" alt="sflyer3" />
          </a>
        </div>
      </section>
      <Footer to="/a" label="About" />
    </div>
  </Layout>
)

export default Sflyers
