import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>AboutPage</h1>
            <p>About me, ok?</p>
            <p>Please feel free to <Link to="/contact">Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage