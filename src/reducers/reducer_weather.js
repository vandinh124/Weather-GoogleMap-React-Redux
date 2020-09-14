import { fetchWeather, FETCH_WEATHER } from '../actions/index';

export  const reducerWeather = (state= [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return [...state, action.payload.data]
        default: 
            return state;
    }
}