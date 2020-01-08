import React, { Component } from "react";

import { Form, Icon, Input, Button, Checkbox, Row, Col } from "antd";

import "antd/dist/antd.css";

import "./Login.css";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <section id="login-section">
        <h3 className="pt-4 text-center"> Login </h3>

        <Form onSubmit={this.handleSubmit} className="login-form pt-2">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Row>
              <Col span={12}>
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>Remember me</Checkbox>)}
              </Col>
              <Col span={12} className="text-right">
                <a className="login-form-forgot text-right" href="">
                  Forgot password
                </a>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}

const retFrom = Form.create({ name: "normal_login" })(Login);

export default retFrom;
