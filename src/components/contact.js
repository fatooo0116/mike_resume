import React, { Component } from 'react';
import mylogo from '../assets/img/photo.jpg';
import { Grid, Row, Col  } from 'react-bootstrap';


class Contact extends Component{
  constructor(props){
    super(props);
  }



  render(){
    return(

      <section className="pt-page">
        <div  className="section-inner">
              <div className="section-title-block second-style">
                  <h2 className="section-title">Contact</h2>
                  <h5 className="section-description">Get in Touch</h5>
              </div>
              <div className="section-content">
                <Row>
                  <Col sm={12} md={12} lg={12}>
                          <div className="inner-content">
                              <div className="fill-block">
                                  <div  className="map" >Map</div>
                              </div>
                          </div>
                  </Col>
                </Row>


                <Row>
                  <Col xs={12} sm={3} >
                          <div className="inner-content">
                              <div className="fill-block">
                                  <div  className="map" >Map</div>
                              </div>
                          </div>
                  </Col>
                  <Col xs={12} sm={3} >
                          <div className="inner-content">
                              <div className="fill-block">
                                  <div  className="map" >Map</div>
                              </div>
                          </div>
                  </Col>
                  <Col xs={12} sm={3} >
                          <div className="inner-content">
                              <div className="fill-block">
                                  <div  className="map" >Map</div>
                              </div>
                          </div>
                  </Col>
                  <Col xs={12} sm={3} >
                          <div className="inner-content">
                              <div className="fill-block">
                                  <div  className="map" >Map</div>
                              </div>
                          </div>
                  </Col>
                </Row>
              </div>




        </div>
      </section>

    )
  }
}

export  default Contact
