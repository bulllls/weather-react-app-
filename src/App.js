import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import './App.css';

const API_KEY = "9419b5545a8f91522e97ff51dab74bfa";



class App extends React.Component {

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info/>
        <Form weatherMethod={this.gettingWeather} />
      </div>
    );
  }
}

export default App;
