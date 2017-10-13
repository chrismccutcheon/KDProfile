import React, { Component } from 'react';
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Body from './components/body';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>
        <Body />
        <Footer text="This is the footer"/>
      </div>
    );
  }
}

export default App;
