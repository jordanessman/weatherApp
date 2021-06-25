import React, {useState}  from "react";
import WeatherDisp from "./components/WeatherDisp"
import InfoDisp from "./components/InfoDisp"
import WeatherSearch from "./components/WeatherSearch"
import Week from "./components/Week"
import axios from "axios";


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
   
  
  const changeCity = async (newName) => {
    setCity(newName);
    let n = await weatherF(newName);
    let f = await weatherForecast(newName)
    await setWeather(n);
    await setWeatherWeek(f);
  }
  
  
  return (
    <div className="app">
      
        <main>
          <InfoDisp name={city} />
          <WeatherDisp weather={weather}/>
          <WeatherSearch onSubmit={changeCity}/>
          <Week days={weatherWeek}/>
        </main>
    </div>
  );
}

export default App;
