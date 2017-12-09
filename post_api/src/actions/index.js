import axios from 'axios'

export const FETCH_URL = 'FETCH_URL'
const API_KEY = 'lfawazapikey'
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts'

export function getPosts(){
  const api_url = `${ROOT_URL}?key=${API_KEY}`
  const request = axios.get(api_url)
  console.log('action!')
  return {
    type: FETCH_URL,
    payload: request
  }
}
