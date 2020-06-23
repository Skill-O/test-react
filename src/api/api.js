import * as axios from 'axios';

const params = {
    base_url: 'http://api.openweathermap.org/data/2.5/weather?',
    api_key: 'a7af7a5214d5e2629972a856e410a279',
}

const Api = {
    getWeatherByCityId(cityID){
        return axios
        .get(`${params.base_url}id=${cityID}&appid=${params.api_key}`)
        .then(response => {
            return response.data;
        });
    }
}

export default Api;