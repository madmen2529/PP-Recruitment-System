import React, { Component } from "react";
import { Button } from "antd";

import "antd/dist/antd.css";

export default class ExamIntro extends Component {
  state = {
    exam: {
      name: `Physical Test`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      teacher_name: `Jane Doe`
    }
  };
  render() {
    return (
      <section id="exam-intro-section">
        <div className="text-center">
          <h3 className="mt-3">{this.state.exam.name}</h3>
        </div>
        <div className="border p-2 mt-3">{this.state.exam.description}</div>
        <div className="text-center mt-4">
          <Button type="primary">Primary</Button>
          <p className="text-muted mt-3">by {this.state.exam.teacher_name}</p>
        </div>
      </section>
    );
  }
}
