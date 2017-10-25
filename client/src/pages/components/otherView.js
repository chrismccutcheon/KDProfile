import React, { Component } from 'react';

class OtherView extends Component {
  render(){
    return (
      <div key={this.props._id.toString()+"edu"} className="resumeElem">
        <h5 className="date">{this.props.gradDate}</h5>
        <h5 className="eduElem">{this.props.title}</h5>
        <h5 className="eduElem">{this.props.school} | {this.props.location}</h5>
        <h5 className="eduElem">{this.props.degree}</h5>
      </div>
    )
  }
}

export default OtherView;
