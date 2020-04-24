import React, {Component} from 'react';
import {connect} from "react-redux";
import {Avatar, Button, Card, Col, Form, Row, Tag} from "antd";
import {handleAnswerQuestion} from "../actions/questions";

class Question extends Component {

    answer = (qId,answer) => {

        const {dispatch} = this.props
        dispatch(handleAnswerQuestion(this.props.loggedInUser.id,qId,answer))

    }

    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={12} offset={6}>
                        <br/>

                        {this.props.question === undefined ? <p>404 - Not found</p> :
<div>
                        {!this.props.question.optionOne.votes.includes(this.props.loggedInUser.id) && !this.props.question.optionTwo.votes.includes(this.props.loggedInUser.id) ?
                            <Card key={this.props.question.id} style={{ marginBottom: 20 }}>
                                <p>{this.props.question.author} <Avatar src={this.props.users[this.props.question.author].avatarURL}></Avatar> asks: </p>
                                <h1>Would you rather?</h1>
                                <Form name="basic">
                                    <Form.Item name="optionOne">
                                        <Button type="primary" htmlType="submit" onClick={() => this.answer(this.props.question.id,"optionOne")}>
                                            {this.props.question.optionOne.text}
                                        </Button>
                                    </Form.Item>
                                    <Form.Item name="optionTwo">
                                        <Button type="primary" htmlType="submit" onClick={() => this.answer(this.props.question.id,"optionTwo")}>
                                            {this.props.question.optionTwo.text}
                                        </Button>
                                    </Form.Item>

                                </Form>

                            </Card>
                            :
                            <Card key={this.props.question.id} style={{ marginBottom: 20 }} >
                                <Form name="basic">
                                    <Form.Item>
                                        <Button type="primary" disabled htmlType="submit" onClick={() => this.answer(this.props.question.id,'optionOne')}>
                                            {this.props.question.optionOne.text}
                                        </Button>
                                          { this.props.question.optionOne.votes.includes(this.props.loggedInUser.id) ? (<Tag color="success">Selected</Tag>) : ''}
                                          <Tag color="processing">{this.props.question.optionOne.votes.length} voted for that option ({this.props.question.optionOne.votes.length/ (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length) * 100} %)</Tag>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button type="primary" disabled htmlType="submit" onClick={() => this.answer(this.props.question.id,'optionTwo')}>
                                            {this.props.question.optionTwo.text}
                                        </Button>
                                         { this.props.question.optionTwo.votes.includes(this.props.loggedInUser.id) ? (<Tag color="success">Selected</Tag>):''}
                                        <Tag color="processing">{this.props.question.optionTwo.votes.length} voted for that option ({this.props.question.optionTwo.votes.length/ (this.props.question.optionOne.votes.length + this.props.question.optionTwo.votes.length) * 100} %) </Tag>
                                    </Form.Item>

                                </Form>

                            </Card>

                        }
</div>
                        }
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps({loggedInUser,questions,users}, props) {

    const {id} =  props.match.params

    return{
        question: questions[id],
        loggedInUser,
        users
    }

}

export default connect(mapStateToProps)(Question);
