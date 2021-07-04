import React, {useState}  from "react";
import WeatherDisp from "./components/WeatherDisp"
import InfoDisp from "./components/InfoDisp"
import WeatherSearch from "./components/WeatherSearch"
import Week from "./components/Week"
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WeatherByDay from "./components/WeatherByDay"
import { Link } from 'react-router';

const apiKey = {
 key: "852acf544592281a5dacf40786891f24",
 url: "http://api.openweathermap.org/data/2.5/"
}

let city;
const weatherF = async (city) =>{ 
   let qString = `weather?q=${city}&appid=${apiKey.key}`; 
   const weatherPull = axios.get(`${apiKey.url}${qString}`);
  const response = await weatherPull;
   return response.data;
}

const weatherForecast = async (city) =>{ 
  let qString = `forecast?q=${city}&appid=${apiKey.key}`; 
  const weatherPull = axios.get(`${apiKey.url}${qString}`);
 const response = await weatherPull;
  return response.data;
}

function App() {

  const [city, setCity] = useState('Select City...');
  const [weather, setWeather] = useState({});
  const [weatherWeek, setWeatherWeek] = useState({});
  const [day, setDay] = useState(0);
   
  
  const changeCity = async (newName) => {
    setCity(newName);
    let n = await weatherF(newName);
    let f = await weatherForecast(newName)
    await setWeather(n);
    await setWeatherWeek(f);
  }

  const setDayPass = (index) => {setDay(index)};
  
  
  return (
    <Router>
      <div className="app">
          <main>
          <InfoDisp name={city} />
            <Switch>
            <Route path="/days" >
                <WeatherByDay days={weatherWeek} city={city} day={day} days={weatherWeek}/>
            </Route>

              <Route path = "/home">
                
                <WeatherDisp weather={weather}/>
                <WeatherSearch onSubmit={changeCity}/>
                <Week days={weatherWeek} setDayPass={setDayPass}/>
            </Route>

            <Route path='/'>
                <WeatherDisp weather={weather}/>
                <WeatherSearch onSubmit={changeCity}/>
                <Week days={weatherWeek} setDayPass={setDayPass}/>
            </Route>
            
            </Switch>
          </main>
      </div>
    </Router>
  );
}

export default App;
