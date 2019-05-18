import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";
import './App.css';

const API_KEY = "9419b5545a8f91522e97ff51dab74bfa";



class App extends React.Component {

  gettingWeather = async () => {
    const api_url = await
    fetch(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Info/>
      </div>
    );
  }
}

export default App;
