import React from 'react'
import '../style/search_bar.css'


const SearchBar = ({ videoSearch }) => {

    return(
      <div>
      <input onChange={e => videoSearch(e.target.value)}/>
      </div>
    )
  }


export default SearchBar
