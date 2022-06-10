import React, { useState } from 'react';
import Question from '../../components/Question';

import Reveal from '../../components/Reveal'
import KudosForm from '../../components/KudosForm'

import questions from '../../data/questions';


const QuestionnairePage = () => {


  const [openKudosModal, setOpenKudosModal] = useState(false)

  return <><div className="App" style={{ margin: '20px' }}>

    <h1 className='title'>Thank you for completing this questionnaire. Your responses are <span>completely anonymous</span>.</h1>

    {questions.map((q) => {
      if (q.id !== "4") {
        return <Question key={q.id} questionId={q.id} questionText={q.value} />
      } else {
        return <Question key={q.id} questionId={q.id} questionText={q.value} showKudosPopup handleSendKudosPressed={() => setOpenKudosModal(true)} />
      }
    })}


  </div >
    <Reveal isOpen={openKudosModal} id='kudos' showCloseButton handleCloseOnOverlayClick handleOnClose={() => setOpenKudosModal(false)}>
      <KudosForm onHandleClose={() => setOpenKudosModal(false)} />
    </Reveal>
  </>

}


export default QuestionnairePage;