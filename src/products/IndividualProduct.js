import React from 'react'

function IndividualProduct({product}) {
  return (
    <div className='product-container'>
        <img src={product.image}/>
        <h3>{product.title}</h3>
        <p className='product-container-price'>R$ {product.price}</p>
        <p className='product-container-description'>{product.description}</p>
        <a className='product-container-link' href={product.link} target='_blank' >Compre seu produto agora</a>
    </div>
  )
}

export default IndividualProduct