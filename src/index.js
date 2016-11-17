import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Scoreboard from './components/Scoreboard.jsx'
import reducer from './reducers/index'

//InitialState
const initState = {
    bgColor: 'white',
    color: 'black',
}

//Store
const store = createStore(reducer, initState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//Actions
function changeBG(color){
    return {
        type: 'CHG_BG',
        color: color,
    }
}

function changeText(color){
    return {
        type: 'CHG_TEXT',
        color: color,
    }
}

const reset = { type: 'RESET', state: initState}

//mapStateToProps
function mapStateToProps(state){
    return {
        bgColor: state.bgColor,
        color: state.color,
    }
}

//mapDispatchToProps
function mapDispatchToProps(dispatch){
    return {
        changeBG: (color) => dispatch(changeBG(color)),
        changeText: (color) => dispatch(changeText(color)),
        reset: () => dispatch(reset),
    }
}

const App = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Scoreboard)

function render(){
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )
}


render()
store.subscribe(render)
