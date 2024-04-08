import React, { useState } from 'react'
import './ClassePackage.css'
import image1 from '../assets/Packages/package1.jpg'
import image2 from '../assets/Packages/package2.jpg'
import CarrouselClassePackage from './CarrouselClassePackage'
import arrowLeft from '../assets/Packages/compact-left-arrow.png'
import arrowRight from '../assets/Packages/compact-right-arrow.png'


function ClassePackage() {


    const [index,setIndex] = useState(0)

    const packages = [{
        name: "Health Coaching",
        image: image1,
        about: "Descubra uma jornada única de bem-estar com nosso serviço exclusivo de treinamento em saúde" +
        "voltada para uma melhor qualidade de vida! Personalizando seus hábitos alimentares de acordo com seu" +
        "ritmo circadiano e Ayurveda, proporcionando equilíbrio entre alimentação, sono e exercícios. Acompanhado" +
        "meditação e sua área favorita de atividade física personalizados para seu perfil, com suporte dedicado" +
        "uma vez por mês.",
        whatContain: ["Organização de seus horários com base no Ritmo circadiano individual.",
        "Estudo alimentar com base no seu biotipo para o Ayurveda ",
        "Aprenda a cozinhar maravilhas que te fazem bem sem se culpar.",
        "Descobrindo qual a melhor atividade física para você",
        "Descobrindo os alimentos que te inflamam.",
        "Montando um plano de hábitos de amor próprio",
        "Fazendo a vida sobra encontrando tempo pra cada atividade que se faz em casa.",
        "Acompanhamento mensal de 1h para reorganizar sua rotina junto a você por 6 meses.",
        "Agenda com anual para acompanhamento de Rotina"]
    },
    {
        name:"Pacote de Yôga",
        image:image2,
        about:" Durante 6 meses vou estar com você presencialmente, e on-line em Pernambuco no conforto de sua casa" +
        ", ou em um grupo formado por você pra lhe conduzir a sua transformação. Dentro de tudo ainda vamos ter aulas " +
        "de Ayurveda, rotinas planejamentos para jutas evoluirmos a outro nível!" + 
        "contendo os 8 angas ou 8 partes do processo: mudrá, pújá, mantra, pránáyáma, kriyá, ásana, yôganidrá e samyama.",
        whatContain:["Mudrá: gesto reflexológico feito com as mãos.",
        "Pújá: retribuição de energia. Propósito: identificação com os arquétipos do SwáSthya Yôga.",
        "Mantra: vocalização de sons e ultrassons.",
        "Pránáyáma: expansão da bioenergia através de respiratórios.",
        "Kriyá: atividade de purificação das mucosas",
        "Ásana: técnicas orgânicas movimento.",
        "Yôganidrá: técnica de descontração.",
        "Samyama: concentração, meditação e hiperconsciência."
        ]
    }
    ]

    const nextCarrousel = () => {
        if(index + 1 > packages.length - 1){
          setIndex(0)
        }else{
          setIndex(index + 1)
        }
      }
    
      const previousCarrousel = () => {
        if(index - 1 < 0){
          setIndex(packages.length - 1)
        }else{
          setIndex(index - 1)
        }
      }

   
    

  return (
    <div className='classe-package-page'>
        <div className='classe-package-page-div'>
            <img src={arrowLeft} onClick={() => nextCarrousel()} className='classe-package-page-arrow'/>
            <h1>Meus Pacotes</h1>
            <img src={arrowRight} onClick={() => previousCarrousel()} className='classe-package-page-arrow'/>
        </div>
        

        <div className="carousel-container-package" style={{ transform: `translateX(-${index * 100}%)` }}>
            
            
            {packages.map((pack, i) => (
            <div key={i} className="carousel-item">
                <CarrouselClassePackage
                pack = {pack}
                />
            </div>
            
        ))}
        
        </div>
    </div>
  )
}

export default ClassePackage