import React, {useState} from 'react';
import sun from "../assets/sun.png"
import cloud from "../assets/cloud.png"

export default function  Week (props) {

    console.log(props)
    let daysMax = [];
    let daysMin = [];
    let daysMain = [];
    const today = new Date();
    const date = today.getDate();
    console.log(date);
try{
    for (let i=1; i<7; i++) {
        daysMax[i] = (((props.days.list[i].main.temp_max - 273) * (9/5)) + 32).toFixed()
        daysMin[i] = (((props.days.list[i].main.temp_min - 273) * (9/5)) + 32).toFixed()
        daysMain[i] = props.days.list[i].weather[0].main
    }
}
catch {
    for (let i=1; i<7; i++) {
        daysMax[i] = [' '];
        daysMin[i] = [' '];
    }
}

    const handleChange = (props) => {
        try { 

        }
        catch (error) {
            return "select city..."
        }
    
    }
    return(
        <div className='Week'>
            <ul>
                
                <div id='day'><li> <div id='dayCal'><h3>{date+1}</h3></div>Weather: {daysMain[1]} <br /> High: {daysMax[1]} Low {daysMin[1]}</li></div>
                <div id='day'><li><div id='dayCal'><h3>{date+2}</h3></div>Weather: {daysMain[2]}  <br /> High: {daysMax[2]} Low {daysMin[2]}</li></div>
                <div id='day'> <li><div id='dayCal'><h3>{date+3}</h3></div>Weather: {daysMain[3]} <br />  High: {daysMax[3]} Low {daysMin[3]}</li></div>
                <div id='day'> <li><div id='dayCal'><h3>{date+4}</h3></div>Weather: {daysMain[4]} <br />  High: {daysMax[4]} Low {daysMin[4]}</li></div>
                <div id='day'><li><div id='dayCal'><h3>{date+5}</h3></div>Weather: {daysMain[5]} <br />  High: {daysMax[5]} Low {daysMin[5]}</li></div>
            </ul>

        </div>
    );
}