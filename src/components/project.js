import React, { Component } from 'react';
import { Grid, Row, Col  } from 'react-bootstrap';
import {
  Link
} from 'react-router-dom';


class Project extends Component{

  render(){
    return(

      <section className="pt-page">
        <div  className="section-inner">
              <div className="section-title-block second-style">
                  <h2 className="section-title">Project</h2>
                  <h5 className="section-description">My Work</h5>
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
              </div>

        </div>
      </section>

    );
  }
}

export default Project;
