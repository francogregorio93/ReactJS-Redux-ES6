
const location='Buenos Aires';
const api_key='6a8a2980d00f8d59fcbcdce1093f5532';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/weather'

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`
