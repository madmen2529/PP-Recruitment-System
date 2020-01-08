import React, { Component } from "react";
import { Layout, Menu, Icon, Button } from "antd";

import { Link } from "react-router-dom";

import "antd/dist/antd.css";

const { Header } = Layout;

export default class HeaderCls extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <section id="header-section">
        <div className="logo bg-white text-center">
          <h2>Logo</h2>
        </div>
        <Header id="navtop-header-antd" className="bg-white">
          <Menu
            className="text-right"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="enterpreneur">
              <Button disabled>
                {/* <Link to="/"> */}
                <i class="fas fa-user-tie mr-2"></i>
                ผู้ประกอบการ
                {/* </Link> */}
              </Button>
            </Menu.Item>
            <Menu.Item key="user">
              <Button.Group>
                <Button type="primary">
                  <Link to="/login">
                    <i class="fas fa-sign-in-alt mr-2"></i>
                    เข้าสู่ระบบ
                  </Link>
                </Button>
                <Button type="primary">
                  <Link to="/register">
                    <i class="fas fa-user mr-2"></i>
                    ลงทะเบียน
                  </Link>
                </Button>
              </Button.Group>
            </Menu.Item>
          </Menu>
        </Header>
      </section>
    );
  }
}
