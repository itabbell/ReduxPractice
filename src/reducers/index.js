export default (state = 0, action) => {
    console.log('storeState',state);
    switch (action.type) {
        case 'CHG_BG':
            return {...state, bgColor: action.color}
        case 'CHG_TEXT':
            return ({...state, color: action.color})
        case 'RESET':
            return action.state
        default:
        return state
    }
}
