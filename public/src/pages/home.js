import React, { Component } from 'react'
import flowers from '../images/flowers.jpg';
import lab from '../images/lab.jpg';
// import street from '../images/street.jpg';
import bridge from '../images/bridge.jpg';

class Home extends Component {
  constructor(props){
    super(props);
    this.pageData = [bridge, lab, flowers];
  }
  render(){
    return (
        <HomeScreen backgroundImages={this.pageData} />
    )
  }
}

function HomeScreen(props){
  var homeStyles = [];
  var titles = ["Katharine Decker","Dedicated","Loyalty"];
  for(var i = 0; i < props.backgroundImages.length; i++){
    var curImage = props.backgroundImages[i];
    homeStyles.push({style: {'backgroundImage': `url(${curImage})`}, index: i, title: titles[i]});
  }
  const homepages = homeStyles.map((page) =>
    <div key={page.index.toString()} className="homeSlides" style={page.style}>
      <h1 className="homepageTitle">{page.title}</h1>
    </div>
  );
  console.log(homepages);
  return (
    <div  className="homepage" >
      {homepages}
    </div>
  )
}

export default Home;
