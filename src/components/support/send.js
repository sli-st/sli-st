import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const Send = () => {
  return (
    <div className="pt-0">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
                <div className="card bg-primary shadow-soft border-light shadow-inset mb-6">
                    <div className="card-body px-md-5 py-5 text-md-left">
                        <div className="row">
                        <h2 className="mb-3 ml-3">Send leads!</h2>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                
                                <p className="mb-0">
                                    What's an event sharing project without events? Please send flyers, screenshots, post-its, 
                                    voice recordings, videos, set times etc.- anything event related.
                                </p>
                            </div>
                            <div className="col-12 col-md-6 mt-4 mt-md-0 text-md-right ">
                                <a href="https://www.instagram.com/sli.stcdmx/" className="btn btn-primary mx-2 mx-md-3">
                                <FontAwesomeIcon icon={faFacebookMessenger} /> social media
                                </a>
                                <a href="mailto:s@sli.st" className="btn btn-primary mx-2 mx-md-3">
                                <FontAwesomeIcon icon={faShare} /> s@sli.st
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Send
