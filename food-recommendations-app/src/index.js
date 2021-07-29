import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Index extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="front-background-image">
        <div className="font-page-text">
          <h1 id = "Title"> Bears Eatin Good</h1>
          <div className ="frontPageDescription">
            <p>Where to eat and what to eat!</p>
            <p>Codeology Fall 2021 Project</p>
            <p>Sort and shift through CalDining options and the endless restaurants around campus</p>
          </div>
          <button type = "button" id = "frontGoButton">
            Lets Eat!
          </button>
        </div>
      </div>
    );}
}


ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
