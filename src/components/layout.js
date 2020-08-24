import React from "react"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"

import "../styles/index.scss"

// import layoutStyles from './layout.module.scss'

const Layout = props => {
  return (
    <div className="background-color-gray">
      <Header />
      <Navbar />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
