import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

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
        <footer className="footer fixed-bottom bg-dark text-white-50">
            <div className="container text-center my-2">
                <p className="my-auto p-0 m-0">Created by {data.site.siteMetadata.author}, © 2020</p>
                <p className="my-auto p-0 m-0">© Facebook | © Twitter | © Github</p>
            </div>
        </footer>
    )
}

export default Footer