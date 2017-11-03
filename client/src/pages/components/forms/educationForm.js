import React, { Component } from 'react';

class EducationForm extends Component {
  render(){
    return (
      <div className="formInput">
        <input className="inputTitle" type="text" value={this.props.title}/>
        <br />
        <input className="inputSchool" type="text" value={this.props.school} />
        <br />
        <input className="inputLocation" type="text" value={this.props.location}/>
        <br />
        <input className="inputDegree" type="text" value={this.props.degree}/>
        <br />
        <input className="inputGradDate" type="text" value={this.props.gradDate}/>
        <br />
        <input className="inputMisc" type="text" value={this.props.misc}/>
        <br />
      </div>
    )
  }
}

export default EducationForm;
