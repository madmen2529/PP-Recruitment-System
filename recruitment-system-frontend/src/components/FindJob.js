import React, { Component } from "react";

import { Row, Col, List, Avatar, Descriptions, Button, Badge } from "antd";

import "antd/dist/antd.css";

export default class Template extends Component {
  render() {
    const jobThumbnailDatas = [
      {
        position: ".p.",
        company_name: ".c.",
        post_since: "date"
      },
      {
        position: "...",
        company_name: "...",
        post_since: "date"
      },
      {
        position: "...",
        company_name: "...",
        post_since: "date"
      },
      {
        position: "...",
        company_name: "...",
        post_since: "date"
      }
    ];

    const jobResponsibilityDatas = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires."
    ];

    const jobQualificationDatas = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires."
    ];

    return (
      <section id="findjob-secction">
        <h3 className="pt-5">Find Job</h3>

        <Row>
          <Col span={5}>
            <List
              className="pt-2"
              itemLayout="horizontal"
              dataSource={jobThumbnailDatas}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={<a href="https://ant.design">{item.position}</a>}
                    description={
                      <>
                        <div>{item.company_name}</div>
                        <div>{item.post_since}</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
          <Col span={24 - 5}>
            <Row>
              <Col span={6}>Date</Col>
              <Col span={24 - 6} className="text-right">
                หมายเลขงานอ้างอิง : XXXXXX
              </Col>
            </Row>
            <div className="p-5"> Logo </div>
            <Descriptions
              className="mt-4"
              title="ข้อมูลบริษัท"
              layout="vertical"
              column={1}
            >
              <Descriptions.Item label="company_name">
                XXXXXXX
              </Descriptions.Item>
              <Descriptions.Item label="company_description">
                Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
                ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
                มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
                16
                เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
                Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
                แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
                และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
                มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset
                วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น
                คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง
                Aldus PageMaker ได้รวมเอา Lorem Ipsum เวอร์ชั่นต่างๆ
                เข้าไว้ในซอฟท์แวร์ด้วย
              </Descriptions.Item>
            </Descriptions>
            <hr />
            ตำแหน่งงาน
            <hr />
            <div className="mt-4"></div>
            <List
              size="small"
              header={<div>ความรับผิดชอบ</div>}
              bordered
              dataSource={jobResponsibilityDatas}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
            <div className="mt-3"></div>
            <List
              size="small"
              header={<div>คุณสมบัติ</div>}
              bordered
              dataSource={jobQualificationDatas}
              renderItem={item => <List.Item>{item}</List.Item>}
            />
            <p className="mt-3">
              Lorem Ipsum คือ เนื้อหาจำลองแบบเรียบๆ
              ที่ใช้กันในธุรกิจงานพิมพ์หรืองานเรียงพิมพ์
              มันได้กลายมาเป็นเนื้อหาจำลองมาตรฐานของธุรกิจดังกล่าวมาตั้งแต่ศตวรรษที่
              16
              เมื่อเครื่องพิมพ์โนเนมเครื่องหนึ่งนำรางตัวพิมพ์มาสลับสับตำแหน่งตัวอักษรเพื่อทำหนังสือตัวอย่าง
              Lorem Ipsum อยู่ยงคงกระพันมาไม่ใช่แค่เพียงห้าศตวรรษ
              แต่อยู่มาจนถึงยุคที่พลิกโฉมเข้าสู่งานเรียงพิมพ์ด้วยวิธีทางอิเล็กทรอนิกส์
              และยังคงสภาพเดิมไว้อย่างไม่มีการเปลี่ยนแปลง
              มันได้รับความนิยมมากขึ้นในยุค ค.ศ. 1960 เมื่อแผ่น Letraset
              วางจำหน่ายโดยมีข้อความบนนั้นเป็น Lorem Ipsum และล่าสุดกว่านั้น
              คือเมื่อซอฟท์แวร์การทำสื่อสิ่งพิมพ์ (Desktop Publishing) อย่าง
              Aldus PageMaker ได้รวมเอา Lorem Ipsum เวอร์ชั่นต่างๆ
              เข้าไว้ในซอฟท์แวร์ด้วย
            </p>
            <div className="mt-3 mb-4"></div>
            <Descriptions bordered column={2}>
              <Descriptions.Item span={1} label="อายุงาน">
                ... ปี
              </Descriptions.Item>
              <Descriptions.Item span={1} label="ประเภทธุรกิจ">
                xxxxxx
              </Descriptions.Item>
              <Descriptions.Item span={1} label="ระดับการศึกษา">
                xxxxxx
              </Descriptions.Item>
              <Descriptions.Item span={1} label="ประเภทงาน">
                xxxxxx
              </Descriptions.Item>
              <Descriptions.Item span={1} label="สถานที่ทำงาน">
                xxxxxx
              </Descriptions.Item>
              <Descriptions.Item span={1} label="ประเภทการจ้างงาน">
                xxxxxx
              </Descriptions.Item>
              <Descriptions.Item span={2} label="เงินเดือน">
                <Badge status="processing" text="25000" /> บาท
              </Descriptions.Item>
            </Descriptions>
            <div className="text-center mt-3">
              <Button type="primary">สมัครงาน</Button>
            </div>
          </Col>
        </Row>
      </section>
    );
  }
}
