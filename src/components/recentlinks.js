import * as React from "react"
import { Link } from 'gatsby'

const RecentLinks = () => {
  return (
    <>
      <span className="text-secondary">
        Update Post - {' '}
        <Link
          to="https://www.instagram.com/slistslist/"
          target="_blank"
          rel="noreferrer"
          className="no-decoration"
        >
          OCT 23 B
        </Link>
      </span>
      <br />
      <span className="text-secondary">
        Mi Fix del Fin - {' '}
        <Link
          to="https://www.instagram.com/slistslist/"
          target="_blank"
          rel="noreferrer"
          className="no-decoration"
        >
          The one event I'm looking forward to each week
        </Link>
      </span>
      <br />
      <span className="text-secondary">
        Recent Adventure Reflection - {' '}
        <Link
          to="/adventures/210610/"
          target="_blank"
          rel="noreferrer"
          className="no-decoration"
        >
          "The first rave I could find in CDMX"
        </Link>
      </span>
    </>

  );
}

export default RecentLinks;