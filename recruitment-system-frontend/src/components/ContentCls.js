import React, { Component } from "react";
import { Layout } from "antd";

import { Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Login from "./Login";
import CreateResume from "./CreateResume";
import Register from "./Register";
import FindJob from "./FindJob";

import "antd/dist/antd.css";

const { Content } = Layout;

export default class ContentCls extends Component {
  render() {
    return (
      <Content id="content-antd" style={{ padding: "0 50px" }}>
        <div
          style={{
            background: "#fff",
            margin: "0",
            padding: "0 2rem 2rem 2rem",
            height: "100%"
          }}
        >
          <Switch>
            <Route path="/createresume">
              <CreateResume />
            </Route>
            <Route path="/findjob">
              <FindJob />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Content>
    );
  }
}
