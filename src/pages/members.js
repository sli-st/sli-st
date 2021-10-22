import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Footer from "../components/footer"
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SignUpForm from "../components/signupform"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="Members" >
      <div className="intro-bg container-fluid pb-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <section>
              <div className="sticky-top bg-black border-bottom border-primary py-3">
                <SignUpForm />
              </div>
              <div className="pt-3" id="nav-tabContent">
                <ol className="text-primary text-end">
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                  <li>@your.Social.Media.Handle</li>
                </ol>
              </div>
            </section>



          </div>
        </div>
      </div>
    </Layout >
  )
}

export const query = graphql`
query {
  allMdx(
    filter: {fileAbsolutePath: {regex: "/content/perks/"}}
    sort: {fields: frontmatter___flyer___relativeDirectory}
  ) {
    nodes {
      body
      frontmatter {
        flyer {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}

`

export default BlogPage
