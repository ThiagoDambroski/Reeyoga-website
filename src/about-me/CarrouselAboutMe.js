import React from 'react'
import leftArrow from '../assets/AboutMe/compact-left-arrow.png'
import rightArrow from '../assets/AboutMe/compact-right-arrow.png'

import courseImage from '../assets/AboutMe/graduation-cap.png'
import onlineImage from '../assets/AboutMe/online-learning.png'
import certificateImage from '../assets/AboutMe/certificate.png'


function CarrouselAboutMe({lenght,aboutMeInformations,aboutMeIndex,setAboutMeIndex}) {


    const nextAboutMe = () => {
        if(aboutMeIndex + 1 > lenght){
            setAboutMeIndex(0)
        }else{
            setAboutMeIndex(aboutMeIndex + 1)
        }
        
    }

    const previousAboutMe = () => {
        if(aboutMeIndex - 1 < 0){
            setAboutMeIndex(lenght)
        }else{
            setAboutMeIndex(aboutMeIndex - 1)
        }
    }



    const renderEducationItem = (item) => {
        let icon = null;
        let educationTypeText = "";
    
        switch (item.educationType) {
          case 'course':
            icon = <img src={courseImage} alt="course-icon" />;
            educationTypeText = " (Presencial)";
            break;
          case 'online':
            icon = <img src={onlineImage} alt="course-online-icon" />;
            educationTypeText = " (Online)";
            break;
          case 'certificate':
            icon = <img src={certificateImage} alt="certificate-icon" />;
            break;
          default:
            break;
        }
    
        return (
          <>
            {icon}
            <div className="education-flex">
              <p className="education-name">
                {item.educationName}
                {educationTypeText}
              </p>
              {item.educationType !== "certificate" &&
                <p className="education-time">
                    Duração do curso<span style={{ fontFamily: 'arial' }}>: </span>
                    {item.educationTime}
                </p>
              
              }
             
            </div>
          </>
        );
      };


  return (
    <div className='about-me-informations'>
        <div className='about-me-informations-title'>
            <img src={leftArrow} alt='left-arrow' onClick={() => previousAboutMe()}/>
            <h1>{aboutMeInformations.title}</h1>
            <img src={rightArrow} alt='right-arrow' onClick={() => nextAboutMe()}/>
        </div>


    {aboutMeInformations.type === 'text' && (
        <p className='type-text'>{aboutMeInformations.content}</p>
    )}

    {aboutMeInformations.type === 'jobs' && (
        <div className='about-me-informations'>
            {aboutMeInformations.jobs.map((item, index) => (
            <div className='about-me-informations-company-card' key={index}>
                <img src={item.icon} alt={item.companyName} />
                <div className='company-card-informations'>
                    <div>
                        <p className='company-card-informations-name'>{item.companyName}</p>
                        <p className='company-card-informations-local'>{item.local}</p>
                    </div>
                    <div className='company-card-informations-function-box'>
                        <p className='company-card-informations-function'>{item.function}</p>
                        <p className='company-card-informations-year'>{item.time}</p>
                    </div>
                    
                    
                    
                </div>
                
            </div>
            ))}
        </div>
    )}


    {aboutMeInformations.type === 'education' && (
        <>
          {aboutMeInformations.education.map((item, index) => (
            <div className="education-type" key={index}>
              {renderEducationItem(item)}
            </div>
          ))}
        </>
      )}

        
    </div>
  )
}

export default CarrouselAboutMe;