import React, {Component} from 'react';
export default class DayOfTheForecastList extends Component{
    render(){
        return(
            <div>
            <div className="weather-list--info">
                    <div className="date">
                          {this.props.date}
                          <img src={`https://openweathermap.org/img/w/${this.props.icon}.png`} alt="Погода"/>
                    </div>
                    <div className="charaсters">
                        <p>{this.props.temp}C°,Ясно</p>
                        <p>Ветер: {this.props.speed} м/c</p>
                        <p>Давление: {this.props.pressure} гПа</p>
                    </div>
            </div>
            <hr />
          </div>
        );
    }
}
