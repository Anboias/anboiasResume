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
      allContentfulPortfolioElement(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            id
            slug
            url
            title
            description {
              description
            }
            image {
              fluid(maxWidth: 450, toFormat: WEBP) {
                src
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  const edges = data.allContentfulPortfolioElement.edges
  return (
    <Layout>
      <Head title="Portfolio" />

      <Title title="Portfolio" />

      <div className="col-12 px-3XXXmy-3 w-100 display-inline-blockXXX">
        {/* <ol className="posts-custom"> */}

        {edges.map(edge => (
            <SectionPortfolio
              key={edge.node.id}
              title={edge.node.title}
              slug={edge.node.slug}
              description={edge.node.description.description}
              url={edge.node.url}
              image={edge.node.image}
            />
          ))}
        {/* </ol> */}
      </div>
    </Layout>
  )
}

export default Portfolio
