import React, { Component } from 'react';

class VolunteerForm extends Component {
  render(){
    var roles = this.props.roles.map((item, index)=>
      <div key={index}>
        <label>
          -
          <textarea className="inputRoles" key={index} type="text" value={item} onChange={(e)=> this.props.onChange("volunteering", this.props.position, "roles", e.target.value, index)}/>
        </label>
        <br />
      </div>
    );
    return (
      <div className="formInput">
        <label>
          Organization:
          <input className="defaultInput" type="text" value={this.props.organization} onChange={(e)=>this.props.onChange("volunteering", this.props.position, "organization", e.target.value)} />
        </label>
        <br />
        <label>
          Duration:
          <input className="defaultInput" type="text" value={this.props.duration} onChange={(e)=>this.props.onChange("volunteering", this.props.position, "duration", e.target.value)} />
        </label>
        <br />
        <span>Roles</span>
        {roles}
        <button className="addRole" onClick={()=>{
          this.props.addRole("volunteering", this.props.position)
        }}>+ Role</button>
      </div>
    )
  }
}

export default VolunteerForm;
