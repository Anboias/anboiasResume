import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import Title from "../components/title"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />

      <Title title="Contact" />

      <div className="col-12 px-3 my-3 w-100 display-inline-blockXXX">
        {/* <ol className="posts-custom"> */}

        <div>
          <ul>
            <li>biasinovschi@gmail.com</li>
            <li>0746962776</li>
          </ul>
        </div>
        {/* {edges.map(edge => (
            <SectionPortfolio
              slug={edge.node.slug}
              title={edge.node.title}
              publishedDate={edge.node.publishedDate}
            />
          ))} */}
        {/* </ol> */}
      </div>
    </Layout>
  )
}

export default ContactPage
