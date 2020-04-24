import React, {Component} from 'react';
import {Button, Card, Col, Form, Row, Select} from "antd";
import {connect} from "react-redux";
import {handleLogin} from "../actions/login";
import {Redirect, withRouter} from "react-router-dom";

class Login extends Component {

    state = {
        redirect: false
    }

    onFinish = values => {
        const { dispatch } = this.props
        console.log('Success:', this.props.users[values.user]);

        dispatch(handleLogin(this.props.users[values.user]))

        this.props.history.push('/home')

    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    render() {

            return (
                <div className="App">
                    <Row>
                        <Col span={8} offset={8} style={{textAlign: 'center', alignItems: 'center'}}>
                            <br/>
                            <h1>Login</h1>
                            <h2>{this.props.loggedInUser}</h2>
                            <Form onFinish={this.onFinish}
                                  onFinishFailed={this.onFinishFailed}>
                                <Form.Item name="user">
                                    <Select placeholder="Select user">

                                        {Object.entries(this.props.users).map(([key, user]) => (

                                            <Select.Option value={key} key={key}>{user.name}</Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit">Log In</Button>
                                </Form.Item>

                            </Form>
                        </Col>
                    </Row>
                </div>
            );
        }

}

function mapStateToProps({users,loggedInUser}) {

    return {
        users,
        loggedInUser
    }

}

export default withRouter(connect(mapStateToProps)(Login));
