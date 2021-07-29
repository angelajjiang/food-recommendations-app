import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class choosePath extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="topnav">
        <li style="float:left"><a href="index.html">Home</a></li>
        <li style="float:left"><a href="CalDining.html">CalDining</a></li>
        <li style="float:left"><a href="AroundBerkeley.html">Around Berkeley</a></li>
        <li style="float:right"><a href="#profile">Profile</a></li>
      </div>
      <h2 class="BerkeleyEatinGood">Berkeley Eatin Good</h2>
      <p id = "chooseDescription">Choose one of the options below :)</p>
      <div className = "imageOptions">
        <div className ="CalDining-image">
          <a href="CalDining.html">
            <img border="0" alt="CalDining" src="food spread bowls.jpg" width="450" height="350">
          </a>
          <h3 className = "imageLabel">CalDining</h3>
        </div>

        <div className ="AroundBerkeley-image">
          <a href="AroundBerkeley.html">
            <img border="0" alt="Around Berkeley" src="breakfast spread.jpg" width="450" height="350">
          </a>
          <h3 className = "imageLabel"> Around Berkeley</h3>
        </div>
      </div>
    );}
}


ReactDOM.render(
  <React.StrictMode>
    <choosePath />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
