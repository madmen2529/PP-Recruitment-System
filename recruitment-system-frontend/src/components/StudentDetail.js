import React, { Component } from "react";
import { Button, Row, Col, List } from "antd";

import "antd/dist/antd.css";

export default class StudentDetail extends Component {
  state = {
    exams: [
      {
        key: 1,
        name: `Physical Test`,
        teacher_name: `Jane Doe`,
        type: `Phycology`
      }
    ],
    arrayOfDatas: [`lorem ipsum by {Teacher name} {Button}`],
    arrayOfDatas2: [`lorem ipsum by {Teacher name} {Your score}`],
    arrayOfDatas3: [`{Your score}`]
  };
  render() {
    return (
      <section id="exam-list-section">
        <div className="border text-center">
          <h3 className="mt-3">
            {this.state.exam.name} <Button type="danger">Continue</Button>
          </h3>
        </div>

        <Row>
          <Col span={12}>
            <List
              size="small"
              header={<div>Unfinish Exam</div>}
              bordered
              dataSource={arrayOfDatas}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
            <List
              className="mt-3"
              size="small"
              header={<div>Pass Exam</div>}
              bordered
              dataSource={arrayOfDatas2}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
          <Col span={12}>
            <List
              className="mt-3"
              size="large"
              header={<div>Your Highest Score</div>}
              footer={<div>...</div>}
              bordered
              dataSource={arrayOfDatas3}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
          </Col>
        </Row>
      </section>
    );
  }
}
