import { combineReducers } from 'redux'
import newsReducer from './newsReducer'
import funnyReducer from './funnyReducer'

export default combineReducers({
    news: newsReducer,
    funny: funnyReducer
})