import React, { Component } from 'react'
// import {Motion, spring} from 'react-motion';
import flowers from '../images/0.jpg';
import lab from '../images/1.jpg';
import street from '../images/2.jpg';
import bridge from '../images/3.jpg';
import court from '../images/4.jpg';

class Home extends Component {
  constructor(props){
    super(props);
    this.changeHomepage = this.changeHomepage.bind(this);
    this.pageData = [{
      title: "Katharine Decker",
      image: bridge
    },{
      title: "Dedication",
      image: lab
    },{
      title: "Service",
      image: court
    },{
      title: "Loyalty",
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

    // switch (this.state.homePage) {
    //   case "Main":
    //     page = <HomeScreen title="Katharine Decker" backgroundImage={flowers} left="Hard Working" right="Dedication" move={this.changeHomepage}/>
    //     break;
    //   case "Dedication":
    //     page = <HomeScreen title="Dedication" backgroundImage={lab} left="Main" right="Service" move={this.changeHomepage}/>
    //     break;
    //   case "Hard Working":
    //     page = <HomeScreen title="Hard Working" backgroundImage={court} left="Loyalty" right="Main" move={this.changeHomepage}/>
    //     break;
    //   case "Service":
    //     page = <HomeScreen title="Service" backgroundImage={street} left="Loyalty" right="Dedication" move={this.changeHomepage}/>
    //     break;
    //   case "Loyalty":
    //     page = <HomeScreen title="Loyalty" backgroundImage={bridge} left="Service" right="Hard Working" move={this.changeHomepage}/>
    //     break;
    //
    //   default:
    //
    // }
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

//
// const springSettings = {stiffness: 170, damping: 26};
// const NEXT = 'show-next';

//
// constructor(props) {
//   super(props);
//   var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//   var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
//   this.state = {
//     photos: [[w*70/100, h-170], [500, 350],[500, 350],[500, 350],[500, 350]],
//     currPhoto: 0,
//   };
// };
//
// handleChange = ({target: {value}}) => {
//   this.setState({currPhoto: value});
// };
//
// clickHandler = (btn) => {
//   let photoIndex = btn === NEXT ? this.state.currPhoto+1 : this.state.currPhoto-1;
//
//   photoIndex = photoIndex >= 0 ? photoIndex : this.state.photos.length - 1;
//   photoIndex = photoIndex >= this.state.photos.length ? 0 : photoIndex;
//
//   this.setState({
//     currPhoto: photoIndex
//   })
// };
//
// render() {
//   const {photos, currPhoto} = this.state;
//   const [currWidth, currHeight] = photos[currPhoto];
//
//   const widths = photos.map(([origW, origH]) => currHeight / origH * origW);
//
//   const leftStartCoords = widths
//     .slice(0, currPhoto)
//     .reduce((sum, width) => sum - width, 0);
//
//   let configs = [];
//   photos.reduce((prevLeft, [origW, origH], i) => {
//     configs.push({
//       left: spring(prevLeft, springSettings),
//       height: spring(currHeight, springSettings),
//       width: spring(widths[i], springSettings),
//     });
//     return prevLeft + widths[i];
//   }, leftStartCoords);
//
//   return (
//     <div>
//       <div>Scroll Me</div>
//       <button onClick={this.clickHandler.bind(null, '')}>Previous</button>
//       <input
//         type="range"
//         min={0}
//         max={photos.length - 1}
//         value={currPhoto}
//         onChange={this.handleChange} />
//       <button onClick={this.clickHandler.bind(null, NEXT)}>Next</button>
//       <div className="homepage">
//         <Motion style={{height: spring(currHeight), width: spring(currWidth)}}>
//           {container =>
//             <div className="demo4-inner" style={container}>
//               {configs.map((style, i) =>
//                 <Motion key={i} style={style}>
//                   {style =>
//                     <img className="demo4-photo" src={court} style={style} alt="logo" />
//                   }
//                 </Motion>
//               )}
//             </div>
//           }
//         </Motion>
//       </div>
//     </div>
//   );
// };
