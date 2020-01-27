import convert from 'convert-units'
import {
    CLOUD,
    CLOUDY,
    SUN ,
    RAIN,
    SNOW,
    WINDY
} from '../constants/weathers';

const getTemp = kelvin =>{
    return convert(kelvin).from('K').to('C').toFixed(2);
}
const transforWeather = weatherData => {
    const { humidity, temp} = weatherData.main;
    const { speed } = weatherData.wind;
    const weatherState = SUN;
    const temperature = getTemp(temp);
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }
    return data;
}

export default transforWeather;