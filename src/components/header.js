import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import ProfilePic from '../media/profile.png'

// import headerStyles from './header.module.scss'

const Header = () => {
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
        // <div>
        //     <div className="container">
        //         <h1>Header</h1>
        //     </div>
        // </div>
            <header className="masthead">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 my-auto">
                            {/* <h1 className="font-weight-bold text-light wow display-1">NU TOT EI!</h1> */}
                            <img 
                                src={ProfilePic} 
                                className="rounded-circle image-custom shadow-lg my-3" 
                                alt="100x100"
                            />
                            <div className="text-center text-custom-white mb-3 pb-3">
                                <p className="m-0 p-0 h2">Hello,</p>
                                <p className="m-0 p-0">I am <strong>Bogdan Iasinovschi,</strong></p>
                                <p className="m-0 p-0"><strong>29</strong> years old, </p>
                                <p className="m-0 p-0">based in <strong>Bucharest, Romania</strong></p>
                                <p className="m-0 p-0">and I am a passionate <strong>Web Developer</strong>, specialized in <strong>React</strong> and <strong>Bootstrap</strong>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    //     <nav className="navbar navbar-expand-sm navbar-dark bg-transparent p-4 fixed-top" id="mainNav" >
    //     <div className="container">
    //         <a className="navbar-brand text-light font-weight-bold js-scroll-trigger" href="/">#nutotei</a>
    //         <button 
    //             className="navbar-toggler navbar-toggler-right font-weight-bold text-light rounded" 
    //             type="button" 
    //             data-toggle="collapse" 
    //             data-target="#navbarResponsive" 
    //             aria-controls="navbarResponsive" 
    //             aria-expanded="false" 
    //             aria-label="Toggle navigation">Meniu <i className="fas fa-bars"></i>
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarResponsive">
    //             <ul className="navbar-nav ml-auto">
    //                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link active py-1 px-2 px-lg-3 text-light font-weight-bold rounded js-scroll-trigger" href="/">ACASĂ</a>
    //                 </li>
    //                 <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-1 px-2 px-lg-3 text-light font-weight-bold rounded js-scroll-trigger" href="#footer">CV-URI</a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>
        // <header className="header-custom"> 
        //     <h1 className="">
        //         <Link className="title-custom" to="/">
        //             {data.site.siteMetadata.title}
        //         </Link>
        //     </h1>
        //     <nav>
        //         <ul className="nav-list-custom">
        //             <li><Link className="nav-item-custom" activeClassName="active-nav-item-custom" to="/">Home</Link></li>
        //             <li><Link className="nav-item-custom" activeClassName="active-nav-item-custom" to="/contact">Contact</Link></li>
        //             <li><Link className="nav-item-custom" activeClassName="active-nav-item-custom" to="/about">About</Link></li>
        //             <li><Link className="nav-item-custom" activeClassName="active-nav-item-custom" to="/blog">Blog</Link></li>
        //         </ul>
        //     </nav>
        // </header>
    )
}

export default Header
