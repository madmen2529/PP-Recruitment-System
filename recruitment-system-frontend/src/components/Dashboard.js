import React, { Component } from "react";
import { Button, Row, Col, List } from "antd";

import "antd/dist/antd.css";

export default class Dashboard extends Component {
  state = {
    exams: [
      {
        key: 1,
        name: `Physical Test`,
        teacher_name: `Jane Doe`,
        type: `Phycology`
      }
    ],
    arrayOfDatas: [
      `lorem ipsum by {Teacher name} {View Button}`,
      `lorem ipsum by {Teacher name} {View Button}`,
      `lorem ipsum by {Teacher name} {View Button}`
    ]
  };
  render() {
    return (
      <section id="exam-list-section">
        <div className="border text-center">
          <h3 className="mt-3">
            {this.state.exam.name} <Button type="danger">Continue</Button>
          </h3>
        </div>

        <List
          size="small"
          header={<div>Your exams list</div>}
          bordered
          dataSource={arrayOfDatas}
          renderItem={item => <List.Item>{item}</List.Item>}
        />

        <Row>
          <Col span={24 / 3}>
            <Button type="primary">Total n</Button>
          </Col>
          <Col span={24 / 3}>
            <Button type="danger">Fail n</Button>
          </Col>
          <Col span={24 / 3}>
            <Button type="success">Pass N</Button>
          </Col>
        </Row>
      </section>
    );
  }
}
