import React, {Component} from 'react';
import {Row, Col, Avatar} from 'antd';
import {connect} from "react-redux";
import { Card } from 'antd';

class LeaderBoard extends Component {


    render() {
        console.log(this.props.users)
        console.log("questions: ", this.props.questions)
        return (
            <div className="App">
                <Row>
                    <Col span={12} offset={6}>

                        <h2>Leader Board</h2>

                        {Object.entries(this.props.users).map(([key,user]) => (

                            <Card key={key} style={{ marginBottom: 20 }}>
                                <h1><Avatar src={user.avatarURL}></Avatar> {user.name}</h1>

                                Answered questions: {user.questionsAnswered}<br/>
                                Created questions: {user.questionsAsked}<br/>
                                Score: {user.score }
                            </Card>
                            ))}

                    </Col>

                </Row>
            </div>
        );
    }
}

/*
function mapStateToProps({users,questions}) {

    const userIds = Object.keys(users).sort((a,b) =>  (Object.keys(users[a].answers).length + Object.keys(users[a].questions).length) > Object.keys(users[b].answers).length + Object.keys(users[b].questions).length)

    var orderedUsers = []

    userIds.map((id) => {
        orderedUsers.push(users[id])
    })


    return {
        users: orderedUsers,
        questions
    }

}
*/

function mapStateToProps({users,questions}) {

    console.log("users before map",users)
    Object.entries(users).map(([key,user]) => {


        var countQuestionsAnswered = Object.keys(questions).filter((q) => questions[q].optionOne.votes.includes(user.id) || questions[q].optionTwo.votes.includes(user.id)).length
        var countQuestionsAsked =  Object.keys(questions).filter((q) => questions[q].author === user.id).length
        user.questionsAnswered = countQuestionsAnswered
        user.questionsAsked = countQuestionsAsked
        user.score = countQuestionsAnswered + countQuestionsAsked
    })


    return {
        users: Object.keys(users).sort((a,b) => (users[b].score  - users[a].score)).reduce((r, k) => r.concat(users[k]), []),
        questions
    }

}

export default connect(mapStateToProps)(LeaderBoard);
