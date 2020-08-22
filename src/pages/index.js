import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="home"/>
      <h1>Hello,</h1>
      <h2>I'm Bogdan, bla bla bla, bla bla bla</h2>
      <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage
