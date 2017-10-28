import React, { Component } from 'react';

class ExperienceForm extends Component {
  render(){
    var roles = this.props.roles.map((item, index)=>{
      <input key={index} type="text" value={item} onChange={(e)=> this.props.onChange("experience", this.props.position, "roles", e.target.value, index)}/>
    });
    return (
      <form className="experienceInput">
        <input className="inputTitle" type="text" value={this.props.title} onChange={(e)=>this.props.onChange("experience", this.props.position, "title", e.target.value)} />
        <br />
        <input className="inputEmployer" type="text" value={this.props.school} onChange={(e)=>this.props.onChange("experience", this.props.position, "employer", e.target.value)} />
        <br />
        <input className="inputDuration" type="text" value={this.props.location} onChange={(e)=>this.props.onChange("experience", this.props.position, "duration", e.target.value)} />
        <br />

      </form>
    )
  }
}

export default ExperienceForm;
