import axios from 'axios'

export const FETCH_URL = 'FETCH_URL'
export const NEW_POST = 'NEW_POST'
export const FETCH_POST = 'FETCH_POST'
export const DELETE_POST = 'DELETE_POST'


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

export function newPost(formState, callBack){
  const api_url = `${ROOT_URL}?key=${API_KEY}`
  const request = axios.post(api_url,formState).then(() => callBack())

  return {
    type: NEW_POST,
    payload: request
  }
}

export function getPost(id){
  const api_url = `${ROOT_URL}/${id}?key=${API_KEY}`
  const request = axios.post(api_url)

  return {
    type: FETCH_POST,
    payload: request
  }
}


export function deletePost(id, callback){
  const api_url = `${ROOT_URL}/${id}?key=${API_KEY}`
  const request = axios.delete(api_url).then(callback())

  return {
    type: DELETE_POST,
    payload: id
  }

}
