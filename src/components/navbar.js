import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

// import headerStyles from './header.module.scss'

const Navbar = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-light shadow-lg p-0" id="mainNav" >
            {/* <div className="container "> */}
                {/* <div className="navbar-header">
                    <Link className="navbar-brand py-1 px-2 px-lg-3 text-dark font-weight-bold js-scroll-trigger" to="/">{data.site.siteMetadata.title}</Link>
                </div> */}
                <button 
                    className="navbar-toggler navbar-toggler-right font-weight-bold text-dark rounded" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarResponsive" 
                    aria-controls="navbarResponsive" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">Menu <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav m-auto mb-0">
                        <li className="nav-item mb-0"><Link className="nav-link text-dark font-weight-bold rounded active" to="/">Home</Link></li>
                        <li className="nav-item mb-0"><Link className="nav-link text-dark font-weight-bold rounded" to="/about">About</Link></li>
                        <li className="nav-item mb-0"><Link className="nav-link text-dark font-weight-bold rounded" to="/contact">Portfolio</Link></li>
                        <li className="nav-item mb-0"><Link className="nav-link text-dark font-weight-bold rounded" to="/blog">Blog</Link></li>
                    </ul>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Navbar
