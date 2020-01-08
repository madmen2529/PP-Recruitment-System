import React, { Component } from "react";
import { Layout, Menu } from "antd";

import "antd/dist/antd.css";

import { Link } from "react-router-dom";

const { Header } = Layout;

export default class NavCls extends Component {
  render() {
    return (
      <Header id="navmid-header-antd">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["home"]}
          style={{ lineHeight: "64px" }}
        >
          {/* <Menu.Item key="home">
            <Link to="/">
              <i class="fas fa-home mr-2"></i>หน้าหลัก
            </Link>
          </Menu.Item> */}
          <Menu.Item key="findjob">
            <Link to="/findjob">
              <i class="fas fa-briefcase mr-2"></i>หางาน
            </Link>
          </Menu.Item>
          <Menu.Item key="resume">
            <Link to="/createresume">
              <i class="fas fa-file-alt mr-2"></i>รีซูเม่
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }
}
