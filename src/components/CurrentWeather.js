import React, {Component} from 'react';
export default class CurrentWeather extends Component{

    render(){
        return(
            <div className = "InfoWeather">
            <h1>Погода и прогноз</h1>
            <div className = "weather--city">
                <h2>Погода в г.{this.props.currentCity}</h2>
                <img src={`https://openweathermap.org/img/w/${this.props.weather.icon}.png`} alt="Погода"/>
            </div>
            <div className="degrees">
                <h2>{this.props.weather.temp}C°</h2>
                <p>{this.props.weather.date}</p>
            </div>
            <ul className="main-character">
                <hr/>
                <li className="character-list">
                    <p className="name">Ветер</p>
                    <ul className="character">
                        <li>Скорость - {this.props.weather.speed}м/с</li>
                        <li>Порыв - {this.props.weather.gust}м/с</li>
                        <li>Напрвление - {this.props.weather.deg}</li>
                    </ul>
                </li>
                <hr/>
                <li className="character-list">
                     <p className="name">Облачность</p>
                     <p className="character">{this.props.weather.description}</p>
                </li>
                <hr/>
                <li className="character-list">
                     <p className="name">Давление</p>
                     <p className="character">{this.props.weather.pressure} гПА</p>
                </li>
                <hr/>
                <li className="character-list">
                     <p className="name">Влажность</p>
                     <p className="character">{this.props.weather.humidity}%</p>
                </li>
                <hr/>
                <li className="character-list">
                     <p className="name">Восход Солнца</p>
                     <p className="character">{this.props.weather.sunrise}</p>
                </li>
                <hr/>
                <li className="character-list">
                     <p className="name">Закат Солнца</p>
                     <p className="character">{this.props.weather.sunset}</p>
                </li>
                <hr/>
            </ul>
            <h2>4 дня назад на сегодня обещали: Еще нет в истории погоды С</h2>
            <p>Ветер: Еще нет в истории погоды</p>
            <p>Давление: Еще нет в истории погоды</p>
            <p>Облачность/осадки: Еще нет в истории погоды</p>
            <hr/>
        </div>
        );
    }  
}