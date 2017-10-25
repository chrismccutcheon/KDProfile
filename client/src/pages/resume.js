import React, { Component } from 'react';
import axios from 'axios';
import EducationView from './components/educationView';
import ExperienceView from './components/experienceView';
import VolunteerView from './components/volunteerView';
import OtherView from './components/otherView';
import {connect} from 'react-redux';
import {fetchResume, fetchedResume} from './../actions/resumeActions';
@connect((store)=>{
  return{
    resume: store.resume.res
  }
})
class Resume extends Component {
  async componentDidMount(){
    this.props.dispatch(fetchResume());
    const edu = await axios.get('/api/education');
    const exp = await axios.get('/api/experience');
    const vol = await axios.get('/api/volunteering');
    const other = await axios.get('/api/other');
    this.props.dispatch(fetchedResume({
      resume: {
        education: edu.data,
        experience: exp.data,
        volunteering: vol.data,
        otherExp: other.data,
      }
    }));
  }
  render(){
    const data = this.props.resume;
    if(data){
      var eduElems = data.resume.education.map((elem) => {
        if(elem.title){
          return <EducationView gradDate={elem.gradDate} title={elem.title} school={elem.school} degree={elem.degree} id={elem._id} />;
        } else {
          return (<div key={elem._id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.gradDate}</h5>
            <h5 className="eduElem">{elem.school} | {elem.location}</h5>
            <h5 className="eduElem">{elem.degree}</h5>
            <h5 className="eduElem">{elem.misc}</h5>
          </div>)
        }
      });
      var profElems = data.resume.experience.map((elem) => {
        return (
          <div key={elem._id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.duration}</h5>
            <h5 className="expElem">{elem.employer}</h5>
            <h4 className="expElem">{elem.title} </h4>
            <ul className="rolesList">{
              elem.roles.map((role, i)=>
                <li key={i.toString()+ "role"}>{role}</li>)
              }
            </ul>
          </div>
        )
      });
      var volElems = data.resume.volunteering.map((elem) => {
        return (
          <div key={elem._id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.duration}</h5>
            <h5 className="expElem">{elem.organization}</h5>
            <ul className="rolesList">{
              elem.roles.map((role, i)=>
                <li key={i.toString()+ "role"}>{role}</li>)
              }
            </ul>
          </div>
        )
      });
      var otherElems = data.resume.otherExp.map((elem) => {
        return (
          <div key={elem.id.toString()+"exp"} className="resumeElem">
            <h5 className="date">{elem.duration}</h5>
            <h5 className="expElem">{elem.organization}</h5>
            <h4 className="expElem">{elem.title} </h4>
            <ul className="rolesList">{
              elem.roles.map((role, i)=>
                <li key={i.toString()+ "role"}>{role}</li>)
              }
            </ul>
          </div>
        )
      });
    }
    return (
      <div className="resumeBody">
        <h2 className="eduTitle">Education</h2>
        {eduElems}
        <h2 className="profExpTitle">Professional Experience</h2>
        {profElems}
        <h2 className="profExpTitle">Volunteering</h2>
        {volElems}
        <h2 className="profExpTitle">Other Experience</h2>
        {otherElems}
      </div>
    )
  }
}

export default Resume;
