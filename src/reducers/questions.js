import {ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS} from "../actions/questions";


export default function questions(state = {},action) {

    switch (action.type) {

        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question
            }
        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qId]: {
                    ...state[action.qId],
                    optionOne: {
                        ...state[action.qId].optionOne,
                        votes: action.answer == 'optionOne' ? state[action.qId].optionOne.votes.concat([action.authedUser]) : state[action.qId].optionOne.votes
                    },
                    optionTwo: {
                        ...state[action.qId].optionTwo,
                        votes: action.answer == 'optionTwo' ? state[action.qId].optionTwo.votes.concat([action.authedUser]) : state[action.qId].optionTwo.votes
                    }
                }
            }

        default:
            return state

    }

}
