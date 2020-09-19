import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SectionWorkEducation from "../components/sectionWorkEducation"
import Title from "../components/title"

import { VerticalTimeline } from "react-vertical-timeline-component"

const WorkEducation = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulAnboiasResume(
        filter: { type: { regex: "/work|education/" } }
        sort: { fields: order, order: ASC }
      ) {
        edges {
          node {
            id
            title
            subtitle
            content {
              content
            }
            type
            dateFrom
            dateTo
            order
          }
        }
      }
    }
  `)
  const edges = data.allContentfulAnboiasResume.edges
  return (
    <Layout>
      <Head title="Work &amp; Education" />

      <Title title="Work &amp; Education" />
    
    <div className="my-3 mx-auto">

      <VerticalTimeline>
        {edges.map(edge => {
          if (edge) {
            return (
              <>
                <SectionWorkEducation
                  key={edge.node.id}
                  title={edge.node.title}
                  subtitle={edge.node.subtitle}
                  content={edge.node.content.content}
                  type={edge.node.type}
                  dateFrom={edge.node.dateFrom}
                  dateTo={edge.node.dateTo}
                />
              </>
            )
          } else {
            return null
          }
        })}
      </VerticalTimeline>
      </div>
    </Layout>
  )
}

export default WorkEducation
