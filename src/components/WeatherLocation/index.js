import React from 'react';
import Location from './Location';
import WeatherData from './../WeatherData';
import './style.css';
import {
    CLOUD,
    CLOUDY,
    SUN ,
    RAIN,
    SNOW,
    WINDY
} from './../../constants/weathers';
const data ={
    temperature:5,
    weatherState:SUN,
    humidity:10,
    wind:"20 m/s"
}
const data2 ={
    temperature:10,
    weatherState:WINDY,
    humidity:20,
    wind:"40 m/s"
}
class WeaterLocation extends React.Component{
    constructor(){
        super();
        this.state ={
            city : "Buenos Aires",
            data : data
        }
    }
    handleUpdateClick=()=>{
        console.log("actualizado");
        this.setState({
            city : "Mendoza",
            data : data2
        });
    }
    render(){
        const {city,data}=this.state;
        return(
            <div className='weatherLocationCont'>  
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>

            </div>
        );
    }
}
   
 


export default WeaterLocation;