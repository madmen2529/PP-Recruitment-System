import React from "react";
import "./App.css";

import { Layout } from "antd";
import "antd/dist/antd.css";

import Header from "./components/HeaderCls";
import Nav from "./components/NavCls";
import Content from "./components/ContentCls";
import Footer from "./components/FooterCls";

function App() {
  return (
    <Layout id="layout" className="layout">
      <Header />
      <Nav />
      <Content />
      <Footer />
    </Layout>
  );
}

export default App;
