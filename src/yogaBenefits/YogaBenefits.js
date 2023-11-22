import React from 'react'

import './yogaBenefits.css'

function YogaBenefits() {

    const benefitsArray = [
        `O yoga é conhecido por reduzir os níveis de estresse. 
        Através da prática de técnicas de respiração e meditação,
        ele promove o relaxamento e ajuda a diminuir a ansiedade, 
        melhorando a saúde menta`,

        `O yoga envolve uma série de posturas e alongamentos que
        ajudam a melhorar a flexibilidade do corpo. Isso pode reduzir 
        a rigidez muscular e prevenir lesões.`,
        
        `Muitas posturas de yoga exigem que você sustente seu próprio peso,
        o que leva ao fortalecimento dos músculos. Isso é especialmente benéfico 
        para a saúde das costas e do núcleo`,

        `O yoga ajuda a aumentar a consciência do corpo e da postura. A prática regular pode 
        corrigir desalinhamentos posturais, o que é importante para prevenir dores nas costas 
        e no pescoço.`,

        `O yoga inclui exercícios que melhoram o equilíbrio e a coordenação. Isso é útil para pessoas 
        de todas as idades, mas especialmente para idosos, na prevenção de quedas.`,


        `A prática regular do yoga ajuda a aumentar a circulação sanguínea, o que por sua vez melhora a energia
        e a vitalidade. Muitas pessoas relatam sentir-se mais enérgicas e alertas após uma aula de yoga.`
    ]

   

  return (
    <div className='yoga-benefits-page align-center'>
        <h1 className='yoga-benefits-title'>Beneficios de se fazer yoga</h1>

        <div className='yoga-benefits-container'>
            {benefitsArray.map((benefit,index) =>
                <div className='yoga-benefits-card' key={index}>
                  <h1>{index + 1}</h1>
                  <p>{benefit}</p>  
                </div>
            )}

        </div>

    </div>
  )
}

export default YogaBenefits