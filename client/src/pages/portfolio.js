import React, { Component } from 'react';
import Images from '../images/images';
import {connect} from 'react-redux';
import {fetchPortfolio, fetchedPortfolio} from './../actions/portfolioActions';
@connect((store)=>{
  return{
    portfolio: store.portfolio.portfolio
  }
})
class Portfolio extends Component {
  componentDidMount(){
    this.props.dispatch(fetchPortfolio());
    fetch(`/resume/portfolio`,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }).then(this.checkStatus)
    .then(this.parseJSON)
    .then((data)=>{
      console.log(data);
      this.props.dispatch(fetchedPortfolio(data))
    });
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
  render(){
    const data = this.props.portfolio;
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
