import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProfilePic from "../media/profile.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDownload } from "@fortawesome/free-solid-svg-icons"

// import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAsset {
        title
        file {
          url
        }
      }
    }
  `)

  const url = data.contentfulAsset.file.url

  return (
    // <header className="mastheadDISABLED h-100 my-auto mx-auto p-3">
    <div className="row h-100 mb-0">
      <div className="col-12">
        <img
          src={ProfilePic}
          className="rounded-circle image-custom shadow-lg mt-3 mx-auto"
          alt="100x100"
        />
      </div>
      <div className="col-12 h-100">
        <div className="text-center w-50X mx-auto my-0">
          <p className="p-0 mt-2 mb-0 h3 w-100">Bogdan Iasinovschi</p>
          <p className="text-secondary p-0 m-0">
            <small>React &bull; Gatsby &bull; Bootstrap</small>
          </p>
        </div>
      </div>
      <div className="col-12 h-100">
        <div className="text-center w-50 mx-auto my-3">
          <a
            href={`${url}`}
            target="_blank"
            type="application/octet-stream"
            download
          >
            <button
              type="button"
              className="btn btn-outline-info btn-cv-custom mr-3 p-1 h6"
            >
              CV{" "}
              <FontAwesomeIcon
                icon={faDownload}
                className="ml-0"
              ></FontAwesomeIcon>
            </button>
          </a>
          {/* <button
            type="button"
            className="btn btn-outline-info btn-contact-custom py- px-"
          >
            Contact
          </button> */}
        </div>
      </div>
    </div>
    // </header>
  )
}

export default Header
