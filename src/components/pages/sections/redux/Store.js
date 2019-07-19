import {SERVER_NAME} from "../../../../Constants"
import axios from 'axios'
const redux = require('redux')

const reducerInitialState = {
    interns: [],
    internBySourse: [],
    courseList: []
}
const reducer = (state = reducerInitialState, action) => {
    switch (action.type) {
        case "GET_ALL_INTERN":
            return {...state,interns:action.getInterns}
        case "GET_INTERN_BY_SOURSE":
            return {...state,internBySourse:action.getInternBySourse}
        case "GET_ALL_COURSE":
            return {...state,courseList:action.getCourse}
        default:
            return state
    }
}

var store = redux.createStore(reducer)


axios.get(SERVER_NAME + 'courses')
    .then((res) => {
        store.dispatch({type:"GET_ALL_COURSE",getCourse:res.data})
    })

    
export default store