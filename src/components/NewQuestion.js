import React, {Component} from 'react';
import {Col, Row, Input, Form, Button} from "antd";
import {handleAddQuestion} from "../actions/questions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class NewQuestion extends Component {


     onFinish = values => {
         const { dispatch } = this.props
        console.log('Success:', values);

        const question = {
            ...values,
            author: "sarahedo"
        }
        console.log(question)
        dispatch(handleAddQuestion(question))
         this.props.history.push('/home')

    };

     onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };


    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={12} offset={6}>
                        <h2>Create New Question</h2>
                        <h3>Would you rather?...</h3>
                        <Form name="basic" onFinish={this.onFinish}
                              onFinishFailed={this.onFinishFailed}>
                            <Form.Item label="Option One" name="optionOneText">
                                <Input/>
                            </Form.Item>
                            <Form.Item label="Option Two" name="optionTwoText">
                                <Input/>
                            </Form.Item>
                            <Button type="primary" htmlType="submit">
                                Save
                            </Button>
                        </Form>

                    </Col>

                </Row>
            </div>
        );
    }
}

export default withRouter(connect()(NewQuestion));
