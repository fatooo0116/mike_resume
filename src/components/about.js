import React, { Component } from 'react';
import mylogo from '../assets/img/photo.jpg';
import myBigLogo from '../assets/img/sp_photo.jpg';
import shopcart from '../assets/img/shopping-cart.svg'
import { Grid, Row, Col  } from 'react-bootstrap';
import resource1 from '../assets/img/client-5.png';



class About extends Component{
  render(){

    let myStyle = {
      backgroundImage: 'url(' + myBigLogo + ')',
    }


    return(

      <section className="pt-page aboutUs">
        <Grid >
         <Row className="show-grid">
           <Col sm={12} md={6} lg={6}  style={myStyle}  className="avatar">

           </Col>
           <Col xs={6} md={4}>

             <div className="inner-content">
              <div className="hp-text-block">

                <h2 className="hp-main-title">Alex Smith</h2>
                <p>Praesent sed aliquam arcu, non accumsan neque. In odio ante, vulputate ac magna vel, pharetra lobortis quam. Duis enim tortor, egestas et felis id, lobortis malesuada magna. Nunc sit amet sagittis nisi, eu semper nisl. Cras ut dictum nisl. Donec tincidunt eget orci.</p><p>Aliquam mollis, leo nec commodo facilisis, turpis lorem dapibus erat, sed consectetur nunc nulla ac elit. Suspendisse dictum id dui mollis auctor. Etiam id sapien neque. Cras nec rhoncus sem. Mauris metus ligula, varius vel iaculis at, pulvinar tincidunt magna.</p>
                <div className="hp-buttons">
                  <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
                </div>
              </div>
            </div>

           </Col>
          </Row>
        </Grid>

        <div className="custom-page-content">
          <Grid>
             <Row>
               <Col sm={12} md={12} lg={12}>
                <div class="block-title">
                    <h3>What I Do<span></span></h3>
                </div>
               </Col>
             </Row>


           <Row>
              <Col sm={12} md={6} lg={6}>
                <div id="info-list-" class="info-list-w-icon">
                    <div class="info-block-w-icon">
                      <div class="ci-icon">
                          <i class="lnr lnr-store"></i>
                      </div>
                      <div class="ci-text">
                          <h4>Ecommerce</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                    <div class="info-block-w-icon">
                      <div class="ci-icon">
                                                                <i class="lnr lnr-laptop-phone"></i>
                                          </div>
                      <div class="ci-text">
                          <h4>Web Design</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                </div>
              </Col>


              <Col sm={12} md={6} lg={6}>
                <div id="info-list-" class="info-list-w-icon">
                    <div class="info-block-w-icon">
                      <div class="ci-icon">
                        <img src={shopcart} />
                      </div>
                      <div class="ci-text">
                          <h4>Ecommerce</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                    <div class="info-block-w-icon">
                      <div class="ci-icon">
                                                                <i class="lnr lnr-laptop-phone"></i>
                                          </div>
                      <div class="ci-text">
                          <h4>Web Design</h4>
                          <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales odio.</p>
                      </div>
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12} md={12} lg={12}>
               <div class="block-title">
                   <h3>Resource<span></span></h3>
               </div>
              </Col>
              <Col xs={6} sm={6} md={3} lg={3}>
                <img src={resource1} />
              </Col>
            </Row>
           </Grid>
         </div>


      </section>

    )
  }
}

export  default About
