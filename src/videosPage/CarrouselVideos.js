import React from 'react'

function CarrouselVideos({videoId,videoTitle,videoDescription}) {
  return (
    <div className='video-page-container'>

          <div className='video-page-video'>
              <iframe
              className='iframe'
              src={`https://www.youtube.com/embed/${videoId}`}
              title={videoTitle}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></iframe>
              <a href='https://www.youtube.com/@Reeyogar' target='_blank'><button>Veja mais Videos como esse</button></a>
              
          </div>
          <div className='video-page-info'>
              <h1>{videoTitle}</h1>
              <p>{videoDescription}</p>
          </div>
    </div>
  )
}

export default CarrouselVideos