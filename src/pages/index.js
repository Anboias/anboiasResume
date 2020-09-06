import React from "react"
// import { Link } from 'gatsby'
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SectionIndex from "../components/sectionIndex"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAnboiasResume(filter: { type: { regex: "/about.*/" } }) {
        edges {
          node {
            title
            content {
              content
            }
            type
          }
        }
      }
    }
  `)
  const edges = data.allContentfulAnboiasResume.edges
  return (
    <Layout>
      <Head title="home" />

        
        <Title title="About Me" />

        {edges.map(edge => {
          if (edge.node.type === "about-me") {
            return (
              // null
              <SectionIndex
                title={edge.node.title}
                content={edge.node.content.content}
              />
            )
          } else {
            return
          }
        })}

        <Title title="About My Job" />


        {edges.map(edge => {
          if (edge.node.type === "about-my-job") {
            return (
              // null
              <SectionIndex
                title={edge.node.title}
                content={edge.node.content.content}
              />
            )
          } else {
            return
          }
        })}

        {/* section */}
    </Layout>
  )
}

const Title = ({ title }) => {
  return (
    <div className="col-12">
      <h2 className="m-0 mb-0 pb-1 pt-0 border-bottom border-warning w-auto d-inline-block">{title}</h2>
    </div>
  )
}

export default IndexPage
