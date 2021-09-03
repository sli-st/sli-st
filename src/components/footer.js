import * as React from "react"

const Footer = () => {
  return (
    <footer className="d-flex pb-5 pt-6 pt-md-7 border-top border-light" id="footer">
    <div className="container">
        <div className="row">
            <div className="col text-center">
                <div className="mb-3">
                    <span className="display-1">🙌🙏🙌</span>
                </div>
                <p>names and reasons<br/>coming soon</p>
            </div>
        </div>
        <hr className="my-5"/>
        <div className="row">
            <div className="col">
            <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                <p className="font-weight-normal font-small mb-0">Copyright © 
                    <span className="current-year">2021</span>. All rights reserved.</p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
