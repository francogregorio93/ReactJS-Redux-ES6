import React from 'react';
import transformWeather from './../../services/transforWeather';
import Location from './Location';
import WeatherData from './../WeatherData';
import CircularProgress from '@material-ui/core/CircularProgress';

import './style.css';
import {api_weather} from './../../constants/api_url';


class WeaterLocation extends React.Component{
    constructor(){
        super();
        this.state ={
            city : "Buenos Aires",
            data : null
        }
    }
    componentDidMount() {
        this.handleUpdateClick();
    }
    
    handleUpdateClick=()=>{
        console.log("actualizado");
        fetch(api_weather).then( resolve =>{
            console.log(resolve);
           
            return resolve.json();
        }).then(data =>{
            const newWeather = transformWeather(data);
            debugger;
            this.setState({
                data:newWeather,
            })
            console.log(data);
        });
    }



    render(){
        const {city,data}=this.state;
        return(
            <div className='weatherLocationCont'>  
            <Location city={city}></Location>
           {data ? 
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress /> } 
            {/* <button onClick={this.handleUpdateClick}>Actualizar</button> */}

            </div>
        );
    }
}
   
 


export default WeaterLocation;