import React, { useEffect } from 'react';


export default function InfoDisp (props) {   
    
    

        return(
            <div id='WeatherByDay'>
                <a href="/home">Home</a>
                <h1>{props.day}</h1> <br />
                <span>Feels Like: {(((props.days.list[props.day].main.feels_like- 273) * (9/5)) + 32).toFixed()}</span> <br/>
                
                <div id='dayInfo'>
                <ul>
                    <li>High: {(((props.days.list[props.day].main.temp_max- 273) * (9/5)) + 32).toFixed()}</li>
                    <li>Low: {(((props.days.list[props.day].main.temp_min- 273) * (9/5)) + 32).toFixed()}</li>
                    <li>Humidity: {props.days.list[props.day].main.humidity}%</li>
                    <li>Wind Speed: {props.days.list[props.day].wind.speed} mph</li>
                    <li>Sunrise: {props.days.city.sunrise}</li>
                    <li>Sunset: {props.days.city.sunset}</li>

                </ul>
                </div>
            </div>
        )
        }