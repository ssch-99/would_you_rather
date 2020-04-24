import { _getUsers,_getQuestions,_saveQuestion,_saveQuestionAnswer} from "./_DATA";
import {showLoading,hideLoading} from "react-redux-loading";
import {receiveUsers} from "../actions/users";
import {receiveQuestions} from "../actions/questions";


export function getInitialData() {

    return Promise.all([
        _getQuestions(),
        _getUsers()
    ]).then(([questions,users]) => ({
        questions,
        users
    }))
}

export function saveQuestion(question){
    return _saveQuestion(question)
}

export function saveQuestionAnswer(answer) {

    return _saveQuestionAnswer(answer)
}

export function handleInitialData() {

    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData().then(({questions,users}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}
