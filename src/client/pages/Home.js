import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { fetchNews, fetchFunny } from '../actions'

class Home extends React.Component {
    render(){
        return (
            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <h1>Home</h1>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

const loadData = store => {
    return store
}

const mapStateToProps = ({ news, funny }) => {
    return { news, funny }
}

export default {
    loadData,
    component: connect(mapStateToProps, { fetchNews, fetchFunny })(Home)
}