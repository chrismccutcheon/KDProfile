import React, { Component } from 'react';
import Home from "../pages/home";
import About from "../pages/about";
import Resume from "../pages/resume";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import Admin from "../pages/admin";

class Body extends Component {
  render() {
    return (
      <div className="App-body">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Admin />
      </div>
    );
  }
}

export default Body;
