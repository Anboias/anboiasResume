import React from "react"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"

import "../styles/index.scss"

const Layout = props => {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row borderDISABLED border-info p-0 m-0">
        <div className="col-12 borderDISABLED border-success p-0 m-0">
          <div className="w-75 mx-auto">
            <Navbar />
          </div>
        </div>
      </div>
      <div className="row my-3 p-3 mx-auto home">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
