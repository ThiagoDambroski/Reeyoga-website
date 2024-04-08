import React, { useEffect, useState } from 'react'
import './BuyClass.css'

import image from '../assets/BuyClass/1.jpg'
//import image2 from '../assets/BuyClass/2.jpg'
import image3 from '../assets/BuyClass/3.jpg'
import image4 from '../assets/BuyClass/4.jpg'
import image5 from '../assets/BuyClass/5.jpg'
import image6 from '../assets/BuyClass/6.jpg'
import image7 from '../assets/BuyClass/7.jpg'
//import image8 from '../assets/BuyClass/8.jpg'
//import image9 from '../assets/BuyClass/9.jpg'
//import image10 from '../assets/BuyClass/10.jpg'
import image11 from '../assets/BuyClass/11.jpg'
import image12 from '../assets/BuyClass/12.jpg'
import image14 from '../assets/BuyClass/14.jpg'



import SmallCarrousel from './SmallCarrousel'

function BuyClass() {

    const [lightBoxOpen,setLightBoxOpen] = useState({open:false,photo:null})

    const [userClicked,setUserClicked] = useState(false)


    const closeLightBox = () => {
        setUserClicked(false)
        setLightBoxOpen({open:false,photo:null})
        document.body.classList.remove('no-scroll');
    }

    const imageArray = [image12,image11,image14]

    const imageArray2 = [image4,image6,image7,image3]

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

    const openWhatsApp = () => {

      const phoneNumber = '8192611571';
  
      const message = encodeURIComponent('Ola, eu gostaria de marcar uma aula de yoga.');
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  
      // Redirect to the WhatsApp URL.
      window.open(whatsappURL, '_blank');
    };
  
    
      
 
  return (
    <div className='buy-class-page'>
        <div className='buy-class-informations'>
            <h1>Monte seu grupo e marque sua aula</h1>
            <p>Descubra os benefícios transformadores do yôga e dê o primeiro passo em direção a uma vida mais saudável,
             equilibrada e harmoniosa. Eu estou pronta para guiá-lo em sua jornada de autodescoberta. 
             bem-estar e conhecimento ancestral que você carrega dentro de si.
            <br/><br/>
            Com as práticas milenares do yôga, você poderá fortalecer seu corpo, conduzir sua mente e encontrar um 
            equilíbrio profundo que o ajudará a lidar com o estresse da vida moderna, claro com a sua permissão interna.

            <br/><br/>
            Monteseu grupo e marque sua aula hoje e comece a investir em si mesmo, permitindo que o yôga o  
            conduza a cultivar uma maior conexão consigo mesmo e com o mundo ao seu redor.
            <br/><br/>
            Monte seu grupo , não importa o lugar nós podemos estar juntos e fazer um dia memorável 
            e criar uma nova percepção de vida.</p>
            <div className='buy-classe-button-container'>
                <button className='buy-class-button' onClick={() => openWhatsApp()}>Marque sua aula online </button>
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