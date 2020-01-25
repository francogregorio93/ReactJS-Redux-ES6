import React from 'react';
import Location from './Location';
import WeatherData from './../WeatherData';
import './style.css';
const WeaterLocation = ()=>(
    <div className='weatherLocationCont'>  
    <Location city={"Mendoza"}></Location>
    <WeatherData></WeatherData>
    </div>
 
);

export default WeaterLocation;