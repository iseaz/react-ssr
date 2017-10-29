export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_FUNNY':
            return action.payload.data
        
        default:
            return state
    }
}