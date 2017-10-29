import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'
import reducers from './reducers'

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk))

hydrate(
    <Provider store={store}>
        <BrowserRouter>
            {renderRoutes(Routes)}
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
)