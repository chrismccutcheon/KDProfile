import React, { Component } from 'react';

class NavButton extends Component {
  render(){
    return (
      <button onClick={() => this.props.click(this.props.name)}>{this.props.name}</button>
    )
  }
}

export default NavButton;
