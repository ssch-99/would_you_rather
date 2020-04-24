import {LOGIN, LOGOUT} from "../actions/login";


export default function loggedInUser(state = null, action) {

    switch (action.type) {
        case LOGIN:
            return  action.user
        case LOGOUT:
            console.log("reducer logout")
            return null
        default:
            return state

    }

}
