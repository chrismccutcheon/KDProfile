import React, { Component } from 'react';

class EducationForm extends Component {
  render(){
    return (
      <div className="formInput">
        <input className="defaultInput" type="text" value={this.props.title}/>
        <br />
        <input className="defaultInput" type="text" value={this.props.school} />
        <br />
        <input className="defaultInput" type="text" value={this.props.location}/>
        <br />
        <input className="defaultInput" type="text" value={this.props.degree}/>
        <br />
        <input className="defaultInput" type="text" value={this.props.gradDate}/>
        <br />
        <input className="defaultInput" type="text" value={this.props.misc}/>
        <br />
      </div>
    )
  }
}

export default EducationForm;
