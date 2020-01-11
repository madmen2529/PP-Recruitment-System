import React, { Component } from "react";
import { Button, Radio, Input } from "antd";

import "antd/dist/antd.css";

export default class ExamTopic extends Component {
  state = {
    exam: {
      name: `Physical Test`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
      teacher_name: `Jane Doe`
    },
    topic: [
      {
        no: 1,
        name: `Which question is the secode of lorem ipsum?`,
        choice_a: `What is Lorem Ipsum?`,
        choice_b: `Why do we use it?`,
        choice_c: `Where does it come from?`,
        choice_d: `Where can I get some?`,
        choice_e: `None of these.`,
        correct_choice: `b`,
        remark: `...`
      }
    ]
  };

  onChange = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  choiceGenerate = () => {
    this.state.topic.map(item => {
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio className="font-weight-light" style={radioStyle} value={"a"}>
          A. {item.choice_a}
        </Radio>
        <Radio className="font-weight-light" style={radioStyle} value={"b"}>
          B. {item.choice_b}
        </Radio>
        <Radio className="font-weight-light" style={radioStyle} value={"c"}>
          C. {item.choice_c}
        </Radio>
        <Radio className="font-weight-light" style={radioStyle} value={"d"}>
          D. {item.choice_d}
        </Radio>
        <Radio className="font-weight-light" style={radioStyle} value={"e"}>
          E. {item.choice_e}
        </Radio>
      </Radio.Group>;
    });
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
        <hr />
        <div className="border p-2 mt-3">
          <p className="font-weight-normal">
            {this.state.topic.no}.) {this.state.topic.name}
          </p>
          {this.choiceGenerate()}
        </div>
        <div className="text-center mt-4">
          <Button type="primary">Primary</Button>
          <p className="text-muted mt-3">by {this.state.exam.teacher_name}</p>
        </div>
      </section>
    );
  }
}
