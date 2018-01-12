import React, { Component } from "react";
// import { Grid, Col, Button, Row } from 'react-bootstrap';

class WorkDetail extends Component {
  constructor(props) {
    super(props);
    //const slug = this.props.match.params.slug;
    this.state = {
      slug: this.props.match.params.slug,
      work: [],
      portfolio: []
    }

  }


  //View did load equivalent
  componentDidMount() {
    //avoid CORS issue
    //var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    let dataUrl = "http://kelseykjeldsen.com/wp-json/wp/v2/work?slug==" + this.state.slug + "&_embed";
    fetch(dataUrl)
      // set the result to json
      .then(res => res.json())
      // set the state of portfolio items to the new json
      .then(res => {
        this.setState({
          work: res
        })
      })
      .catch(error => console.log(error.toString()))
  }
  render() {
    let portfolioItem = this.state.work.map((item, index) => {
      return (
          <div key={index}>

            <img src={item.acf.featured_image} />

            <p><strong>Title:</strong> {item.title.rendered}</p>
            <strong>Skills</strong>
              <div><div dangerouslySetInnerHTML={ {__html: item.acf.skills} } /></div>
            <a href={item.acf.link} alt="live link" target="_blank">See Project</a>

          </div>

      )

    });
    return (

      <div>
        {portfolioItem}
      </div>
    )
  }
}

export default WorkDetail;
