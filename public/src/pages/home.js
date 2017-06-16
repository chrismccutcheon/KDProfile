import React, { Component } from 'react';
import court from '../images/court.jpg';
import lab from '../images/lab.jpg';
import bridge from '../images/bridge.jpg';

class Home extends Component {
  render(){
    return (
      <div className="homepage">
        <img src={court} className="homeImg" alt="logo" />
        <img src={lab} className="homeImg" alt="logo" />
        <img src={bridge} className="homeImg" alt="logo" />
      </div>
    )
  }
}

export default Home;
