import axios from 'axios'

export const fetchNews = () => async dispatch => {
    const res = await axios.get('https://www.reddit.com/r/news/.json')

    return dispatch({
        type: 'FETCH_NEWS',
        payload: res
    })
}

export const fetchFunny = () => async dispatch => {
    const res = await axios.get('https://www.reddit.com/r/funny/.json')

    return dispatch({
        type: 'FETCH_FUNNY',
        payload: res
    })
}