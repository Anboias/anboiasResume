import React from "react"
// import { Link, graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

// import headerStyles from './header.module.scss'

const Navbar = () => {
  //   const data = useStaticQuery(graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `)

  return (
    <nav
      className="navbar navbar-expand-sm navbar-darkDISABLED bg-lightDISABLED shadow-lgDISABELD w-100 p-0 m-0 mt-3"
      id="mainNav"
    >
      {/* <div className="container "> */}
      {/* <div className="navbar-header">
                    <Link className="navbar-brand py-1 px-2 px-lg-3 text-dark font-weight-bold js-scroll-trigger" to="/">{data.site.siteMetadata.title}</Link>
                </div> */}
      {/* <button
        className="navbar-toggler navbar-toggler-right font-weight-bold text-dark rounded mr-auto p-2 my-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon className="mr-2" icon={faBars}></FontAwesomeIcon>
        Menu
      </button> */}
      <div
        className="collapseX navbar-custom navbar-collapse my-3DISABLED  mx-auto"
        id="navbarResponsive"
      >
        <div className="ul-wrapper mx-auto m-0 py-0">
          <ul className="navbar-nav m-auto">
            <li className="nav-item m-0 pl-0 pr-3">
              <Link
                className="nav-link m-0 p-1"
                activeClassName="active-nav-item"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item m-0 pl-0 pr-3">
              <Link
                className="nav-link m-0 p-1"
                activeClassName="active-nav-item"
                to="/workeducation"
              >
                Work &amp; Education
              </Link>
            </li>
            <li className="nav-item m-0 pl-0 pr-3">
              <Link
                className="nav-link m-0 p-1"
                activeClassName="active-nav-item"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            {/* <li className="nav-item m-0 pl-0 pr-3">
              <Link
                className="nav-link m-0 p-1"
                activeClassName="active-nav-item"
                to="/portfolio"
              >
                Portfolio
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
      {/* </div> */}
    </nav>
  )
}

export default Navbar
