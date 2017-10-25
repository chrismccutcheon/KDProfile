import React, { Component } from 'react';
import Home from "../pages/home";
import About from "../pages/about";
import Resume from "../pages/resume";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";

class Body extends Component {
  render() {
    return (
      <div className="App-body">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    );
  }
}

export default Body;
