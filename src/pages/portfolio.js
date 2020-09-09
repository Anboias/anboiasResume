import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import SectionPortfolio from "../components/sectionPortfolio"
import Title from "../components/title"

// import blogStyles from './blog.module.scss'

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
              json
            }
          }
        }
      }
    }
  `)
  const edges = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <Head title="Portfolio" />

      <Title title="Portfolio" />

      <div className="col-12 px-3 my-3 w-100 display-inline-blockXXX">
        {/* <ol className="posts-custom"> */}
          {edges.map(edge => (
            <SectionPortfolio
              slug={edge.node.slug}
              title={edge.node.title}
              publishedDate={edge.node.publishedDate}
            />
          ))}
        {/* </ol> */}
      </div>
    </Layout>
  )
}

export default Portfolio
