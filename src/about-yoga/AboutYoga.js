import React from 'react'
import { useState } from 'react'
import regina from '../assets/AboutYoga/Regina.jpg'
import regina2 from '../assets/AboutYoga/regina2.jpg'
import regina3 from '../assets/AboutYoga/regina3.jpg'
import regina4 from '../assets/AboutYoga/regina4.jpg'


import './aboutYoga.css'

function AboutYoga() {

  const [lightBoxOpen,setLightBoxOpen] = useState({open:false,photo:null})

  const [userClicked,setUserClicked] = useState(false)


  const closeLightBox = () => {
      setUserClicked(false)
      setLightBoxOpen({open:false,photo:null})
      document.body.classList.remove('no-scroll');
  }

  
  const openLightBox = (image) => {
    setUserClicked(true)
    setLightBoxOpen({open:true,photo:image})
    document.body.classList.add('no-scroll');
}


  return (
    <div className='about-yoga-page'>
        <h1>SwáSthya Yôga</h1>
        <div className='about-yoga-info'>
            <p>O SwáSthya Yôga é um sistema de yoga desenvolvido pelo brasileiro DeRose na década de 1960, combinando influências tradicionais do yoga com suas próprias inovações. Este sistema busca promover o autodesenvolvimento e a qualidade de vida por meio de uma abordagem holística que integra corpo, mente e espírito.<br/><br/>
            No SwáSthya Yôga, a prática de técnicas físicas, conhecidas como asanas, é combinada com técnicas de respiração (pranayamas) e relaxamento profundo (yoganidra). Essas práticas visam não apenas fortalecer e flexibilizar o corpo, mas também equilibrar o sistema nervoso, acalmar a mente e promover uma sensação de bem-estar geral.<br/><br/>
            Um dos princípios-chave do SwáSthya Yôga é o "Desdobra-se no Método DeRose", que destaca a importância do comprometimento e dedicação à prática para alcançar os benefícios máximos. Além disso, o sistema enfatiza a autossuperação e a busca constante por aprimoramento pessoal.<br/><br/>
            O SwáSthya Yôga não se limita apenas à prática física; incorpora uma filosofia que aborda questões éticas, valores humanos e o desenvolvimento integral do indivíduo. O sistema busca oferecer ferramentas práticas para lidar com os desafios da vida moderna, promovendo um estilo de vida saudável e equilibrado.</p>
            <div className='about-yoga-images'>
              <img src={regina} style={{borderTopLeftRadius:'5px'}} alt='photo-yoga' 
              onClick={() => openLightBox(regina)}/>
              <img src={regina2} style={{borderTopRightRadius:'5px'}} alt='photo-yoga' 
              onClick={() => openLightBox(regina2)}/>
              <img src={regina4} style={{borderBottomLeftRadius:'5px'}} alt='photo-yoga' 
              onClick={() => openLightBox(regina4)}/>
              <img src={regina3 } style={{borderBottomRightRadius:'5px'}} alt='photo-yoga' 
              onClick={() => openLightBox(regina3)}/>
            </div>
            
        </div>
        <a target='_blank' href='https://derosemethod.org/blogdoderose/tratado-de-yoga/o-que-o-swasthya-yoga-tem-de-tao-especial/'>
         <button>Descubra mais sobre o SwáSthya Yôga </button>
        </a>
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

export default AboutYoga