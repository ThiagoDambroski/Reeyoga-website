import React from 'react';
import './home.css'
function Home() {

  const openWhatsApp = () => {

    const phoneNumber = '8192611571';

    const message = encodeURIComponent('Ola, eu gostaria de marcar uma aula de yoga.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to the WhatsApp URL.
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className='home-page'>
      <div className='home-info'>
        <h1 className='slide-in'>Reeyôgar</h1>
        <button
          className='contact-me-button slide-in-right'
          onClick={openWhatsApp}
        >
          Marque sua Aula
        </button>
      </div>
    </div>
  );
}

export default Home;
