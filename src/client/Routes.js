import React from 'react'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true,
            },
            {
                ...About,
                path: '/about'
            },
            {
                ...NotFound
            }
        ]
    }
]