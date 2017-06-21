import React, { Component } from 'react';


class NavButton extends Component {
  render(){
    var style = null;
    if(this.props.isSelected){
      style={
        backgroundColor: 'white'
      }
    }
    return (
      <button id={this.props.id} onClick={() => this.props.click(this.props.name)}>{this.props.name}</button>
    )
  }
}

export default NavButton;
