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
  componentDidMount(){
    carousel();
  }
  render(){
    return (
      <div className="homeScreen">
        <h1 className="hometitle">Katharine Decker</h1>
        <HomeScreen backgroundImages={this.pageData} />
      </div>
    )
  }
}

function HomeScreen(props){
  var homeStyles = [];
  var titles = ["","",""];
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
var myIndex = 0;
function carousel() {
    var i;
    var x = document.getElementsByClassName("homeSlides");
    if(x.length > 0){
      for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
      }
      myIndex++;
      if (myIndex > x.length) {myIndex = 1}
      x[myIndex-1].style.display = "block";
    }
    setTimeout(carousel, 8000); // Change image every 2 seconds
}


export default Home;
