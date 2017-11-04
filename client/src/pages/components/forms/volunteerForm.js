import React, { Component } from 'react';

class VolunteerForm extends Component {
  render(){
    var roles = this.props.roles.map((item, index)=>
      <div key={index}>
        <input className="inputRoles" key={index} type="text" value={item} onChange={(e)=> this.props.onChange("volunteering", this.props.position, "roles", e.target.value, index)}/>
        <br />
      </div>
    );
    return (
      <div className="formInput">
        <input className="inputOrganization" type="text" value={this.props.organization} onChange={(e)=>this.props.onChange("volunteering", this.props.position, "organization", e.target.value)} />
        <br />
        <input className="inputDuration" type="text" value={this.props.duration} onChange={(e)=>this.props.onChange("volunteering", this.props.position, "duration", e.target.value)} />
        <br />
        <span>Roles</span>
        {roles}
        <button onClick={()=>{
          this.props.addRole("volunteering", this.props.position)
        }}>+</button>
      </div>
    )
  }
}

export default VolunteerForm;
