import * as React from 'react'
import Layout from '../../components/layout'
import Seo from "../../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Perks" >
      <Seo title="Perks" />
      <div className="container-fluid pb-5 mb-5">
        <div className="row justify-content-center sticky-top">
          <div className="col-md-5">
            <nav className="bg-black pt-3 pb-3 border-bottom border-primary">
              <div className="nav nav-justified gap-2 mx-auto d-md-flex justify-content-md-center" id="nav-tab" role="tablist">
                <button className="nav-link btn btn-outline-secondary active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">SLi.ST</button>
                <button className="nav-link btn btn-outline-secondary text-decoration-none" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Community Colaboración</button>
              </div>
            </nav>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              <div className="tab-content mx-auto pt-2" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <section>
                    <div className="row justify-content-around align-items-center py-3">
                      <div className="col-12 text-secondary">
                        <div class="vstack gap-4">
                          <iframe src="https://open.spotify.com/embed/playlist/1D9cXaZGPHARI3Z1ZzqJnz?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          <iframe src="https://open.spotify.com/embed/playlist/1n4GTkno55CSwRnLAhmVg7?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          <iframe src="https://open.spotify.com/embed/playlist/5USNhlJkSwWCWCdqQ7baTn?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          <iframe src="https://open.spotify.com/embed/playlist/0ftITaaN7ic6RBbBb1po4b?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          <iframe src="https://open.spotify.com/embed/playlist/7wEqFGMbGzQWb2PxTy4Sgp?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          <iframe src="https://open.spotify.com/embed/playlist/3LqX3dDJArSe1zCt1EX9Qw?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          <iframe src="https://open.spotify.com/embed/playlist/6RSIta0uDCBDMj15OZLyx9?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                          <iframe src="https://open.spotify.com/embed/playlist/2RyQCIqQQ9eHFzqJyRzz9I?theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        </div>


                      </div>
                    </div>
                  </section>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                  <div className="row justify-content-around align-items-center py-3">
                    <div className="col-12 text-secondary">
                      <div class="vstack gap-4">
                        <iframe src="https://open.spotify.com/embed/playlist/5vLHCirFrDlpCor1jcEDRZ" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe src="https://open.spotify.com/embed/playlist/0Zue240ZtsaxPV55C1u4fZ" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe src="https://open.spotify.com/embed/playlist/6kHuGREot3OpkT9N6B8uWT" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe src="https://open.spotify.com/embed/playlist/19YsiSHqN1WPBVA6FSInWr" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe src="https://open.spotify.com/embed/playlist/1FipJNdUrDkfwzrsWQ15u5" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe src="https://open.spotify.com/embed/playlist/0msKUi6HUvPrYMOMjIj0nU" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe src="https://open.spotify.com/embed/playlist/6HwNzll3TjsLItKuVJy38t" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default BlogPage
