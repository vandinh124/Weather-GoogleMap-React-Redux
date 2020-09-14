import axios from 'axios';

const API_KEY = 'f022b5919be8b000c63567cefd089c44';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    // console.log('Request:', request)

    return {
        type: FETCH_WEATHER, 
        payload: request
    }
}