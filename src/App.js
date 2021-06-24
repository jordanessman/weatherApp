import React, {useState}  from "react";
import WeatherDisp from "./components/WeatherDisp"
import InfoDisp from "./components/InfoDisp"
import WeatherSearch from "./components/WeatherSearch"
import axios from "axios";

const apiKey = {
 key: "852acf544592281a5dacf40786891f24",
 url: "http://api.openweathermap.org/data/2.5/"
}

let city;
const weather = async (city) =>{ 
   let qString = `weather?q=${city}&appid=${apiKey.key}`; 
   const weatherPull = axios.get(`${apiKey.url}${qString}`);
  const response = await weatherPull;
  // console.log(response);
}
weather("houston");



function App() {

  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('Select City...');

 
  
  const changeCity = (newName) => {
    setCity(newName);
  }
  

  return (
    <div className="app">
      
        <main>
          <InfoDisp name={city} />
          <WeatherDisp />
         
          <WeatherSearch onSubmit={changeCity}/>
        </main>
    </div>
  );
}

export default App;
