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
                    <form onSubmit={this.handleSubmit}>
                       <label>Name</label>
                        <input type="text" value={this.state.name} />
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} />
                        <label>Message</label>
                         <input type="textarea" value={this.state.message} onChange={this.handleChange} />

                       <input className="flat-btn" type="submit" value="Submit" />
                     </form>
                </Col>
                <Col xs={12} sm={12} md={6} className="content-col">

                </Col>
              </Row>
            </Grid>
        </div>
    );
  }
}

export default Contact;
