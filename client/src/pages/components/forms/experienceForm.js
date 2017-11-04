import React, { Component } from 'react';
class ExperienceForm extends Component {
  render(){
    var roles = this.props.roles.map((item, index)=>
      <div key={index}>
        <input className="inputRoles" key={index} type="text" value={item} onChange={(e)=> this.props.onChange("experience", this.props.position, "roles", e.target.value, index)}/>
        <br />
      </div>
    );
    return (
      <div className="formInput">
        <input className="defaultInput" type="text" value={this.props.title} onChange={(e)=>this.props.onChange("experience", this.props.position, "title", e.target.value, 0)} />
        <br />
        <input className="defaultInput" type="text" value={this.props.employer} onChange={(e)=>this.props.onChange("experience", this.props.position, "employer", e.target.value, 0)} />
        <br />
        <input className="defaultInput" type="text" value={this.props.duration} onChange={(e)=>this.props.onChange("experience", this.props.position, "duration", e.target.value, 0)} />
        <br />
        <span>Roles</span>
        {roles}
        <button onClick={()=>{
          this.props.addRole("experience", this.props.position)
        }}>+</button>
      </div>
    )
  }
}

export default ExperienceForm;
