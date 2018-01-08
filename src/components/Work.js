import React, { Component } from "react";
import { Grid, Col, Button, Row } from 'react-bootstrap';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: []
    }
  }
  //View did load equivalent
  componentDidMount() {
    //avoid CORS issue
    //var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let dataUrl = "http://kelseykjeldsen.com/wp-json/wp/v2/work?_embed";
    fetch(dataUrl)
      // set the result to json
      .then(res => res.json())
      // set the state of movies to the new json
      .then(res => {
        this.setState({
          portfolioItems: res
        })
      })
      .catch(error => console.log(error.toString()))
  }

  render() {
    let portfolioItems = this.state.portfolioItems.map((item, index) => {
      return (
        <div key={index}>
        <img src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} />
        <p><strong>Title:</strong> {item.title.rendered}</p>
        <strong>Skills</strong>
          <p><div><div dangerouslySetInnerHTML={ {__html: item.acf.skills} } /></div></p>
        </div>
      )

    });
    return (
        <div>
         <h2>Portfolio</h2>
          {portfolioItems}
       </div>
    );
  }
}

export default Work;
