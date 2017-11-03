import React, { Component } from 'react';
import EducationForm from './components/forms/educationForm';
import ExperienceForm from './components/forms/experienceForm';
import {changeTempRes} from './../actions/resumeActions';
import {connect} from 'react-redux';
@connect((store)=>{
  return{
    resume: store.resume.res
  }
})
class Admin extends Component {
  // constructor(props){
  //   super(props);
  //
  //   this.onChange = this.onChange.bind(this);
  // }
  //
  // onChange(type, pos, inputType, value){
  //   this.props.dispatch(changeTempRes(type, pos, inputType, value));
  // }

  render(){
    var educationForms = null;
    var experienceForms = null;
    if(this.props.resume){
      if(this.props.resume.resume.education.length > 0){
        educationForms = this.props.resume.resume.education.map(item=>{
          <EducationForm onChange={(type, pos, inputType, value) => this.props.dispatch(changeTempRes(type, pos, inputType, value))} title={item.title} school={item.school} location={item.location} degree={item.degree} gradDate={this.gradDate} misc={this.misc} />
        })
      }
      if(this.props.resume.resume.experience.length > 0){
        experienceForms = this.props.resume.resume.experience.map((item, index)=>
          <ExperienceForm key={index} onChange={(type, pos, inputType, value, roleIndex) => this.props.dispatch(changeTempRes(type, pos, inputType, value, roleIndex))} title={item.title} roles={item.roles} employer={item.employer} duration={item.duration} />
        )
      }
    }
    return (
      <div className="admin">
        <h2>Admin Page</h2>
        {educationForms ? educationForms : ""}
        {experienceForms ? experienceForms : ""}
      </div>
    )
  }
}

export default Admin;
