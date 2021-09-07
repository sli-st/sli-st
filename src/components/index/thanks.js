import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileVideo, faFileImage } from '@fortawesome/free-solid-svg-icons'

const Thanks = () => {
  return (
    <section className="d-flex pb-5 pt-6 pt-md-7 intro-bg" id="footer">
    <div className="container">
        <div className="row">
            <div className="col text-soft text-center">
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
                <a href="https://open.spotify.com/user/z09n91efexts02mucc1kils6z?si=a6Jox2yYTsOzO6nacl-leA&dl_branch=1&nd=1"target="_blank" className="font-weight-normal font-small mb-0">Made with <span className="text-spotify">♥</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Thanks
