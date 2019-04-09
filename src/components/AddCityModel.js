import React, { Component } from 'react';

export default class AddCityModel extends Component{
state={
  name: '',
  codeCountry: ''
}
saveNewCity=()=>{
  var obj = {
    name: this.state.name,
    codeCountry: this.state.codeCountry
  }
  if(obj.name !== '' && obj.nameLn !== '' && obj.codeCountry !==''){
    console.log(obj);
    this.props.expansionListCities(obj);
  }else{
   if(obj.name === ''){
      this.setState({
      name: 'поле не заполнено'
  })
}  if(obj.codeCountry === ''){
      this.setState({
      codeCountry: 'поле не заполнено'
    })
    }
  }
}
handleInputChange=(event)=>{
  this.setState({
    [event.currentTarget.name]: event.currentTarget.value
  })
}

  render(){
    const {name,  codeCountry} = this.state;
    return(
      <div className="container">
      <div className= "popupForm">
      <h1>Расширение списка городов</h1>
        <ul className="addSity-info">
          <li><p className="name-city">Введите название города, который хотите добавить:</p>
          <input name="name" className="enter-sity" value ={name} onChange ={this.handleInputChange} type="text"/></li>
          <li><p className="name-city">Введите код страны в котором он находится:</p>
          <input name="codeCountry" className="enter-sity" value ={codeCountry} onChange={this.handleInputChange} type="text"/></li>
        </ul>
        <button className="btn-add submit" onClick = {this.saveNewCity}>Добавить</button>
      <button onClick = {this.props.showModel} className="button-close" type="button">Закрыть</button>
      </div>
      </div>
);
  }

  }
