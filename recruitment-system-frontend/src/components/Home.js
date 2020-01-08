import React, { Component } from "react";
import { Carousel } from "antd";

import "antd/dist/antd.css";
import "./Home.css";

//https://th.jobsdb.com/th

export default class Home extends Component {
  carousel = () => (
    <Carousel autoplay>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  );

  jobSearchForm = () => (
    <div>
      company, location, job type, peroid type, from to bath, position,
      employment type, education level, btn_search
    </div>
  );

  jobHub = () => "";

  jobByHighStarCompany = () => "";

  jobHighlight = () => "";

  render() {
    return (
      <section id="home-section">
        {this.carousel()}
        {this.jobSearchForm()}

        <div className="row">
          <div className="col-8">
            {this.jobHub()}
            {this.jobByHighStarCompany()}
          </div>
          <div className="col-4">{this.jobHighlight()}</div>
        </div>
      </section>
    );
  }
}
