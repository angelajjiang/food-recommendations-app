import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

class AroundBerkeley extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      yelpData: null,
      type: null,
      method: null,
      price: null,
      rating: null,
      distance: null
    };
    this.setType = this.setType.bind(this);
    this.setMethod = this.setMethod.bind(this);
    this.setPrice = this.setPrice.bind(this);
    this.setRating = this.setRating.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  setType(event) {
    event.preventDefault();
    this.setState({type: event.target.value});
  }
  setMethod(event) {
    event.preventDefault();
    this.setState({method: event.target.value});
  }
  setPrice(event) {
    event.preventDefault();
    this.setState({price: event.target.value});
  }
  setRating(event) {
    event.preventDefault();
    this.setState({rating: event.target.value});
  }
  setDistance(event) {
    event.preventDefault();
    this.setState({distance: event.target.value});
  }

  async getRestaurant(event) {
    event.preventDefault();
    let response = await fetch("http://localhost:5000/restaurants", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    });
    let data = await response.json();
    data = JSON.stringify(data);
    data = JSON.parse(data);
    this.setState({yelpData: data});
  }

  render() {
    return (
      <div>
        <form>
          <textarea value={this.state.type} onChange={this.state.setType}>What kind of food?</textarea>
          <select value={this.state.method} onChange={this.state.setMethod}>
            <option value="dine-in">Dine-in</option>
            <option value="takeout">Takeout</option>
            <option value="delivery">Delivery</option>
          </select>
          <select value={this.state.price} onChange={this.state.setPrice}>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            <option value="$$$$">$$$$</option>
          </select>
          <select value={this.state.rating} onChange={this.state.setRating}>
            <option value="1">1 star</option>
            <option value="2">2 star</option>
            <option value="3">3 star</option>
            <option value="4">4 star</option>
            <option value="5">5 star</option>
          </select>
          <textarea value={this.state.distance} onChange={this.state.setDistance}>Distance</textarea>
        </form>
        <button type = "button" id = "frontGoButton" onClick={this.getRestaurant}>
          Get suggestion
        </button>
        <p id="suggestion">{this.state.yelpData}</p>
      </div>
    );
  }
} 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default AroundBerkeley;
