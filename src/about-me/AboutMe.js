import React, { useState } from 'react'
import './aboutMe.css'
import regina from '../assets/AboutMe/regina.jpg'
import CarrouselAboutMe from './CarrouselAboutMe'

import yogaIcon from '../assets/AboutMe/yoga-icon.jpg'


function AboutMe() {


    const aboutMeInformations = [
        {
            title: "Um pouco sobre Regina",
            type: 'text',
            content: `Instrutora de yoga que ilumina a jornada de muitos em busca de paz, equilíbrio e bem-estar.
            Com uma paixão
            profunda pela prática do yoga e um coração aberto para compartilhar seus ensinamentos, Regina é uma fonte 
            de inspiração para todos aqueles que a conhecem.
            Regina descobriu o poder transformador do yoga em sua própria vida e, desde então, dedicou-se a ajudar 
            outras pessoas a encontrarem o mesmo caminho. 
            Sua jornada como instrutora de yoga começou há anos, quando ela decidiu aprofundar seu conhecimento e se 
            tornar uma guia para aqueles que desejam explorar os benefícios físicos e espirituais do yoga.
            Seus alunos admiram a paciência e a dedicação de Regina. Ela acredita que o yoga é muito mais do que uma 
            série de posturas;
            é uma jornada de autodescoberta, conexão consigo mesmo e com o mundo ao seu redor. Suas aulas 
            são um espaço seguro e acolhedor, onde todos são incentivados a crescer e evoluir em sua própria jornada
            de  yoga.
            Regina é conhecida por sua abordagem holística ao yoga, integrando técnicas de respiração, meditação e
            movimento para criar uma experiência completa. Ela guia seus alunos a encontrarem harmonia em seus corpos, 
            mentes e almas, promovendo um equilíbrio duradouro em suas vidas.
            Se você está em busca de um guia confiável e inspirador para a prática do yoga, não procure mais. 
            Regina é a instrutora que pode ajudá-lo a encontrar serenidade, força e harmonia em sua vida diária. 
            Junte-se a ela em uma jornada de descoberta e transformação através do yoga. Namaste!`
        },
        {
            title:"Experiencia de trabalho",
            type: "jobs",
            jobs: [
                {
                    icon:yogaIcon,
                    companyName:"Academia de Yoga ",
                    function:"Instrutora de Yoga",
                    time:"2020-2022",
                    local:"USA-California"

                },
                {
                    icon:yogaIcon,
                    companyName:"Yoga Brasil ",
                    function:"Instrutora de Yoga",
                    time:"2018-2019",
                    local:"Brasil-Pernambuco"

                }
            ]

        },
        {
            title: "Formação e certificados",
            type: "education",
            education: [
                {
                    educationType:"course",
                    educationName:"Curso de yoga",
                    educationTime: "6 Meses"
                },
                {
                    educationType: "online",
                    educationName: "Curso online de yoga",
                    educationTime: "3 meses"
                },
                {
                    educationType: "certificate",
                    educationName: "Certificado de Yoga",
                    educationTime: null
                }
            ]
        }
    ]

    const [aboutMeIndex, setAboutMeIndex] = useState(0)



  return (
    <div className='about-me-page align-center'>

        <div className='about-me-image'>
            <img src={regina} alt='self'/>
        </div>

        <div className='about-me-informations'>
            <div className="carousel-container" style={{ transform: `translateX(-${aboutMeIndex * 100}%)` }}>
                {aboutMeInformations.map((information,index) => (
                    <div key={index} className="carousel-item">
                        <CarrouselAboutMe
                        lenght = {aboutMeInformations.length - 1}
                        aboutMeInformations={information}
                        aboutMeIndex = {aboutMeIndex}
                        setAboutMeIndex={setAboutMeIndex}
                        />
                    </div>
                ))}
                
            </div>
        </div>

    </div>
  )
}

export default AboutMe