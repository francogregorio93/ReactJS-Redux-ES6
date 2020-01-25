import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
const icons ={
    sunny:"day-sunny",
    fog:"day-fog"
}
const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
if(icon)
    return <WeatherIcons name={icon} size="2x"/>
else
    return <WeatherIcons name={"day-sunny"} size="2x"/>
}
const WeatherTemperature=({temperature,weatherState})=> (
<div>
    {
    getWeatherIcon(weatherState)
    }
    <span>{`${temperature} C`}</span>
    </div>
)
WeatherTemperature.propTypes={
    temperature:PropTypes.number,
    weaterState:PropTypes.string
}
export default WeatherTemperature;