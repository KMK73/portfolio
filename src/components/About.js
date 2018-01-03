import React, { Component } from "react";
import { Grid, Col, Button, Row } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div className="about-page">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} sm={6} md={6} className="text-col">

                  <div>
                    <h1>About Me</h1>

                    <p>
                      Developer currently living in <span>Miami. </span>
                       I started my tech career as an Information Architect and studied UX/UI. </p>
                    <p>
                        From there I moved onto Hybrid App Development which is my preffered style of development, and Web development.
                        I have experience with HTML, CSS, JS (ES5, ES6), AngularJS, React.js, building small web apps, and wireframing. I also work with small WordPress sites and have some experience with PHP.
                    </p>
                    <p>In my spare time, I watch a lot of sports, try to crossfit, and walk my dog.</p>
                  </div>
              </Col>
              <Col xs={12} sm={6} md={6} className="content-col">
                <p>New page</p>
              </Col>
            </Row>
          </Grid>

      </div>
    );
  }
}

export default About;
