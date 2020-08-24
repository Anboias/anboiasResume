import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>ContactPage</h1>
      <p>Contact me, ok?</p>
      <p>
        Go to{" "}
        <Link to="https://twitter.com/" target="_blank">
          Twitter
        </Link>
      </p>
    </Layout>
  )
}

export default ContactPage
