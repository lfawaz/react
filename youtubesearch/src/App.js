import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const params = {
  maxResults: 5,
  key: 'AIzaSyAIt2KCil9ciKSKVHFYdEahHJ7mgOgYZmM'
}

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
        videos : [],
        selectedVideo: ''
      }
    this.videoSearch = this.videoSearch.bind(this)
    this.selectVideo = this.selectVideo.bind(this)

  }

  videoSearch(term){

     YTSearch(term, params, function(error, videos){
        this.setState({
            videos: videos,
            selectedVideo: videos[0]

          })

        //console.log(this.state.videos, this.state.selectedVideo)
     }.bind(this))
  }

  selectVideo(selectedVideo){
    this.setState({selectedVideo})
  }

componentWillMount(){
  this.videoSearch("")
}

  render() {
    return (
      <div className="App">
      <p>Search YouTube</p>
      <SearchBar videoSearch={this.videoSearch}/>
      <div className="content-div">
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList videos={this.state.videos} selectVideo={this.selectVideo}/>
      </div>
      </div>

    );
  }
}

export default App;
