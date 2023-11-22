import React from 'react'

import './contactMeNew.css'

import insta from '../assets/ContactMe/instagram.png'
import youtube from '../assets/ContactMe/youtube.png'
import wpp from '../assets/ContactMe/whatsapp.png'

function ContactMe() {

  const openWhatsApp = () => {

    const phoneNumber = '8192611571';

    const message = encodeURIComponent('Ola, eu gostaria de marcar uma aula de yoga.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to the WhatsApp URL.
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className='contact-me-container'>
        <div className='contact-me-border'>
            <h2>Confira Minhas redes</h2>
            <div className='contact-me-social'>
                <a href='https://www.instagram.com/ree.yogar/' target='_blank'><img src={insta}/></a>
                <a href='https://www.youtube.com/@Reeyogar' target='_blank'><img src={youtube}/></a>
                <img src={wpp} onClick={() => openWhatsApp()}/>
                
            </div>
        </div>
       
        

    </div>
  )
}

export default ContactMe