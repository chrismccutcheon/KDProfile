import React, { Component } from 'react';
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import Body from './components/body';
import './App.css';
import Admin from "./pages/admin";
import axios from 'axios';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  async componentDidMount(){
    // const action = await axios.post('/api/addexperience',{
    //     "employer": "Orlando Magic, Orlando, FL.",
    //     "title": "Premium Guest Service Representative",
    //     "roles": ["Assist Premium clientele at all events at Amway Center (Orlando Magic home games, concerts, family shows)", "Assist in Premium areas by checking tickets, taking complaints, troubleshooting during the event, and ensuring Premium clientele’s needs are met throughout event.", "Assist with pre-event needs and set-up. Assist premium clientele on different levels of Amway Center throughout event. Break down post-event."],
    //     "duration": "September 2016 to Present"
    // });
    // console.log(action.data);
    const action = await axios.get('/api/education');
    console.log(action.data);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <NavBar />
          </div>
          <Route exact path="/" render={(props) => (<Body />)} />
          <Route path="/admin" exact render={(props) => (<Admin  />)} />
          <Footer text="This is the footer"/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
