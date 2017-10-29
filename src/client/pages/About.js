import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const About = () => {
    return (
        <div>
            <Helmet>
                <meta name="keywords" content="react, ssr" />
                <title>About</title>
            </Helmet>
            <h1>About</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default {
    component: About
}