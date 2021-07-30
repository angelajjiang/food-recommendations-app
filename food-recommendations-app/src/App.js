import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ChoosePath from './ChoosePath';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      start: true
    };
    this.getStarted = this.getStarted.bind(this);
  }
  
  async getStarted(event) {
    this.setState({start: false});
    event.preventDefault();
  }

  render() {
    return (
      <div> {this.state.start ?
        <div className="front-background-image">
          <div className="font-page-text">
            <h1 id = "Title"> Bears Eatin Good</h1>
            <div className ="frontPageDescription">
              <p>Where to eat and what to eat!</p>
              <p>Codeology Fall 2021 Project</p>
              <p>Sort and shift through CalDining options and the endless restaurants around campus</p>
            </div>
            <button type = "button" id = "frontGoButton" onClick={this.getStarted}>
              Lets Eat!
            </button>
          </div>
        </div>
      : <ChoosePath/>
    } </div>
  );}
}

export default App;
