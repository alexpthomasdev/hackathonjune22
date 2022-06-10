import React, { useState } from 'react';

import Graph from '../../components/Graph';
import Message from '../../components/Message';

import teams from '../../data/teams';
import questions from '../../data/questions';
import messages from '../../data/messages'

import './styles.scss'

const HomePage = () => {
  const [teamSelected, setTeamSelected] = useState('Technology')
  const [questionSelected, setQuestionSelected] = useState(questions[0])

  return <div className='homePage'>

    <div className='headerContainer'>
      <div className=''>
        <label htmlFor='teamSelector'> Select a team: &nbsp;&nbsp;&nbsp;
          <select id="teamSelector" value={teamSelected} onChange={(e) => { setTeamSelected(e.target.value) }}>
            {teams.map(t => {
              return <option key={t} id={t} value={t} >{t}</option>
            })}
          </select>
        </label>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <label htmlFor='questionSelector'> Select a question: &nbsp;&nbsp;&nbsp;
          <select id="questionSelector" value={questionSelected.value} onChange={(e) => { setQuestionSelected(e.target.value) }}>
            {questions.map(t => {
              return <option key={t.id} id={t.id} value={t.value} >{t.value}</option>
            })}
          </select>
        </label>

      </div>
    </div>

    <div className='graphContainer'>
      <Graph />
    </div>

    <div className='messagesContainer'>
      {messages?.sort((a, b) => {
        if (a.date < b.date) return 1
        if (a.date > b.date) return -1
        return 0
      }).map(m => {
        return (<Message key={m.id} onlyManager={m.onlyManager} text={m.text} date={m.date} vote={m.vote} />)
      })}
    </div>
  </div>;

}


export default HomePage;