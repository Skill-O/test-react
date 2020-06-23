import Api from '../api/api';

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SHOW_WEATHER = 'SHOW_WEATHER';
const CHANGE_ID = 'CHANGE_ID';

let defaultState = {
    cityID: null,
    isFetching: false,
    forecast: {
        //coords
        temp: 0,
        coord: {
            lon: 0,
            lat: 0
        },
        //wind
        wind: {
            speed: 0, // 0 m/s
            deg: 0 // wind direction degrees 
        },
        clouds: 0, // Cloudiness %
        name: '', //city
        id: 0 //city id
    }
}

let weatherReducer = (state = defaultState, action) => {
    switch(action.type){
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case SHOW_WEATHER:
            return{
                ...state,
                forecast: {
                    ...state.forecast,
                    coord: {
                        lon: action.forecast.coord.lon+' долготы',
                        lat: action.forecast.coord.lat+' широты',
                    },
                    wind: {
                        speed: action.forecast.wind.speed+' м/с',
                        deg: action.forecast.wind.deg+'º'
                    },
                    temp: (action.forecast.main.temp-273.15).toFixed(1)+'º',
                    clouds: action.forecast.clouds.all+'%',
                    name: action.forecast.name,
                    id: action.forecast.id
                }
            }
        case CHANGE_ID:
            return{
                ...state,
                cityID: action.cityID
            }
        default: return state;
    }
}

export let changeID = (cityID) => {
    return{
        type: CHANGE_ID,
        cityID
    }
}

export let getWeather = (id = '2172797') => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));

        Api.getWeatherByCityId(id).then(response => {
            dispatch(showWeather(response));
            dispatch(toggleIsFetching(false));
        });
    }
}

export let showWeather = (forecast) => {
    return{
        type: SHOW_WEATHER,
        forecast
    }
}

export let toggleIsFetching = (isFetching) => {
    return{
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

export default weatherReducer;