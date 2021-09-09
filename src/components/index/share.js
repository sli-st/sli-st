import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileImage } from '@fortawesome/free-solid-svg-icons'

const Share = () => {
    return (
        <div class="">
            <div class="container pb-7">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10">
                        <div class="card bg-primary shadow-soft border-light shadow-inset mb-6">
                            <div class="card-body px-md-5 py-5 text-md-left">
                                <div class="row align-items-center">
                                    <div class="col-md-6">
                                        <h2 class="mb-3 display-4">Help share the S List</h2>
                                        <p class="mb-0">
                                            Share this project with your friends. Here are some promotional
                                            materials to make it easier. Please tag!!!
                                        </p>
                                    </div>
                                    <div class="col-12 col-md-6 mt-4 text-md-right">
                                        <div class="d-flex flex-column"></div>
                                        <a href="flyer.jpeg" target="_blank" rel="noreferrer" class="btn btn-primary my-3 mx-2 mx-md-3">
                                            <FontAwesomeIcon icon={faFileImage} /> Story Flyer
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#100c08" fill-opacity="1" d="M0,192L0,224L288,224L288,160L576,160L576,256L864,256L864,192L1152,192L1152,128L1440,128L1440,320L1152,320L1152,320L864,320L864,320L576,320L576,320L288,320L288,320L0,320L0,320Z"></path></svg>
        </div>
    )
}

export default Share
