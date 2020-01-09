import React, { Component } from "react";
import { Layout, Icon } from "antd";

import "antd/dist/antd.css";

const { Footer } = Layout;

export default class FooterCls extends Component {
  render() {
    return (
      <Footer id="footer-antd">
        <div className="row">
          <div className="col-6 pl-5">
            <h3>Logo</h3>
            <p>สอบถามข้อมูล: (xxx)xxx-xxxx และ (xxx)xxx-xxxx</p>
            <p>(เวลาทำการ: จันทร์ – ศุกร์ เวลา 8.30 น. – 17.30 น.)</p>
            <p>อีเมล: dummy@xxx.co.th</p>
          </div>
          <div className="col-2 text-center border-right">
            <h5 className="font-weight-bold mb-4">ผู้หางาน</h5>
            <p>หน้าหลัก</p>
            <p>เรซูเม่</p>
            <p>หางาน</p>
          </div>
          <div className="col-2 text-center border-right">
            <h5 className="font-weight-bold mb-4">ผู้ประกอบการ</h5>
            <p>ลงประกาศงาน</p>
            <p>ค้นหาผู้สมัครงาน</p>
          </div>
          <div className="col-2 text-center">
            <h5 className="font-weight-bold mb-4">เกี่ยวกับเรา</h5>
            <p>เกี่ยวกับ...</p>
            <p>ติดต่อเรา</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-right mt-2">
            <h1>
              <Icon className="mr-3" type="google" />
              <Icon className="mr-3" type="facebook" />
              <Icon className="mr-3" type="twitter" />
              <Icon className="mr-3" type="youtube" />
              <i class="fab fa-line mr-5"></i>
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center m-5">
            <p>
              พันธมิตรต่างชาติ | BabaJob (India) | Bdjobs (Bangladesh) |
              Brighter Monday(East Africa) | Catho (Brazil) | Jobberman (West
              Africa) | JobStreet (S.E.Asia) |
            </p>
            <p>
              Jora (Thailand) | Manager (Brazil) | OCC Mundial (Mexico) | Seaman
              Jobsite (Philippines) | SEEK (Australia) | Work
              Abroad(Philippines) | WorkanaZhaopin (China)
            </p>
          </div>
        </div>
      </Footer>
    );
  }
}
