import React, { Component } from 'react';
import NavButton from './navButton';

class NavBar extends Component {
  constructor(props){
    super(props);
    this.state = {"selected": 0}
  }
  changeSelected(postion, oldPos){
    this.state.selected[oldPos] = false;
    this.state.selected[postion] = true;
  }
  render(){
    return (
      <div className="navbar">
        <nav>
          <NavButton isSelected={this.state.selected == 0 ? true : false} id="0" name="Home" click={this.props.click}/>
          <NavButton isSelected={this.state.selected == 1 ? true : false} id="1" name="About" click={this.props.click}/>
          <NavButton isSelected={this.state.selected == 2 ? true : false} id="2" name="Resume" click={this.props.click}/>
          <NavButton isSelected={this.state.selected == 3 ? true : false} id="3" name="Portfolio" click={this.props.click}/>
          <NavButton isSelected={this.state.selected == 4 ? true : false} id="4" name="Contact" click={this.props.click}/>
        </nav>
      </div>
    )
  }
}

export default NavBar;
