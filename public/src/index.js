import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// Infiate loop changing the images
var myIndex = 0;
carousel();

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
    setTimeout(carousel, 4000); // Change image every 2 seconds
}
