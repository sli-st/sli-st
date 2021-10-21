import * as React from "react"

import { Link } from "gatsby"

const PrimaryNav = () => {
  return (
    <nav
      aria-label="Primary navigation"
      className="primary-nav container-fluid fixed-bottom bg-black pb-4 pt-3 mx-0"
    >
      <div className="row justify-content-center g-0">
        <div className="col-md-5 d-flex justify-content-between align-items-center px-3">
          <Link to="/s"
            className="text-white  border-white text-decoration-none px-2"
            activeClassName="nav-active"
            partiallyActive={true}>
            S
          </Link>


          <Link to="/adventures/"
            className="text-white  border-white text-decoration-none px-2"
            activeClassName="nav-active"
            partiallyActive={true}>
            ✮
          </Link>


          <Link to="/"
            className="text-white text-decoration-none border px-2 "
            activeClassName="nav-active"
            partiallyActive={true}>
            SLi.ST
          </Link>

          <Link to="/perks"
            className="text-white  border-white text-decoration-none px-2"
            activeClassName="nav-active"
            partiallyActive={true}>
            !
          </Link>

          <Link to="/members"
            className="text-white  border-white text-decoration-none px-2"
            activeClassName="nav-active"
            partiallyActive={true}>
            @
          </Link>


        </div>
      </div>
    </nav>
  )
}

export default PrimaryNav
