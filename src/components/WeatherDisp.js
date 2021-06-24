import React from 'react';
import CurrentTemp from './CurrentTemp';
import CurrentWeather from './CurrentWeather'

class WeatherDisp extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
    return(
        <div className='WeatherDisp'>
            <h4>Current Temperature : 65 F</h4>
            <h4>Sunny</h4>

        </div>
    );
}}

export default WeatherDisp;