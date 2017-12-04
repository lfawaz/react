import React from 'react'
import VideoItem from './video_item'
import '../style/video_list.css'

const VideoList = ({videos, selectVideo}) => {


  const videoList = videos.map(video => (
    <VideoItem key={video.id} video={video} selectVideo={selectVideo}/>
  ))
  return(
    <div className='video-list'>
    {videoList}
    </div>
  )
}

export default VideoList
