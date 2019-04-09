import React, { Component } from 'react';
import './App.css';
import AddCity from './components/AddCity';
import CurrentWeather from './components/CurrentWeather';
import FiveDaysForecast from './components/FiveDaysForecast';
import AddCityModel from './components/AddCityModel';
import DayOfTheForecastList from './components/DayOfTheForecastList'
const API_KEY = "b6907d289e10d714a6e88b30761fae22";

class App extends React.Component {
  constructor() {
    super();
    if(!localStorage.getItem('cities')) {
       localStorage.setItem('cities', JSON.stringify([{
         name: 'Брест',
         codeCountry: 'by'
       }]));
     }
     if(!localStorage.getItem('currentCity')) {
      localStorage.setItem('currentCity', 'Брест');
    }
    var cities = JSON.parse(localStorage.getItem('cities'));
    this.state = {
      isOpen: false,
      citiesList: cities,
      currentCity: localStorage.getItem('currentCity'),
      currentWeather: {
        date: null,
        icon: null,
        temp: null,
        gust: null,
        speed: null,
        deg: null,
        description: null,
        pressure: null,
        humidity: null,
        sunrise: null,
        sunset: null},
        daysList: []
    }
  }
  
  getFiveDaysWeather = () => {
    console.log(this.state.currentCity);
      fetch(`https://openweathermap.org/data/2.5/forecast?q=${this.state.currentCity},by&appid=${API_KEY}`)
      .then(data => data.json())
      .then(data => {
      const res = data.list.filter(el=>(new Date(el.dt_txt).getHours())===15);
  
      const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'short',
          timezone: 'UTC',
          hour: 'numeric',
          minute: 'numeric',
      };
      const gettingData = res.map((el,i)=>
          <DayOfTheForecastList
              key={i}
              date = {(new Date(el.dt_txt)).toLocaleString('ru', options)}
              icon = {el.weather[0].icon}
              temp = {el.main.temp}
              speed = {el.wind.speed}
              pressure = {el.main.pressure}
          />
      )
      this.setState({
          daysList: gettingData
      })

    })
  }

  getCurrentWeather=()=>{
    //const city = localStorage.getItem('currentCity')
  
    fetch(`https://openweathermap.org/data/2.5/weather?q=${this.state.currentCity},by&appid=${API_KEY}`)
    .then(data=>data.json())
    .then(data=>{
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'short',
            timezone: 'UTC',
        };
        const time ={
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }
        this.setState( {
          currentWeather:{
            date: (new Date(data.dt).toLocaleString('ru', options)),
            city: this.props.currentCity,
            icon: data.weather[0].icon,
            temp: data.main.temp,
            gust: data.wind.gust,
            speed: data.wind.speed,
            deg: data.wind.deg,
            description: data.weather[0].description,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            sunrise: (new Date(data.sys.sunrise).toLocaleString('ru',time)),
            sunset: (new Date(data.sys.sunset).toLocaleString('ru', time)),
            error: ""
        }
      })
    })
}

  ExpansionListCities=(obj)=>{
    var arr = this.state.citiesList;
    arr.push(obj);
    localStorage.setItem('cities', JSON.stringify(arr));
    this.setState({
      citiesList: arr
    });
    console.log(arr);
    this.showModel();
  }
  renderCityModule = () => {
  if(this.state.isOpen){
     return <AddCityModel expansionListCities={this.ExpansionListCities} showModel = {this.showModel}/>
   };
}

  showModel=()=>{
   this.setState({
     isOpen: !this.state.isOpen
   })
 };
 choosingCity=(event)=>{
  var city = event.currentTarget.textContent;
  localStorage.setItem('currentCity', city);

  this.setState({
      currentCity: city
  },
  () => {
      this.getCurrentWeather();
      this.getFiveDaysWeather();
    }
  );
}

componentDidMount () {
  this.getCurrentWeather();
  this.getFiveDaysWeather();
}

  render(){
    console.log(this.state.daysList);
    return(
      <div className="app">
          <CurrentWeather
            cityCheng ={this.choosingCity}
            currentCity = {this.state.currentCity}
            weather = {this.state.currentWeather}
          />
          <div className="SheduleForecast">
          <FiveDaysForecast
            weatherFive = {this.gettingWeatherFiveDays}
            cityCheng ={this.choosingCity}
            currentCity = {this.state.currentCity}
            daysList = {this.state.daysList}
          />
          </div>
          <AddCity cityCheng ={this.choosingCity} citiesList = {this.state.citiesList} showModel = {this.showModel}/>
          {this.renderCityModule()}
      </div>
    );
  }
}

export default App;
