import React, { useDebugValue, useEffect, useState } from 'react'
import './BuyClass.css'

import placeHolder from '../assets/BuyClass/Yoga-for-Thyroid-1.jpg'
import placeHolder2 from '../assets/BuyClass/pexels-photo-3822906.jpeg'
import placeHolder3 from '../assets/BuyClass/pexels-photo-4056535.jpeg'
import placeHolder4 from '../assets/BuyClass/pexels-photo-3094230.jpeg'
import placeHolder5 from '../assets/BuyClass/pexels-photo-8613312.jpeg'
import placeHolder6 from '../assets/BuyClass/shutterstock_324427688-1.jpg'


import SmallCarrousel from './SmallCarrousel'

function BuyClass() {

    const [lightBoxOpen,setLightBoxOpen] = useState({open:false,photo:null})

    const [userClicked,setUserClicked] = useState(false)


    const closeLightBox = () => {
        setUserClicked(false)
        setLightBoxOpen({open:false,photo:null})
        document.body.classList.remove('no-scroll');
    }

    const imageArray = [placeHolder,placeHolder2,placeHolder3]

    const imageArray2 = [placeHolder4,placeHolder5,placeHolder6]

    const [index,setIndex] = useState(0)

    const [index2,setIndex2] = useState(0)

    useEffect(() => {
      const interval1 = setInterval(() => {
        if (!userClicked) {
          setIndex((prevIndex) => (prevIndex + 1 > imageArray.length - 1 ? 0 : prevIndex + 1));
          setIndex2((prevIndex2) => (prevIndex2 - 1 < 0 ? imageArray2.length - 1 : prevIndex2 - 1));
        }
      }, 4000);
  
      return () => clearInterval(interval1);
    }, [userClicked]);
  
    useEffect(() => {
      if (userClicked === true) {
        const timeout = setTimeout(() => {
          setUserClicked(false);
        }, 30000);
        return () => clearTimeout(timeout);
      }
    }, [userClicked]);
    
      
 
  return (
    <div className='buy-class-page'>
        <div className='buy-class-informations'>
            <h1>Marque sua aula hoje</h1>
            <p>Descubra os benefícios transformadores do yoga e dê o primeiro passo em direção a uma vida mais saudável,
            equilibrada e harmoniosa. Eu estou pronta para guiá-lo em sua jornada de autodescoberta e bem-estar.
            <br/><br/>Com as práticas milenares do yoga, você poderá fortalecer seu corpo, acalmar sua mente e encontrar um 
            equilíbrio profundo que o ajudará a lidar com o estresse da vida moderna. <br/><br/>Marque sua aula hoje e 
            comece a investir em si mesmo, permitindo que o yoga o ajude a cultivar uma maior conexão consigo mesmo
            e com o mundo ao seu redor.<br/><br/>Se você mora em Olinda, clique no botão abaixo para agendar sua aula na 
            nossa sede local. Se você está fora de Olinda e deseja participar das nossas aulas online,
            clique no botão "Aulas Online". Estamos comprometidos em oferecer uma experiência transformadora de yoga,
            não importa onde você esteja. <br/> Esperamos vê-lo em breve!</p>
            <div>
                <button className='buy-class-button'>Marque Aula em Olinda-Pe</button>
                <button className='buy-class-button'>Marque aula em outras regiões </button>
            </div>
            
        </div>
        <div className='buy-class-photos'>

            <div className="buy-class-carousel-container" style={{ transform: `translateX(-${index * 100}%)` }}>
                {imageArray.map((image, i) => (
                <div key={i} className="buy-class-carousel-item">
                    <SmallCarrousel
                    index={index}
                    setIndex={setIndex}
                    lenght = {imageArray.length}
                    image={image}
                    setLightBoxOpen = {setLightBoxOpen}
                    setUserClicked = {setUserClicked}
                    />
                </div>
                ))}
                
            </div>
            
            <div className="buy-class-carousel-container" style={{ transform: `translateX(-${index2 * 100}%)` }}>
                {imageArray2.map((image2, i2) => (
                <div key={i2} className="buy-class-carousel-item">
                    <SmallCarrousel
                    index={index2}
                    setIndex={setIndex2}
                    lenght = {imageArray2.length}
                    image={image2}
                    setLightBoxOpen = {setLightBoxOpen}
                    setUserClicked = {setUserClicked}
                    />
                </div>
                ))}
                
            </div>
        </div>

        {lightBoxOpen.open && (
        <div className='lightbox'>
            <span className='close-button' onClick={closeLightBox}>X</span>
            <div className='lightbox-content'>
                <img src={lightBoxOpen.photo} className='lightbox-image'/>
            </div>
        </div>
     )}
        



    </div>
  )
}

export default BuyClass