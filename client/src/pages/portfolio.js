import React, { Component } from 'react';
import Images from '../images/images';

class Portfolio extends Component {
  constructor(props){
    super(props);
    this.state = {res: null};
  }
  componentDidMount(){
    return fetch(`/resume/portfolio`,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(this.checkStatus)
    .then(this.parseJSON)
    .then(this.setResumeData.bind(this));
  }
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const error = new Error(`HTTP Error ${response.statusText}`);
    error.status = response.statusText;
    error.response = response;
    console.log(error); // eslint-disable-line no-console
    throw error;
  }

  parseJSON(response) {
    return response.json();
  }
  setResumeData(data){
    this.setState({
      res: data
    })
  }
  render(){
    const data = this.state.res;
    if(data){
      var portElems = data.portfolio.map((elem, j) => {
        return (<div key={j.toString()+"port"} className="resumeElem">
          <h4 className="dataElem">{elem.title}</h4>
            {elem.paragraphs.map((role, i)=>
              <p key={i.toString()+ "para"}>{role}</p>
            )
            }
            {elem.images.map((photo, i)=> {
              console.log(photo.img);
              return (<div key={i.toString()+"propImg"}>
                <img key={i.toString()+ "photo"} className="portImg" alt="logo" src={Images[photo.img]} />
                <p key={i.toString()+ "desc"}>{photo.desc}</p>
              </div>)
            })
            }

        </div>)
      });
    }
    return (
      <div className="portfolio">
        {portElems}
      </div>
    )
  }
}

export default Portfolio;
