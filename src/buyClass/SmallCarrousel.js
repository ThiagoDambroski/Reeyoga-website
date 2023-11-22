import React, { useState } from 'react'
import leftArrow from '../assets/BuyClass/compact-left-arrow.png'
import rightArrow from '../assets/BuyClass/compact-right-arrow.png'

function SmallCarrousel({index,lenght,setIndex,image,setLightBoxOpen,setUserClicked}) {
    
    

    const openLightBox = (image) => {
        setUserClicked(true)
        setLightBoxOpen({open:true,photo:image})
        document.body.classList.add('no-scroll');
    }

 

    const nextImage = () => {
        setUserClicked(true)
        if(index + 1 > lenght - 1 ){
            setIndex(0)
        }else{
            setIndex(index + 1)
        }
    }

    const previousImage = () => {
        setUserClicked(true)
        if(index - 1 < 0){
            setIndex(lenght - 1)
        }else{
            setIndex(index - 1)
        }
    }

  return (
    <>
     <div className='small-carrousel-container'>
        <img src={leftArrow} className='arrow' onClick={() => previousImage()}/>
        <img src={image} className='small-carrousel-image' onClick={() => openLightBox(image)}/>
        <img src={rightArrow} className='arrow' style={{right:'0px'}} onClick={() => nextImage()}/>
     </div>
    
     
    </>
    
    
   

  )
}

export default SmallCarrousel 