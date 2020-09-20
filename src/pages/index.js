import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SectionIndex from "../components/sectionIndex"
import Title from "../components/title"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAnboiasResume(
        filter: { type: { regex: "/about.*/" } }
        sort: { fields: order, order: ASC }
      ) {
        edges {
          node {
            id
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
      <Head title="About" />

      <Title title="About Me" />

      {edges.map(edge => {
        if (edge.node.type === "about-me") {
          return (
            // null
            <SectionIndex
              key={edge.node.id}
              title={edge.node.title}
              content={edge.node.content.content}
            />
          )
        } else {
          return null
        }
      })}

      <Title title="About My Job" />

      {edges.map(edge => {
        if (edge.node.type === "about-my-job") {
          return (
            <SectionIndex
              key={edge.node.id}
              title={edge.node.title}
              content={edge.node.content.content}
            />
          )
        } else {
          return null
        }
      })}
    </Layout>
  )
}

export default IndexPage
