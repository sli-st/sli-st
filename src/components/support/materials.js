import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const Materials = () => {
  return (
    <div className="pt-0 @@classNamees materials">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
                <div className="card bg-primary shadow-soft border-light shadow-inset mb-6">
                    <div className="card-body px-md-5 py-5 text-md-left">
                    <div className="row"><h2 className="">Advertising materials</h2></div>
                    <div className="row align-items-center">
                            <div className="col-md-6">
                                <ul className="text-md-left mt-3">
                                    <li>t-shirts, masks, hats, etc.</li>
                                    <li>banners, flyers, stickers, "business" cards</li>
                                    <li>a volunteer's forehead to tattoo</li>
                                </ul>
                            </div>
                            
                            <div className="col-12 col-md-6 text-md-right">
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

export default Materials
