import React, { Component } from 'react';

class EducationForm extends Component {
  render(){
    return (
      <div className="formInput">
        <label>
          Title:
          <input className="defaultInput" onChange={(e)=>this.props.onChange("education", this.props.position, "title", e.target.value)} type="text" value={this.props.title}/>
        </label>
        <br />
        <label>
          School:
          <input className="defaultInput" onChange={(e)=>this.props.onChange("education", this.props.position, "school", e.target.value)} type="text" value={this.props.school} />
        </label>
        <br />
        <label>
          Location:
          <input className="defaultInput" onChange={(e)=>this.props.onChange("education", this.props.position, "location", e.target.value)} type="text" value={this.props.location}/>
        </label>
        <br />
        <label>
          Degree:
          <input className="defaultInput" onChange={(e)=>this.props.onChange("education", this.props.position, "degree", e.target.value)} type="text" value={this.props.degree}/>
        </label>
        <br />
        <label>
          Graduation Date:
          <input className="defaultInput" onChange={(e)=>this.props.onChange("education", this.props.position, "gradDate", e.target.value)} type="text" value={this.props.gradDate}/>
        </label>
        <br />
        <label>
          Other Information: 
          <input className="defaultInput" onChange={(e)=>this.props.onChange("education", this.props.position, "misc", e.target.value)} type="text" value={this.props.misc}/>
        </label>
        <br />
      </div>
    )
  }
}

export default EducationForm;
