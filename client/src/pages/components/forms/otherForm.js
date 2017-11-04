import React, { Component } from 'react';

class OtherForm extends Component {
  render(){
    var roles = this.props.roles.map((item, index)=>
      <div key={index}>
        <input className="inputRoles" key={index} type="text" value={item} onChange={(e)=> this.props.onChange("experience", this.props.position, "roles", e.target.value, index)}/>
        <br />
      </div>
    );
    return (
      <div className="formInput">
        <input className="inputTitle" type="text" value={this.props.title} onChange={(e)=>this.props.onChange("experience", this.props.position, "title", e.target.value)} />
        <br />
        <input className="inputOrganization" type="text" value={this.props.organization} onChange={(e)=>this.props.onChange("experience", this.props.position, "employer", e.target.value)} />
        <br />
        <input className="inputDuration" type="text" value={this.props.duration} onChange={(e)=>this.props.onChange("experience", this.props.position, "duration", e.target.value)} />
        <br />
        <span>Roles</span>
        {roles}
        <button onClick={()=>{
          this.props.addRole("other", this.props.position)
        }}>+</button>
      </div>
    )
  }
}

export default OtherForm;
