import React, { Component } from 'react';
import mylogo from '../assets/img/photo.jpg';
import { Grid, Row, Col  } from 'react-bootstrap';


class About extends Component{
  render(){
    return(

      <section className="pt-page">
        <Grid>
         <Row className="show-grid">
           <Col sm={12} md={6} lg={6}>
                   <div className="inner-content">
                       <div className="fill-block">
                       About
                       </div>
                   </div>
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
      </section>

    )
  }
}

export  default About
