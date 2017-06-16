import React, { Component } from 'react';
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Body from './components/body';
import Home from "./pages/home";
import './App.css';

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />

class App extends Component {
  constructor(props){
    super(props);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.state = {page: "Home"};
  }
  handleNavClick(pageClicked){
    this.setState({page: pageClicked})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar click={this.handleNavClick}/>
        </div>
        <Body type={this.state.page}/>
        <Footer text="This is the footer"/>
      </div>
    );
  }
}

export default App;
