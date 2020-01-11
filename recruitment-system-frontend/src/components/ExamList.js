import React, { Component } from "react";
import { Table } from "antd";

import "antd/dist/antd.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    render: text => <a>{text}</a>
  },
  {
    title: "Teacher",
    dataIndex: "teacher_name"
  },
  {
    title: "Exam Type",
    dataIndex: "type"
  },
  {
    title: "Action",
    dataIndex: "button"
  }
];

export default class ExamList extends Component {
  state = {
    exams: [
      {
        key: 1,
        name: `Physical Test`,
        teacher_name: `Jane Doe`,
        type: `Phycology`,
        button: <Button type="primary">View</Button>
      },
      {
        key: 2,
        name: `Physical Test`,
        teacher_name: `Jane Doe`,
        type: `Phycology`,
        button: <Button type="primary">View</Button>
      },
      {
        key: 3,
        name: `Physical Test`,
        teacher_name: `Jane Doe`,
        type: `Phycology`,
        button: <Button type="primary">View</Button>
      }
    ]
  };
  render() {
    return (
      <section id="exam-list-section">
        <div className="text-center">
          <h3 className="mt-3">{this.state.exam.name}</h3>
        </div>
        <Table
          className="mt-3"
          columns={columns}
          dataSource={this.state.exams}
          bordered
          title={() => "Exam type"}
          footer={() => "Footer"}
        />
      </section>
    );
  }
}
