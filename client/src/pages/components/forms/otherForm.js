import React, { Component } from 'react';

class OtherForm extends Component {
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
          Title:
          <input className="inputTitle" type="text" value={this.props.title} onChange={(e)=>this.props.onChange("experience", this.props.position, "title", e.target.value)} />
        </label>
        <br />
        <label>
          Organization:
          <input className="inputOrganization" type="text" value={this.props.organization} onChange={(e)=>this.props.onChange("experience", this.props.position, "employer", e.target.value)} />
        </label>
        <br />
        <label>
          Duration:
          <input className="inputDuration" type="text" value={this.props.duration} onChange={(e)=>this.props.onChange("experience", this.props.position, "duration", e.target.value)} />
        </label>
        <br />
        <span>Roles</span>
        {roles}
        <button className="addRole" onClick={()=>{
          this.props.addRole("other", this.props.position)
        }}>+ Role</button>
      </div>
    )
  }
}

export default OtherForm;
