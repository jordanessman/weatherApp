import React, {useState} from 'react';
import sun from "../assets/sun.png"
import cloud from "../assets/cloud.png"
import rain from "../assets/rain.png"

export default function  WeatherDisp (props) {

    let temp;
    let current;
    let imgKey ;
    let high;
    let low;
    const today = new Date();
    const date = `${today.getMonth() +1}/${today.getDate()}`;
    const time = `${today.getHours()}:${today.getMinutes()}`;
    const handleChange = (props) => {
        try { 
            current = props.weather.weather[0].description.toUpperCase();
            console.log(props.weather.main.temp_max)
            high = (((props.weather.main.temp_max - 273) * (9/5)) + 32).toFixed();
            low = (((props.weather.main.temp_min - 273) * (9/5)) + 32).toFixed();
           let weathLogo = document.getElementById('weatherLogo');
            if(current === "FEW CLOUDS" || current === "SCATTERED CLOUDS" || current === "CLOUDS" || current === "OVERCAST CLOUDS") {
                weathLogo.src = cloud
            }
            else if (current === 'CLEAR SKY') {
                weathLogo.src = sun;
            }
            else if(current === 'RAIN' || current === 'MIST'){
                weathLogo.src = rain;
            }
            else {
                weathLogo.src = sun;
            }
            return (
            (((props.weather.main.temp - 273) * (9/5)) + 32).toFixed() + ' F'
        )
        }
        catch (error) {
            return "select city..."
        }
    
    }
    return(
        <div className='WeatherDisp'>
            <div id = 'logoBox'><img src='' id='weatherLogo'></img></div>
            <h2 >{handleChange(props)}</h2>
            <span id="wdsm1"><b>H:</b> {high}</span><h4 id='current'>{current}</h4><span id="wdsm2"><b>L:</b> {low}</span>
            

        </div>
    );
}

