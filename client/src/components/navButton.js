import React, { Component } from 'react';


class NavButton extends Component {
  render(){
    var backgroundStyle = null;
    if(this.props.isSelected){
      backgroundStyle={
        backgroundColor: 'white'
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
