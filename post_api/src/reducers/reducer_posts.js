import { FETCH_URL } from '../actions/index.js'

export default function(state =[], action){
  switch(action.type){
    case FETCH_URL:
      return convertToObject(action.payload.data)
  }
  return state
}


function convertToObject(data){

  const posts = data.reduce((accu, post) => {
	accu[post.id] = post
	return accu
},{})
 return posts
}
