import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

class CalDining extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuData: null
    };
    this.getMenus = this.getMenus.bind(this);
  }

  async getMenus(event) {
    event.preventDefault();
    let response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    })
    let data = await response.json();
    data = JSON.stringify(data);
    // data = JSON.parse(data);
    this.setState({menuData: data});
  }

  render(){
    return (
      <div>
        <div className="topnav">
          <li style={{float:'left'}}><a href="index.html">Home</a></li>
          <li style={{float:'left'}}><a href="CalDining.html">CalDining</a></li>
          <li style={{float:'left'}}><a href="AroundBerkeley.html">Around Berkeley</a></li>
          <li style={{float:'right'}}><a href="#profile">Profile</a></li>
        </div>
        <button type = "button" id = "frontGoButton" onClick={this.getMenus}>
          Get today's menu
        </button>
        <p id="menu">{this.state.menuData}</p>
      </div>
    );
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default CalDining;
