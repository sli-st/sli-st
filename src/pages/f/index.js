import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Sflyers = () => (
  <Layout pageTitle="Support">
    <Seo title="Support" />
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <section className="row justify-content-center align-items-center mt-3 py-5">
            <h1 className="text-center d-flex flex-column text-light">
              <span>Want to support the project?</span>
            </h1>
            <p className="text-center text-primary">
              Please click a flyer to download, tag, and share!
            </p>
          </section>
          <section className="row pt-5">
            <div className="col-lg-4">
              <a href="/sflyer1.jpeg" download>
                <img className="img-fluid" src="/sflyer1.jpeg" alt="sflyer1" />
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/sflyer2.jpeg" download>
                <img className="img-fluid" src="/sflyer2.jpeg" alt="sflyer2" />
              </a>
            </div>
            <div className="col-lg-4">
              <a href="/sflyer3.jpeg" download>
                <img className="img-fluid" src="/sflyer3.jpeg" alt="sflyer3" />
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Layout>
)

export default Sflyers
