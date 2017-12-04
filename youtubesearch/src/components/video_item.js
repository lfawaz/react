import React from 'react'
import '../style/video_item.css'


const VideoItem = ({video, selectVideo}) => {

  return(
    <div className="content-div" onClick={e => selectVideo(video)}>
    <div className="Image-div">
      <img src={video.thumbnails.default.url} alt="Here!" />
    </div>
    <div className="title-desc-div">
    <div className="title-div">
    {video.title}
    </div>

    </div>

    </div>
  )
}

export default VideoItem
