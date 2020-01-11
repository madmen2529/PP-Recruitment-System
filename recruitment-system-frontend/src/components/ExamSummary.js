import React, { Component } from "react";
import { Button } from "antd";

import "antd/dist/antd.css";

export default class ExamSummary extends Component {
  state = {
    exam: {
      name: `Physical Test`,
      teacher_name: `Jane Doe`,
      total_score: 100,
      record: {
        student: {
          firstname: `John`,
          lastname: `Doe`,
          username: `tester`,
          gender: `M`
        },
        score: 49,
        status: `finish`
      }
    }
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };

    return (
      <section id="exam-topic-section">
        <h3 className="mt-3">{this.state.exam.name}s list</h3>
        <div className="p-2 mt-3">
          <p className="font-weight-normal">
            {this.state.topic.no}.) {this.state.topic.name}
          </p>
          <p className="text-muted mt-3">
            Total Score: {this.state.exam.total_score}
          </p>
          <p className="text-muted mt-3">
            Participation
            {this.state.exam.record.student.firstname}{" "}
            {this.state.exam.record.student.lastname}
          </p>
        </div>
        <hr />
        <div className="text-center mt-4">
          <Button type="success">
            <p>Correct</p>
            <p>{this.state.exam.record.score}</p>
          </Button>
          <Button type="danger">
            <p>Incorrect</p>
            <p>{this.state.exam.total_score - this.state.exam.record.score}</p>
          </Button>
        </div>
        <div className="text-center mt-4">
          <Button type="danger">Answer</Button>
          <Button type="primary">Finish</Button>
        </div>
      </section>
    );
  }
}
