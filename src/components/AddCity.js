import React, { Component } from 'react';
import CurrentWeather from './CurrentWeather';
export default class AddCity extends Component{

  constructor() {
    super();
    this.citiesList = [];
  }

  state={
    isOpen: true
  }

  getCity=()=>{
    this.citiesList = this.props.citiesList.map((el,i)=>
    <li onClick={this.props.cityCheng} className="city-list" key={i}>
      {el.name}
    </li>);
  }
  render(){
    this.getCity();
    return(
        <div className="addsity-form">
          <h3>Города для просмотра</h3>
          <hr/>
          <ul>{this.citiesList}</ul>
          <hr/>
          <button onClick={this.props.showModel} className="btn button-open">
            <div className="cross"></div>
          </button>
        </div>
    );
  }

}
