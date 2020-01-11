import React, { Component } from "react";

import { Form, Input, Checkbox, Button } from "antd";

import "antd/dist/antd.css";

class ManageExam extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 0 },
        sm: { span: 0 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <section id="register-section">
        <h3 className="mt-3 mb-3">Manage Exam</h3>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "Please input exam name!"
                }
              ]
            })(<Input placeholder="Name" />)}
          </Form.Item>
          <Form.Item hasFeedback>
            {getFieldDecorator("description", {
              rules: [
                {
                  required: true,
                  message: "Please input exam description!"
                }
              ]
            })(<Input.TextArea placeholder="password" />)}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </section>
    );
  }
}

const Formz = Form.create({ name: "register" })(ManageExam);
export default Formz;
