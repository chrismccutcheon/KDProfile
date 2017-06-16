import React, { Component } from 'react';
import NavButton from './navButton';

class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <nav>
          <NavButton name="Home" click={this.props.click}/>
          <NavButton name="About" click={this.props.click}/>
          <NavButton name="Resume" click={this.props.click}/>
          <NavButton name="Portfolio" click={this.props.click}/>
          <NavButton name="Contact" click={this.props.click}/>
        </nav>
      </div>
    )
  }
}

export default NavBar;
