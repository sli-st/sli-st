import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileVideo, faFileImage } from '@fortawesome/free-solid-svg-icons'

const Share = () => {
  return (
    <div class="pt-0 @@classes">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-10">
                <div class="card bg-primary shadow-soft border-light shadow-inset mb-6">
                    <div class="card-body px-md-5 py-5 text-md-left">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <h2 class="mb-3">Share the S List</h2>
                                <p class="mb-0">
                                    Share this project with your friends and followers. Here are some promotional 
                                    materials to make it easier. Tag!!!
                                </p>
                            </div>
                            <div class="col-12 col-md-6 mt-4 text-md-right">
                                <div class="d-flex flex-column"></div>
                                <a href="#" class="btn btn-primary my-3 mx-2 mx-md-3">
                                <FontAwesomeIcon icon={faFileVideo} /> Story Flyer
                                </a>
                                <a href="#" class="btn btn-primary my-3 mx-2 mx-md-3">
                                <FontAwesomeIcon icon={faFileImage} /> Post Flyer
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

export default Share
