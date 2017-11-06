import React, { Component } from 'react';
class ExperienceForm extends Component {
  render(){
    var roles = this.props.roles.map((item, index)=>
      <div key={index}>
        <label>
          -
          <textarea className="inputRoles" key={index} type="text" value={item} onChange={(e)=> this.props.onChange("experience", this.props.position, "roles", e.target.value, index)}/>
        </label>
        <br />
      </div>
    );
    return (
      <div className="formInput">
        <label>
          Job Title:
          <input className="defaultInput" type="text" value={this.props.title} onChange={(e)=>this.props.onChange("experience", this.props.position, "title", e.target.value, 0)} />
        </label>
        <br />
        <label>
          Employer:
          <input className="defaultInput" type="text" value={this.props.employer} onChange={(e)=>this.props.onChange("experience", this.props.position, "employer", e.target.value, 0)} />
        </label>
        <br />
        <label>
          Duration:
          <input className="defaultInput" type="text" value={this.props.duration} onChange={(e)=>this.props.onChange("experience", this.props.position, "duration", e.target.value, 0)} />
        </label>
        <br />
        <span>Roles</span>
        {roles}
        <button className="addRole" onClick={()=>{
          this.props.addRole("experience", this.props.position)
        }}>+ Role</button>
      </div>
    )
  }
}

export default ExperienceForm;
