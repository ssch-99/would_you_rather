import React, {Component} from 'react';
import {Avatar, Button, Card, Col, Collapse, Form, Input, Row, Tag} from "antd";
import {connect} from "react-redux";
import {handleAddQuestion, handleAnswerQuestion} from "../actions/questions";
import {Link} from "react-router-dom";

class Home extends Component {


    answer = (qId,answer) => {

        const {dispatch} = this.props
        dispatch(handleAnswerQuestion(this.props.loggedInUser.id,qId,answer))

    }


    render() {
        console.log(this.props.unAnsweredQuestions)
        return (
            <div className="App">
                <Row>
                    <Col span={12} offset={6}>
                        <br/>
                        <Collapse defaultActiveKey={['1']}>
                            <Collapse.Panel header="Unanswered Questions" key="1">
                                {Object.entries(this.props.unAnsweredQuestions).map(([key,question]) => {
                                    return (<Card title="Would you rather?" key={key} style={{ marginBottom: 20 }}  extra={<Link to={`/questions/${question.id}`}>More</Link>}>
                                        <Form name="basic">
                                            <Form.Item name="optionOne">
                                                <Button type="primary" htmlType="submit" onClick={() => this.answer(question.id,"optionOne")}>
                                                    {question.optionOne.text}
                                                </Button>
                                            </Form.Item>
                                            <Form.Item name="optionTwo">
                                                <Button type="primary" htmlType="submit" onClick={() => this.answer(question.id,"optionTwo")}>
                                                    {question.optionTwo.text}
                                                </Button>
                                            </Form.Item>

                                        </Form>

                                    </Card>)
                                })}
                            </Collapse.Panel>
                            <Collapse.Panel header="Answered Questions" key="2">
                                {Object.entries(this.props.answeredQuestions).map(([key,question]) => {
                                    return (<Card title="Would you rather?" key={key} style={{ marginBottom: 20 }}  extra={<Link to={`/questions/${question.id}`}>More</Link>}>
                                        <Form name="basic">
                                            <Form.Item name="optionOne">
                                                <Button type="primary" disabled='true' htmlType="submit" onClick={() => this.answer(key,'optionOne')}>
                                                    {question.optionOne.text}
                                                </Button>
                                                { question.optionOne.votes.includes(this.props.loggedInUser.id) ? (<Tag color="success">Selected</Tag>) : ''}
                                            </Form.Item>
                                            <Form.Item name="optionTwo">
                                                <Button type="primary" disabled='true' htmlType="submit" onClick={() => this.answer(key,'optionTwo')}>
                                                    {question.optionTwo.text}
                                                </Button>
                                                 { question.optionTwo.votes.includes(this.props.loggedInUser.id) ? (<Tag color="success">Selected</Tag>):''}
                                            </Form.Item>

                                        </Form>

                                    </Card>)
                                })}
                            </Collapse.Panel>
                        </Collapse>


                    </Col>

                </Row>
            </div>
        );
    }
}

function mapStateToProps({questions,loggedInUser}) {

    let answeredQuestionsKeys = Object.keys(questions).filter((q) => questions[q].optionOne.votes.includes(loggedInUser.id) || questions[q].optionTwo.votes.includes(loggedInUser.id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp);
    let unAnsweredQuestionsKeys =  Object.keys(questions).filter((q) => !questions[q].optionOne.votes.includes(loggedInUser.id) && !questions[q].optionTwo.votes.includes(loggedInUser.id)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    console.log(questions)
    return {
        answeredQuestions: answeredQuestionsKeys.reduce((r, k) => r.concat(questions[k]), []),
        unAnsweredQuestions: unAnsweredQuestionsKeys.reduce((r, k) => r.concat(questions[k]), []),
        loggedInUser
    }

}


export default connect(mapStateToProps)(Home);
