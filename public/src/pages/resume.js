import React, { Component } from 'react';

class Resume extends Component {

  componentDidMount(){
    console.log("Hello there");
    return fetch(`/users`,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(this.checkStatus)
    .then(this.parseJSON)
    .then(this.setResumeData);
  }
  checkStatus(response) {
    console.log(response);
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }

  parseJSON(response) {
    console.log(response);
    return response.json();
  }
  setResumeData(data){
    console.log(data);
  }
  render(){
    return (
      <div className="resumeBody">
      
      </div>
    )
  }
}

export default Resume;
