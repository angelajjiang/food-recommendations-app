import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CalDining from './CalDining';
import AroundBerkeley from './AroundBerkeley';

class ChoosePath extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      choice: 0
    };
    this.home = this.home.bind(this);
    this.diningHalls = this.diningHalls.bind(this);
    this.restaurants = this.restaurants.bind(this);
  }

  async home(event) {
    event.preventDefault();
    this.setState({choice: 0});
  }

  async diningHalls(event) {
    event.preventDefault();
    this.setState({choice: 1});
  }

  async restaurants(event) {
    event.preventDefault();
    this.setState({choice: 2});
  }

  render(){
    var content;
    if (this.state.choice === 0) {
      content =
        <div>
          <h2 class="BerkeleyEatinGood">Berkeley Eatin Good</h2>
          <p id = "chooseDescription">Choose one of the options below :)</p>
          <div className = "imageOptions">
            <div className ="CalDining-image">
              {/* <a href="CalDining.html"> */}
                <img border="0" alt="CalDining" src="food spread bowls.jpg" width="450" height="350" onClick={this.diningHalls}/>
              {/* </a> */}
              <h3 className = "imageLabel">CalDining</h3>
            </div>

            <div className ="AroundBerkeley-image">
              {/* <a href="AroundBerkeley.html"> */}
                <img border="0" alt="Around Berkeley" src="breakfast spread.jpg" width="450" height="350" onClick={this.restaurants}/>
              {/* </a> */}
              <h3 className = "imageLabel"> Around Berkeley</h3>
            </div>
          </div>
        </div> ;
    } else if (this.state.choice === 1) {
      content = <CalDining/>;
    } else if (this.state.choice === 2) {
      content = <AroundBerkeley/>;
    }
    return (
      <div>
        <div className="topnav">
          <li style={{float:'left'}} onClick={this.home}><a href="index.html">Home</a></li>
          <li style={{float:'left'}} onClick={this.diningHalls}><a href="CalDining.html">CalDining</a></li>
          <li style={{float:'left'}} onClick={this.restaurants}><a href="AroundBerkeley.html">Around Berkeley</a></li>
          <li style={{float:'right'}}><a href="#profile">Profile</a></li>
        </div>
        {content}
      </div>
    );  
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default ChoosePath;
