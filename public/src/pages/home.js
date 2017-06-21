import React, { Component } from 'react'
import flowers from '../images/flowers.jpg';
import lab from '../images/lab.jpg';
import street from '../images/street.jpg';
import bridge from '../images/bridge.jpg';

class Home extends Component {
  constructor(props){
    super(props);
    this.changeHomepage = this.changeHomepage.bind(this);
    this.pageData = [{
      title: "Katharine Decker",
      image: bridge
    },{
      title: "Dedicated",
      image: lab
    },{
      title: "Passionate",
      image: flowers
    }]
    this.state = {position: 0};
  }
  changeHomepage(action){
    var curPos = this.state.position;
    if(action === "up"){
      if(curPos === this.pageData.length-1){
        curPos = 0;
      } else {
        curPos++;
      }
    } else {
      if (curPos === 0) {
        curPos = this.pageData.length-1;
      }
      curPos--;
    }
    this.setState({position: curPos});
  }


  render(){

    let pageImage = this.pageData[this.state.position].image;
    let pageTitle = this.pageData[this.state.position].title;

    return (
        <HomeScreen title={pageTitle} backgroundImage={pageImage} move={this.changeHomepage}/>
    )
  }
}

function HomeScreen(props){
  const backgroundStyle = {
    backgroundImage: `url(${props.backgroundImage})`
  };
  return (
    <div  className="homepage">
      <div className="leftbody">
        <button className="nextbtn" onClick={() => props.move("back")}> &#x2190; </button>
      </div>
      <div className="homeCenter">
        <div className="homeTitle">
          <h1 className="homepageTitle">{props.title}</h1>
        </div>
        <div className="homeImage" style={backgroundStyle}>
        </div>
      </div>
      <div className="rightBody">
          <button className="backbtn" onClick={() => props.move("up")}> &#x2192; </button>
      </div>
    </div>
  )
}


export default Home;
