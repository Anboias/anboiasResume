import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faFacebook, faTwitter, faGithub } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
// import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="footer fixed-bottom">
      <div className="text-center py-1 footer-custom">
        <p className="my-auto p-0 m-0">
          Created by {data.site.siteMetadata.author}, © 2020
        </p>
        <a
          href="https://www.facebook.com/bogdan.iasinovschi"
          className="text-reset"
          target="_blank"
        >
          <p className="my-auto p-0 m-0 d-inline">
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </p>
        </a>
        <p className="px-2 d-inline">|</p>
        <a
          href="https://twitter.com/iasinovschib"
          className="text-reset"
          target="_blank"
        >
          <p className="my-auto p-0 m-0 d-inline">
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </p>
        </a>
        <p className="px-2 d-inline">|</p>
        <a
          href="https://www.linkedin.com/in/bogdan-iasinovschi-a1a62bb9/"
          className="text-reset"
          target="_blank"
        >
          <p className="my-auto p-0 m-0 d-inline">
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </p>
        </a>
        <p className="px-2 d-inline">|</p>
        <a
          href="https://github.com/Anboias"
          className="text-reset"
          target="_blank"
        >
          <p className="my-auto p-0 m-0 d-inline">
            <FontAwesomeIcon icon={faGithub} /> Github
          </p>
        </a>
      </div>
    </footer>
  )
}

export default Footer
