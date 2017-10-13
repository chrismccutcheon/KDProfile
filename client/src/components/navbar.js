import React, { Component } from 'react';
import NavButton from './navButton';
import {connect} from 'react-redux';
import {setPage, setSelected} from './../actions/appActions';
@connect((store)=>{
  return{
    page: store.app.page,
    selected: store.app.selected
  }
})
class NavBar extends Component {
  render(){
    return (
      <div className="navbar">
        <nav>
          <NavButton isSelected={this.props.selected === "0" ? true : false}  name="Home" click={()=>this.props.dispatch(setPage("Home"))} selected={()=>this.props.dispatch(setSelected("0"))}/>
          <NavButton isSelected={this.props.selected === "1" ? true : false}  name="About" click={()=>this.props.dispatch(setPage("About"))} selected={()=>this.props.dispatch(setSelected("1"))}/>
          <NavButton isSelected={this.props.selected === "2" ? true : false}  name="Resume" click={()=>this.props.dispatch(setPage("Resume"))} selected={()=>this.props.dispatch(setSelected("2"))}/>
          <NavButton isSelected={this.props.selected === "3" ? true : false}  name="Portfolio" click={()=>this.props.dispatch(setPage("Portfolio"))} selected={()=>this.props.dispatch(setSelected("3"))}/>
          <NavButton isSelected={this.props.selected === "4" ? true : false}  name="Contact" click={()=>this.props.dispatch(setPage("Contact"))} selected={()=>this.props.dispatch(setSelected("4"))}/>
        </nav>
      </div>
    )
  }
}

export default NavBar;
