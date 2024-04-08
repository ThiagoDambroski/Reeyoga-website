import React, { useState } from 'react'
import NewClassePackage from './NewClassePackage';


function IndividualProduct({product}) {

  const [lightboxOpen, setLightboxOpen] = useState(false)


  const openLightbox = () => {
    setLightboxOpen(true);
    // Add the 'no-scroll' class to the <body> element
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    // Remove the 'no-scroll' class from the <body> element
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className='product-container'>
        <img src={product.image}/>
        <h3>{product.title}</h3>
        {product.type === 'package' ? 
          <>
          <p className='product-container-description package' onClick={openLightbox}>{product.description}</p>
          <span className='product-container-button' onClick={openLightbox} >Saiba mais</span>
          </>
          :
          <>
          <p className='product-container-price'>R$ {product.price}</p>
          <p className='product-container-description'>{product.description}</p>
          <a className='product-container-link' href={product.link} target='_blank' >Compre seu produto agora</a>

          </>
        }
        
        {lightboxOpen && (
        <div className="lightbox">
          <span className="close-button" onClick={closeLightbox}>X</span>
          <div className="lightbox-content">
           <NewClassePackage pack={product.package}/>
          </div>
        </div>
        )}
    </div>
    
  )
}

export default IndividualProduct