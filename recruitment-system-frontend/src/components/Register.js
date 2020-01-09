import React, { Component } from "react";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  DatePicker,
  TimePicker,
  Card
} from "antd";

import "antd/dist/antd.css";

import "./Register.css";

import * as countryJSON from "./datas/country.json";
import * as provinceJSON from "./datas/province.json";
import * as districtJSON from "./datas/district.json";

import * as businessTypeJSON from "./datas/businessType.json";
import * as educationLevelJSON from "./datas/educationLevel.json";
import * as incomeTypeJSON from "./datas/incomeType.json";
import * as jobTypeJSON from "./datas/jobType.json";
import * as workExperienceJSON from "./datas/workExperience.json";

const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const { RangePicker } = DatePicker;

class Register extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if (!err) {
        console.log("Received values of form: ", fieldsValue);
      }

      // Should format date value before submit.
      const rangeValue = fieldsValue["range-picker"];
      const rangeTimeValue = fieldsValue["range-time-picker"];
      const values = {
        ...fieldsValue,
        "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
        "date-time-picker": fieldsValue["date-time-picker"].format(
          "YYYY-MM-DD HH:mm:ss"
        ),
        "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
        "range-picker": [
          rangeValue[0].format("YYYY-MM-DD"),
          rangeValue[1].format("YYYY-MM-DD")
        ],
        "range-time-picker": [
          rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
          rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss")
        ],
        "time-picker": fieldsValue["time-picker"].format("HH:mm:ss")
      };
      console.log("Received values of form: ", values);
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue("password")) {
      callback("รหัสผ่านและยืนยันรหัสผ่านต้องตรงกัน !");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = [".com", ".org", ".net"].map(
        domain => `${value}${domain}`
      );
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 0 },
        sm: { span: 0 }
      },
      wrapperCol: {
        xs: { span: 12, offset: 6 },
        sm: { span: 12, offset: 6 }
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
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "66"
    })(
      <Select style={{ width: 70 }}>
        <Option value="66">+66</Option>
      </Select>
    );

    const config = {
      rules: [
        { type: "object", required: true, message: "Please select time!" }
      ]
    };
    const rangeConfig = {
      rules: [{ type: "array", required: true, message: "Please select time!" }]
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <section id="register-section" className="center">
        <h3 className="pt-4 text-center"> สมัครสมาชิก </h3>
        <Form {...formItemLayout} onSubmit={this.handleSubmit} className="pt-2">
          <div className="border pt-4 pb-2">
            <h4 className="text-center">ข้อมูลบัญชี</h4>
            <Form.Item>
              {getFieldDecorator("firstname", {
                rules: [
                  {
                    required: true,
                    message: "ชือต้องระบุ !",
                    whitespace: true
                  }
                ]
              })(<Input placeholder="ชือ" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("lastname", {
                rules: [
                  {
                    required: true,
                    message: "นามสกุลต้องระบุ !",
                    whitespace: true
                  }
                ]
              })(<Input placeholder="นามสกุล" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    type: "email",
                    message: "รูปแบบอีเมลไม่ถูกต้อง!"
                  },
                  {
                    required: true,
                    message: "อีเมลต้องระบุ !"
                  }
                ]
              })(<Input placeholder="อีเมล" />)}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "รหัสผ่านต้องระบุ !"
                  },
                  {
                    validator: this.validateToNextPassword
                  }
                ]
              })(<Input.Password placeholder="รหัสผ่าน" />)}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("confirm", {
                rules: [
                  {
                    required: true,
                    message: "ยืนยันรหัสผ่านต้องระบุ !"
                  },
                  {
                    validator: this.compareToFirstPassword
                  }
                ]
              })(
                <Input.Password
                  placeholder="ยืนยันรหัสผ่าน"
                  onBlur={this.handleConfirmBlur}
                />
              )}
            </Form.Item>
          </div>
          <div className="border mt-5 pt-4 pb-2">
            <h4 className="text-center">ข้อมูลประวัติการทำงาน</h4>
            <Form.Item hasFeedback>
              {getFieldDecorator("work_exp", {
                rules: [
                  { required: true, message: "ประสบการณ์ทำงานต้องระบุ !" }
                ]
              })(
                <Select placeholder="ประสบการณ์ทำงาน">
                  {workExperienceJSON.default.map(obj => (
                    <Option key={obj.name}>{obj.name}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("current_position", {
                rules: [
                  {
                    required: true,
                    message: "ตำแหน่งงานปัจจุบันต้องระบุ !",
                    whitespace: true
                  }
                ]
              })(<Input placeholder="ตำแหน่งงานงานปัจจุบัน" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("latest_company", {
                rules: [
                  {
                    required: true,
                    message: "บริษัทที่ทำงานล่าสุดต้องระบุ !",
                    whitespace: true
                  }
                ]
              })(<Input placeholder="บริษัทที่ทำงานล่าสุด" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator(
                "working_period",
                rangeConfig
              )(<RangePicker placeholder="ระยะเวลาการทำงานล่าสุด" />)}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("working_type", {
                rules: [
                  { required: true, message: "ประเภทงานล่าสุดต้องระบุ !" }
                ]
              })(
                <Select placeholder="ประเภทงานล่าสุด">
                  {jobTypeJSON.default.map(obj => (
                    <Option key={obj.name}>{obj.name}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("expected_salary", {
                rules: [
                  { required: true, message: "ประเภทค่าตอบแทนต้องระบุ !" }
                ]
              })(
                <Select placeholder="ประเภทค่าตอบแทน">
                  {incomeTypeJSON.default.map(obj => (
                    <Option key={obj.name}>{obj.name}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("payment_lowest", {
                rules: [
                  {
                    required: true,
                    message: "ค่าแรงขั้นต่ำต้องระบุ !",
                    whitespace: true
                  }
                ]
              })(<Input placeholder="ค่าแรงขั้นต่ำ" />)}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("payment_highest", {
                rules: [
                  {
                    required: true,
                    message: "ค่าแรงสูงสุดต้องระบุ !",
                    whitespace: true
                  }
                ]
              })(<Input placeholder="ค่าแรงสูงสุด" />)}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("education_level", {
                rules: [
                  { required: true, message: "ระดับการศึกษาสูงสุดต้องระบุ !" }
                ]
              })(
                <Select placeholder="ระดับการศึกษาสูงสุด">
                  {educationLevelJSON.default.map(obj => (
                    <Option key={obj.name}>{obj.name}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </div>

          <div className="border mt-5 pt-4 pb-2">
            <h4 className="text-center">ข้อมูลทั่วไป</h4>
            <Form.Item hasFeedback>
              {getFieldDecorator("nationality", {
                rules: [{ required: true, message: "สัญชาติต้องระบุ !" }]
              })(
                <Select placeholder="สัญชาติ">
                  {countryJSON.default.map(obj => (
                    <Option key={obj.name}>{obj.name}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("current_residence", {
                rules: [
                  { required: true, message: "ที่อยู่ปัจจุบันต้องระบุ !" }
                ]
              })(
                <Select placeholder="ที่อยู่ปัจจุบัน">
                  {countryJSON.default.map(obj => (
                    <Option key={obj.name}>{obj.name}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("phone_number", {
                rules: [
                  { required: true, message: "หมายเลขโทรศัพท์ต้องระบุ !" }
                ]
              })(
                <Input
                  placeholder="หมายเลขโทรศัพท์"
                  addonBefore={prefixSelector}
                  style={{ width: "100%" }}
                />
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("province", {
                rules: [{ required: true, message: "จังหวัดต้องระบุ !" }]
              })(
                <Select placeholder="จังหวัด">
                  {provinceJSON.default.map(obj => (
                    <Option key={obj.PROVINCE_NAME}>{obj.PROVINCE_NAME}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item hasFeedback>
              {getFieldDecorator("amphur", {
                rules: [{ required: true, message: "อำเภอต้องระบุ !" }]
              })(
                <Select placeholder="อำเภอ">
                  {districtJSON.default.map(obj => (
                    <Option key={obj.DISTRICT_NAME}>{obj.DISTRICT_NAME}</Option>
                  ))}
                </Select>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator("monthly_new", {
                valuePropName: "checked"
              })(
                <Checkbox>
                  I have read the <a href="">รับข่าวสารรายเดือน</a>
                </Checkbox>
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">
                สมัครงาน
              </Button>
            </Form.Item>
          </div>
        </Form>
      </section>
    );
  }
}

const retFrom = Form.create({ name: "normal_login" })(Register);

export default retFrom;
