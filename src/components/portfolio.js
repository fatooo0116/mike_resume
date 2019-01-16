import React, { Component } from 'react';
import mylogo from '../assets/img/photo.jpg';
import { Grid, Row, Col  } from 'react-bootstrap';

import pic1 from '../assets/img/1.jpg';


import {
  Link
} from 'react-router-dom';

class Portfolio extends Component{
  render(){
    return(

      <section className="pt-page">
        <div  className="section-inner">
              <div className="section-title-block second-style">
                  <h2 className="section-title">Portfolio</h2>
                  <h5 className="section-description">My Work</h5>
              </div>
              <div className="section-content  allportfolio">
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
                  <Col xs={12} sm={4} >
                          <figure className="inner-content">
                              <div className="portfolio-item-img">
                                  <img src={pic1} alt="" title="" />
                                  <Link  to="/project" className="pt-trigger "  >Website1</Link>
                              </div>
                          </figure>
                  </Col>
                  <Col xs={12} sm={4} >
                    <figure className="inner-content">
                        <div className="portfolio-item-img">
                            <img src={pic1} alt="" title="" />
                            <Link  to="/project" className="pt-trigger "  >Website1</Link>
                        </div>
                    </figure>
                  </Col>
                  <Col xs={12} sm={4} >
                    <figure className="inner-content">
                        <div className="portfolio-item-img">
                            <img src={pic1} alt="" title="" />
                            <Link  to="/project" className="pt-trigger "  >Website1</Link>
                        </div>
                    </figure>
                  </Col>
                  <Col xs={12} sm={3} >
                    <figure className="inner-content">
                        <div className="portfolio-item-img">
                            <img src={pic1} alt="" title="" />
                            <Link  to="/project" className="pt-trigger "  >Website1</Link>
                        </div>
                    </figure>
                  </Col>
                </Row>
              </div>




        </div>
      </section>

    )
  }
}

export  default Portfolio
