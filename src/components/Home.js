import React, { Component } from "react";
import { Grid, Col, Button, Row } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={6} className="text-col">
                  <h1>Kelsey Kjeldsen</h1>
                  <p className="">About me.</p>
              </Col>
              <Col xs={12} md={6} className="content-col">
                <div id="mobile-img">
                  <img src="/assets/images/mobile-iphone.svg" alt="Mobile development animation" />
                </div>
              </Col>
            </Row>
          </Grid>

      </div>
    );
  }
}

export default Home;
