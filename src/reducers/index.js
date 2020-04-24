import users from "./users";
import {combineReducers} from 'redux'
import { loadingBarReducer} from "react-redux-loading";
import questions from "./questions";
import loggedInUser from "./loggedInUser";
export default combineReducers({
    users,
    questions,
    loggedInUser,
    loadingBar:loadingBarReducer
})
