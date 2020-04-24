import {hideLoading, showLoading} from "react-redux-loading";
import {saveQuestion, saveQuestionAnswer} from "../utils/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions) {

    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {

    return {
        type: ADD_QUESTION,
        question
    }

}

export function answerQuestion(user,questionId,answer){
    console.log("answerquestion method called")
    return {
        type: ANSWER_QUESTION,
        authedUser: user,
        qId:questionId,
        answer


    }
}




export function handleAddQuestion(question) {

    return (dispatch) => {

        dispatch(showLoading())

        return saveQuestion(question).then((question) => dispatch(addQuestion(question))).then(() => hideLoading())

    }

}

export function handleAnswerQuestion(user,questionId,answer) {

    return (dispatch) => {

        dispatch(showLoading())

        return saveQuestionAnswer({authedUser:user,qid:questionId,answer:answer}).then(() => {
            console.log("finish")
            dispatch(answerQuestion(user,questionId,answer))
            console.log("finish 2")
        })

    }

}
