import React, { Component } from 'react';
import mylogo from '../assets/img/photo.jpg';

import {
  Link
} from 'react-router-dom';


class Header extends Component{

  routeAnimation = () =>{
    console.log("GOGO");
  }


  render(){
    return(

      <header id="site_header" className="header mobile-menu-hide">
        <div className="header-content clearfix">
          <div  className="my-photo" >
             <img src={mylogo}  alt="Mike Hsu" />
          </div>

          <div className="site-title-block">
            <div className="site-title">Alex Smith</div>
          </div>

            {/* Navigation */}
          <div className="site-nav">
             {/*  Main menu */}
            <ul id="nav" className="site-main-menu">
              <li>
                <Link exact to="/" className="pt-trigger "  onClick={this.routeAnimation} >About Me</Link>
              </li>
              <li>
                <Link exact to="/resume" className="pt-trigger " >Resume</Link>
              </li>
              <li>
                <Link exact to="/portfolio" className="pt-trigger " >Portfolio</Link>
              </li>
              <li>
                <Link exact to="/contact" className="pt-trigger " >Contact</Link>
              </li>
            </ul>
            {/* /Main menu */}
          </div>
          {/* Navigation */}

          {/* Social Links */}
          <div className="social-links">
            <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
          </div>
          {/* Social Links */}


          <div className="copyrights">© 2018 All rights<br/> reserved.</div>
          {/*  Copyrights */}
        </div>
      </header>

    );
  }
}

export default Header;
