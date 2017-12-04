import React from 'react'
import '../style/video_detail.css'


const VideoDetail = ({video}) => {
  const videoUrl = `https://www.youtube.com/embed/${video.id}`

  return(

      <div className="video-detail">
      <iframe height="200" width="400" title={video.title} src={videoUrl}></iframe>
        {video.description}
      </div>
  )
}

export default VideoDetail
