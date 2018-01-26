import React, { Component } from "react";
import { Grid, Col, Button, Row } from 'react-bootstrap';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mesage: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div className="contact-page">
          <Grid>
              <Row className="show-grid">
                <Col xs={12} sm={12} md={6} className="text-col">
                    <h2>Contact Me</h2>
                    <p>Any comments or questions feel free to reach out to me.</p>
                    {/* <form onSubmit={this.handleSubmit}>
                       <label>Name</label>
                        <input type="text" value={this.state.name} />
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} />
                        <label>Message</label>
                         <input type="textarea" value={this.state.message} onChange={this.handleChange} />

                       <input className="flat-btn" type="submit" value="Submit" />
                     </form> */}
                        <div className="flipper">
                            <div className="content">
                                <div className="content__container">
                                  <p className="content__container__text">
                                    I CAN
                                  </p>
                                  
                                  <ul className="content__container__list">
                                    <li className="content__container__list__item">code !</li>
                                    <li className="content__container__list__item">wireframe !</li>
                                    <li className="content__container__list__item">watch sports !</li>
                                    <li className="content__container__list__item">drink coffee !</li>
                                  </ul>
                                </div>
                              </div>
                          </div>
                </Col>
                <Col xs={12} sm={12} md={6} className="content-col">
                  <div className="social-links">


                      <Col xs={12} sm={12} md={8}>
                        <div className="box box--front" id="box1">
                          <div className="border"></div>
                          <div className="content">
                            <h3>Reach out here:</h3>

                            <ul>
                              <li>
                                <Button bsStyle="link" bsSize="large" href="https://www.linkedin.com/in/kelsey-kjeldsen/" target="_blank"  >
                                  <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                                     <span>LinkedIn</span>
                                </Button>
                              </li>
                              <li>
                                <Button bsStyle="link" bsSize="large" href="https://twitter.com/TheCouchCoder" target="_blank" >
                                  <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                                   <span>Twitter</span>
                                </Button>
                              </li>
                              <li>
                                <Button bsStyle="link" bsSize="large" href="https://github.com/KMK73/" target="_blank" >
                                  <i className="fa fa-github-square fa-2x" aria-hidden="true"></i>
                                     <span>GitHub</span>
                                </Button>
                              </li>
                              <li>
                                <Button bsStyle="link" bsSize="large" href="mailto:kelsey.kjeldsen@gmail.com" target="_blank">
                                  <i className="fa fa-envelope-square fa-2x" aria-hidden="true"></i>
                                     <span>Email</span>
                                </Button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Col>
                  </div>
                </Col>
              </Row>
            </Grid>
        </div>
    );
  }
}

export default Contact;
