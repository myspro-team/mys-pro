import {SERVER_NAME} from "../../../../Constants"
import axios from 'axios'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

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

const store = createStore(reducer,applyMiddleware(thunk))
    
export default store