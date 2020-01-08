import React, { Component } from "react";

import { Button, Row, Col, Upload, Icon, message } from "antd";

import "antd/dist/antd.css";

const { Dragger } = Upload;

export default class CreateResume extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const props = {
      name: "file",
      multiple: true,
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      onChange(info) {
        const { status } = info.file;
        if (status !== "uploading") {
          console.log(info.file, info.fileList);
        }
        if (status === "done") {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
          message.error(`${info.file.name} file upload failed.`);
        }
      }
    };

    return (
      <section id="login-section">
        <h3 className="pt-4 text-center"> Create Resume </h3>

        <Dragger {...props}>
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload. Strictly prohibit from
            uploading company data or other band files
          </p>
        </Dragger>

        <p className="text-muted mt-3">Upload Resume (Max 5 MB)</p>

        <Button type="primary" htmlType="submit" className="mt-1" block>
          Confirm
        </Button>
      </section>
    );
  }
}
