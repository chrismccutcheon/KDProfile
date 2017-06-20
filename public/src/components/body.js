import React, { Component } from 'react';
import Home from "../pages/home";
import About from "../pages/about";
import Resume from "../pages/resume";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

class Body extends Component {
  render() {
    let page = null;
    switch (this.props.type) {
      case "Home":
        page = <Home />
        break;
      case "About":
        page = <About />
        break;
      case "Resume":
        page = <Resume />
        break;
      case "Portfolio":
        page = <Portfolio />
        break;
      case "Contact":
        page = <Contact />
        break;

      default:

    }
    return (
      <div className="App-body">
        <div className="leftbody">
          hello
        </div>
        {page}
        <div className="rightBody">
          hello
        </div>
      </div>
    );
  }
}

export default Body;
