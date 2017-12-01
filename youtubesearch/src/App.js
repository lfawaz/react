import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-search'


const params = {
  maxResults: 5,
  key: 'AIzaSyAIt2KCil9ciKSKVHFYdEahHJ7mgOgYZmM'
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = { term : 'test' }
    this.videoSearch = this.videoSearch.bind(this)

  }

  videoSearch(term){
      YTSearch(term, params, function(error, videos){
        this.setState({ videos })
      })


  }

  render() {
    return (
      <div className="App">
      <SearchBar videoSearch={this.videoSearch}/>
      </div>
    );
  }
}

export default App;
