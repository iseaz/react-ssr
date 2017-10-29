import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import serialize from 'serialize-javascript'
import { renderRoutes } from 'react-router-config'
import { Helmet } from 'react-helmet'
import Routes from '../client/Routes'

export default (req, store, context) => {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    )

    const helmet = Helmet.renderStatic()
    
    return `
        <!doctype>
        <html>
            <head>
                <meta charset="utf-8">
                ${helmet.meta.toString()}
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
                <link rel="shortcut icon" href="https://github.com/favicon.ico">
                ${helmet.title.toString()}
            </head>
            <body>
                <div id="root">${content}</div>
                <script>window.INITIAL_STATE=${serialize(store.getState())}</script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `
}