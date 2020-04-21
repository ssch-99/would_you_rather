import { _getUsers,_getQuestions,_saveQuestion,_saveQuestionAnswer} from "./_DATA";



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
