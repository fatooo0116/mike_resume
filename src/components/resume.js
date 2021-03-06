import React, { Component } from 'react';
import mylogo from '../assets/img/photo.jpg';
import { Grid, Row, Col  } from 'react-bootstrap';


class Resume extends Component{
  render(){
    return(

      <section className="pt-page">
        <div  className="section-inner">
              <div className="section-title-block second-style">
                  <h2 className="section-title">Resume</h2>
                  <h5 className="section-description">7 Years of Experience</h5>
              </div>

              <div className="section-content">
                <Row>
                  <Col xs={12} sm={8} >
                    <div class="col-inner">
                      <div class="block-title">
                        <h3>Education</h3>
                      </div>

                      <div class="timeline timeline-second-style bs-30 clearfix">
                                                <div class="timeline-item clearfix">
                                                  <div class="left-part">
                                                    <h5 class="item-period">2008</h5>
                                                    <span class="item-company">University of Studies</span>
                                                  </div>
                                                  <div class="divider"></div>
                                                  <div class="right-part">
                                                    <h4 class="item-title">Fronted Development</h4>
                                                    <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                                                  </div>
                                                </div>

                                                <div class="timeline-item clearfix">
                                                  <div class="left-part">
                                                    <h5 class="item-period">2007</h5>
                                                    <span class="item-company">University of Studies</span>
                                                  </div>
                                                  <div class="divider"></div>
                                                  <div class="right-part">
                                                    <h4 class="item-title">Graphic Design</h4>
                                                    <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                                                  </div>
                                                </div>
                        </div>
                    </div>

                    <div class="col-inner">
                      <div class="block-title">
                        <h3>Experience</h3>
                      </div>

                      <div class="timeline timeline-second-style bs-30 clearfix">
                                                <div class="timeline-item clearfix">
                                                  <div class="left-part">
                                                    <h5 class="item-period">2008</h5>
                                                    <span class="item-company">University of Studies</span>
                                                  </div>
                                                  <div class="divider"></div>
                                                  <div class="right-part">
                                                    <h4 class="item-title">Fronted Development</h4>
                                                    <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                                                  </div>
                                                </div>

                                                <div class="timeline-item clearfix">
                                                  <div class="left-part">
                                                    <h5 class="item-period">2007</h5>
                                                    <span class="item-company">University of Studies</span>
                                                  </div>
                                                  <div class="divider"></div>
                                                  <div class="right-part">
                                                    <h4 class="item-title">Graphic Design</h4>
                                                    <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                                                  </div>
                                                </div>
                        </div>
                    </div>
                  </Col>
                  <Col xs={12} sm={4} >
                    <div className="col-inner">
                      <div class="block-title">
                        <h3>Design Skills</h3>
                      </div>
                      <div class="clearfix">
                            <h4>Web Design</h4>
                            <div class="skill-value">95%</div>
                      </div>
                      <div class="skill-container">
                            <div class="skill-percentage skill-1"></div>
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

export  default Resume
