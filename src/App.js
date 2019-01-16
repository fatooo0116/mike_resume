import React, { Component } from 'react';

import Header from './components/header';
import About from './components/about';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Project from './components/project';

import { AnimatedSwitch } from 'react-router-transition';

import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

import './App.scss';


class App extends Component {


  render() {
    return (
    <BrowserRouter>



      <div className="App"  id="page">

         {/* Header */}
         <Header />
         {/* [end] Header */}


         <div id="main" className="site-main">
           <div className="pt-wrapper" >
             <div  className="subpages">

               <AnimatedSwitch
                 atEnter={{
                   opacity: 0,
                   top:'100px'
                  }}
                 atLeave={{ opacity: 0 }}
                 atActive={{ opacity: 1 }}
                 className="switch-wrapper"
               >
                 <Route exact path="/"  component={About} render={console.log("change")} />
                 <Route exact path="/resume"  component={Resume} />
                 <Route exact path="/portfolio"  component={Portfolio} />
                 <Route exact path="/contact"  component={Contact} />
                 <Route exact path="/project"  component={Project} />
                </AnimatedSwitch>
             </div>{ /* --  subpages */ }
          </div>
         </div>

         {/* End Page */}
      </div>

    </BrowserRouter>

    );
  }
}

export default App;
