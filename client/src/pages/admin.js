import React, { Component } from 'react';
import EducationForm from './components/forms/educationForm';
import ExperienceForm from './components/forms/experienceForm';
import VolunteerForm from './components/forms/volunteerForm';
import OtherForm from './components/forms/otherForm';
import {changeTempRes, addTempRole, addForm} from './../actions/resumeActions';
import {connect} from 'react-redux';
@connect((store)=>{
  return{
    resume: store.resume.tempRes
  }
})
class Admin extends Component {

  render(){
    var educationForms = null;
    var experienceForms = null;
    var volunteerForms = null;
    var otherForms = null;
    if(this.props.resume){
      if(this.props.resume.resume.education.length > 0){
        educationForms = this.props.resume.resume.education.map((item, index)=>{
          <EducationForm addRole={(type, pos)=>this.props.dispatch(addTempRole(type, pos))} key={index} position={index} onChange={(type, pos, inputType, value) => this.props.dispatch(changeTempRes(type, pos, inputType, value))} title={item.title} school={item.school} location={item.location} degree={item.degree} gradDate={this.gradDate} misc={this.misc} />
        })
      }
      if(this.props.resume.resume.experience.length > 0){
        experienceForms = this.props.resume.resume.experience.map((item, index)=>
          <ExperienceForm addRole={(type, pos)=>this.props.dispatch(addTempRole(type, pos))} key={index} position={index} onChange={(type, pos, inputType, value, roleIndex) => this.props.dispatch(changeTempRes(type, pos, inputType, value, roleIndex))} title={item.title} roles={item.roles} employer={item.employer} duration={item.duration} />
        )
      }
      if(this.props.resume.resume.volunteering.length > 0){
        volunteerForms = this.props.resume.resume.volunteering.map((item, index)=>
          <VolunteerForm addRole={(type, pos)=>this.props.dispatch(addTempRole(type, pos))} key={index} position={index} onChange={(type, pos, inputType, value, roleIndex) => this.props.dispatch(changeTempRes(type, pos, inputType, value))}  organization={item.organization} duration={item.duration} roles={item.roles} />
        )
      }
      if(this.props.resume.resume.otherExp.length > 0){
        volunteerForms = this.props.resume.resume.other.map((item, index)=>
          <OtherForm addRole={(type, pos)=>this.props.dispatch(addTempRole(type, pos))} key={index} position={index} onChange={(type, pos, inputType, value, roleIndex) => this.props.dispatch(changeTempRes(type, pos, inputType, value))} title={item.title} organization={item.organization} duration={item.duration} roles={item.roles} />
        )
      }
    }
    return (
      <div className="admin">
        <h2>Admin Page</h2>
        <span className="addTitle">Education</span>
        <button className="addForm" onClick={()=>addForm("education")}>+</button>
        {educationForms ? educationForms : ""}
        <br /><hr />
        <span className="addTitle">Experience</span>
        <button className="addForm" onClick={()=>addForm("experience")}>+</button>
        {experienceForms ? experienceForms : ""}
        <br /><hr />
        <span className="addTitle">Volunteering</span>
        <button className="addForm" onClick={()=>addForm("volunteering")}>+</button>
        {volunteerForms ? volunteerForms : ""}
        <br /><hr />
        <span className="addTitle">Other</span>
        <button className="addForm" onClick={()=>addForm("otherExp")}>+</button>
        {otherForms ? otherForms : ""}
      </div>
    )
  }
}

export default Admin;
