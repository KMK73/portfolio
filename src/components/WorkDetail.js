import React, { Component } from "react";
import { Grid, Col, Carousel, Row } from 'react-bootstrap';

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
        console.log(res);
        this.setState({
          work: res
        })
      })
      .catch(error => console.log(error.toString()))
  }
  render() {
    let portfolioItem = this.state.work.map((item, index) => {
      return (
          <div key={index} className="main-img">
            <Grid>
                <Row className="show-grid">
                    <Col xs={12} sm={8} md={8} className="">
                    <Carousel>
                        <Carousel.Item>
                          <img width={`50%`} height={500} alt="900x500" src={item.acf.featured_image} />
                          <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={item.acf.media_gallery.sizes.medium} />
                          <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <img width={900} height={500} alt="900x500" src={item.acf.featured_image} />
                          <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>

                      {/* <img className="featured" src={item.acf.featured_image} alt="work image" /> */}

                      
                  </Col>
                  <Col  xs={12} sm={4} md={4}>
                      <p><strong>Title:</strong> {item.title.rendered}</p>
                      <strong>Skills</strong>
                        <div><div dangerouslySetInnerHTML={ {__html: item.acf.skills} } /></div>
                      <a href={item.acf.link} alt="live link" target="_blank">See Project</a>
                  </Col>
                </Row>
              </Grid>
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
