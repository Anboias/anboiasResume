import React from "react"
import { graphql, useStaticQuery } from "gatsby"

// import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer className="footer fixed-bottom">
      <div className="text-center py-1 footer-custom">
        <p className="my-auto p-0 m-0">
          Created by {data.site.siteMetadata.author}, © 2020
        </p>
        <p className="my-auto p-0 m-0">© Facebook | © Twitter | © Github</p>
      </div>
    </footer>
  )
}

export default Footer
