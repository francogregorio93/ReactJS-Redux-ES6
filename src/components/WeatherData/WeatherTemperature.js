import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
const icons ={
    sunny:"day-sunny",
    fog:"day-fog"
}
const sizeIcon = '4x';
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
if(icon)
    return <WeatherIcons className="wicon" name={icon} size={sizeIcon}/>
else
    return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon}/>
}


const WeatherTemperature=({temperature,weatherState})=> (
<div className='weatherTemperature'>
    {
    getWeatherIcon(weatherState)
    }
    <span className="temperature">{temperature}</span> 
    <span className="temperatureType">C</span>
    </div>
)
WeatherTemperature.propTypes={
    temperature:PropTypes.number,
    weaterState:PropTypes.string
}
export default WeatherTemperature;