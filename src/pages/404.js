import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center text-center my-5">
      <Link to="/" className="py-5">
        <h1>
          404: Not Found <br></br>Go back to SLi.ST
        </h1>
      </Link>
      <p className="text-center text-secondary">
        Please let me know if something is broken.
      </p>
    </div>
  </Layout>
)

export default NotFoundPage
