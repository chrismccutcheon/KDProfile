import React, { Component } from 'react';
var scrollToElement = require('scroll-to-element');

class NavButton extends Component {
  render(){
    var backgroundStyle = null;
    if(this.props.isSelected){
      backgroundStyle={
        backgroundColor: 'white'
      }
      var topOffset = -100;
      switch (this.props.name) {
        case "Home":
          scrollToElement('.homeScreen',{
            offset: topOffset
          });
          break;
        case "About":
          scrollToElement('.about',{
            offset: topOffset
          });
          break;
        case "Resume":
          scrollToElement('.resumeBody',{
            offset: topOffset
          });
          break;
        case "Portfolio":
          scrollToElement('.portfolio',{
            offset: topOffset
          });
          break;
        case "Contact":
          scrollToElement('.contact',{
            offset: topOffset
          });
          break;
        default:

      }
    }
    return (
      <button className="navBtn" style={backgroundStyle} id={this.props.id} onClick={() => {
        this.props.click(this.props.name);
        this.props.selected(this.props.id);
      }}>{this.props.name}</button>
    )
  }
}

export default NavButton;
