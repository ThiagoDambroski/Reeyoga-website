import React, { useState } from 'react'

import './fqa.css'

function Fqa() {

  const [questions,setQuestions] = useState([
    {id: 1, question: "Quais são os benefícios da prática regular de yoga ?",
    anwser:`A prática regular de yoga oferece uma ampla gama de benefícios para o corpo e a mente. 
    Fisicamente, ela melhora a flexibilidade, fortalece os músculos, promove uma postura melhor e aumenta a resistência. 
    Em nível mental, o yoga ajuda a reduzir o estresse, melhora o foco e promove uma sensação geral de bem-estar.
    Além disso, muitos praticantes relatam um aumento na clareza mental e na qualidade do sono.`,
    isToggle: false},
    {id: 2, question: "Como encontrar aulas de yoga na minha região ?",
    anwser:`Para encontrar aulas de yoga na sua região, basta explorar nosso site para obter informações detalhadas 
    sobre os diferentes locais onde ministro aulas. Se preferir praticar no conforto da sua casa, também oferecemos 
    opções de aulas online. Navegue pelo site para descobrir locais, horários e detalhes sobre aulas presenciais, ou
    entre em contato conosco para obter informações sobre aulas virtuais.`,
    isToggle: false},
    {id:3, question: "Qual é a abordagem única da instrutora no ensino de yoga?",
    anwser:`Minha abordagem no ensino de yoga é centrada na individualidade e na conexão mente-corpo. 
    Valorizo a adaptação das práticas às necessidades específicas dos alunos, promovendo um ambiente acolhedor 
    para todos os níveis de habilidade. Com uma ênfase na consciência do corpo e na respiração, busco criar 
    experiências que não apenas fortaleçam fisicamente, mas também nutram a mente e o espírito. Convido você a 
    explorar mais sobre minha filosofia única durante as aulas.`,
    isToggle:false
    },
    {id:4, question: "Como posso agendar uma aula de yoga?",
    anwser:`Agendar uma aula de yoga é simples e conveniente. Você pode entrar em contato através do 
    formulário de contato disponível no site, onde poderá indicar suas preferências de horário e local. 
    Além disso, oferecemos opções de agendamento online para facilitar ainda mais o processo. Se preferir, 
    sinta-se à vontade para ligar ou enviar um e-mail diretamente. Estou ansiosa para recebê-lo em uma de 
    minhas aulas e compartilhar os benefícios transformadores do yoga com você.`,
    isToggle:false
    }
  ])


  const handleToggle = (itemId) => {
    setQuestions((prevQuestions) => 
      prevQuestions.map((item) => 
        item.id === itemId ? {...item,isToggle: !item.isToggle } : item
      )
    )
  }

  return (
    <div className='fqa-page'>
      <h1>Duvidas Frequentes</h1>
      {questions.map((item) => 
        <div key={item.id} className='fqa-question'>
          <div className='fqa-container-question' onClick={() => handleToggle(item.id)}>
            <p  className='fqa-question-p'>{item.question}</p>
          </div>

          
          {item.isToggle && 
            <div className='fqa-answer'>
              <p>{item.anwser}</p>
            </div>
          }
        </div>
      
      )}

    </div>
  )
}

export default Fqa