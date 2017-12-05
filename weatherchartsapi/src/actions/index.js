import axios from 'axios'

const API_KEY = 'ccf910e313050ca5c7c9a56f767ae5aa'
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city){
  const url = `${rootURL}&q=${city},us`
  const request = axios.get(url)


  return{
    type: FETCH_WEATHER,
    payload: request
  }
}
