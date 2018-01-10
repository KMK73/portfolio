import React, { Component } from "react";
import { Grid, Col, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Work extends Component {
  constructor(props) {
    super(props);
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
      // set the state of portfolio items to the new json
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
          <Col xs={12} sm={6} md={4} className="project-item" key={index}>
            <div  className="">
               <Link to={`/work/${item.slug}`}>
                   <img src={item._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} />
               </Link>
                 <div className="item-info">
                   <p>{item.title.rendered}</p>
                   <div class="skills">
                     <span>{item.acf.skill_description}</span>
                   </div>
                   {/*<div><div dangerouslySetInnerHTML={ {__html: item.acf.skills} } /></div>*/}
                 </div>
            </div>
          </Col>

       )
     });
    return (
      <div className="main-container">
         <div className="project-intro">
           <h2>My Work</h2>
           <p className="faded">
             I’ve worked on a variety of projects, from small startups to large re-branding organizations, creating wireframes, websites, and mobile apps.
             Here is a selection of some of those projects:</p>
         </div>
         <Row className="show-grid project-container">
           {portfolioItems}
          </Row>
       </div>
    );
  }
}

export default Work;
