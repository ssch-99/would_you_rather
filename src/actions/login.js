export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'



export function login(user) {

    return {
        type: LOGIN,
        user
    }
}

export function logout() {

    return {
        type: LOGOUT
    }
}

export function handleLogin(user) {
console.log("user", user)

    return (dispatch) => {
        dispatch(login(user))
    }

}
export function handleLogout() {

    console.log("handlelogouts")
    return (dispatch) => {
        dispatch(logout())
    }

}
