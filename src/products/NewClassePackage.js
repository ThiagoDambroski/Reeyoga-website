import React from 'react'
import './NewClassePackage.css'

function NewClassePackage({pack}) {
    const openWhatsApp = () => {

        const phoneNumber = '8192611571';
    
        const message = encodeURIComponent('Ola,eu gostaria saber mais informaçoes sobre o pacote: ' + pack.name);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
        // Redirect to the WhatsApp URL.
        window.open(whatsappURL, '_blank');
      };
    
    
      return (
        <div className='classe-package-content'>
            <div className='classe-package-informations'>
                <h2>{pack.name}</h2>
                <p>{pack.about}</p>
                <h2>Oque esse pacote oferece</h2>
                <div className='classe-package-what-contain'>
                    {pack.whatContain.map((item) => 
                        <div className='classe-package-what-contain-div'>
                          <span>*</span>
                          <span className='classe-package-what-contain-item'>{item}</span>
                        </div>
                        
                    )}
                </div>
                <button onClick={() => openWhatsApp()} className='classe-package-what-contain-button'>
                  Contrate agora
                </button>
            </div>
            
        </div>
      )
}

export default NewClassePackage