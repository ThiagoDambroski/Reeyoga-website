import React, { useState } from 'react'

import rightArrow from '../assets/VideoPage/compact-right-arrow.png'
import leftArrow from '../assets/VideoPage/compact-left-arrow.png'

import './videoPage.css'
import CarrouselVideos from './CarrouselVideos'

                                                                                                                                                                 
function VideoPage() {

  const [videoIndex,setVideoIndex] = useState(0)
 /* #b7e2bd
    #f0e9da
 */

 /*
#280659
#341671
#c0b3cb
#660f56
#ae2d68
*/
  const videosArray = [
    {
      backgroundColor: 'rgba(167, 43, 144, 0.363)',
      videoId: 'Ptavpleb47o',
      videoTitle: 'Yoga no alto da sé',
      videoDescrption: "Com uma vista majestosa da cidade estendendo-se ao fundo, este vídeo oferece uma experiência única que combina posturas desafiadoras com profunda serenidade, criando um ambiente propício para o equilíbrio e bem-estar."+
      "\n\nCada movimento é cuidadosamente orientado para ajudá-lo a se conectar com o momento presente, permitindo-lhe respirar profundamente e liberar as tensões acumuladas. Mais do que uma simples prática física, este é um convite para uma jornada de autodescoberta que eleva não apenas o seu corpo, mas também a sua alma." +
      "\n\nEste vídeo se desenrola em um local verdadeiramente mágico, onde o yoga se encontra com o céu, proporcionando uma sensação de paz e harmonia que transcende o comum. Prepare-se para uma experiência transcendental que nutre não apenas o seu corpo, mas também a sua mente e espírito, enquanto você se entrega a esta prática única."

    },
    {
      backgroundColor: '#c0b3cb',
      videoId: 'tKu02R_dJlo',
      videoTitle: 'Yoga no alto da sé 2',
      videoDescrption: "Situado no ponto mais alto da cidade, no Alto da Sé, onde a serenidade se encontra com uma vista deslumbrante da paisagem urbana, este envolvente vídeo apresenta uma prática de yoga que harmoniza posturas desafiadoras com uma profunda sensação de paz, promovendo equilíbrio e bem-estar." +
      "\n\nCada movimento é cuidadosamente guiado para ajudá-lo a se conectar com o momento presente, permitindo uma respiração profunda e o alívio das tensões acumuladas. Esta experiência é projetada para elevar não apenas o seu corpo, mas também a sua alma, proporcionando um convite para se reconectar consigo mesmo e com a beleza que o rodeia." +
      "\n\nNeste local verdadeiramente mágico, onde o yoga se encontra com o céu, você será levado a uma jornada única que o incentiva a apreciar a harmonia entre corpo e mente, enquanto desfruta de uma visão espetacular da cidade. Este vídeo é uma oportunidade para mergulhar em uma prática que nutre sua essência e permite uma conexão mais profunda com o mundo ao seu redor."

    }
  ]


  const nextCarrousel = () => {
    if(videoIndex + 1 > videosArray.length - 1){
      setVideoIndex(0)
    }else{
      setVideoIndex(videoIndex + 1)
    }
  }

  const previousCarrousel = () => {
    if(videoIndex - 1 < 0){
      setVideoIndex(videosArray.length - 1)
    }else{
      setVideoIndex(videoIndex - 1)
    }
  }

  return (
    <div className='video-page' style={{backgroundColor: videosArray[videoIndex].backgroundColor}}>   
        
        <div className='video-carousel-container' style={{ transform: `translateX(-${videoIndex * 100}%)` }}>
            {videosArray.map((video,index) => (
              <div key={index} className='video-carousel-item'>
                <img src={leftArrow} className='video-page-arrow' onClick={() => previousCarrousel()} alt='left-arrow'/>
                <CarrouselVideos 
                  videoId={video.videoId}
                  videoTitle={video.videoTitle}
                  videoDescription={video.videoDescrption}
                  videoIndex = {videoIndex}
                  setVideoIndex = {setVideoIndex}
                />
                <img src={rightArrow} className='video-page-arrow' onClick={() => nextCarrousel()} alt='right-arrow'/>
              </div>
            ))}
        </div>
        
       
        
    </div>
  )
}

export default VideoPage