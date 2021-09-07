import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { faShare } from '@fortawesome/free-solid-svg-icons'

const Send = () => {
  return (
    <div className="container">
    <div className="card bg-primary shadow-soft border-light shadow-inset">
                    <div className="card-body py-3 text-md-left">
                        <div className="row">
                        <h2 className=" ml-3">All leads welcome!</h2>
                        </div>
                        <p className="">
                                    What's an event sharing project without events? Please send flyers, screenshots, post-its, 
                                    voice recordings, videos, set times etc. Via DMs or <a href="mailto:s@sli.st">s@sli.st
                                </a>.
                                </p>
                        
                    </div>
                </div>
    </div>
  )
}

export default Send
