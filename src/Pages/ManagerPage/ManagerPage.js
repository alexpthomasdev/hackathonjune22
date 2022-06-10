import React, { useState } from 'react';

import Graph from '../../components/Graph';

import teams from '../../data/teams';
import questions from '../../data/questions';


import './styles.scss'

const ManagerPage = () => {

  const [teamSelected, setTeamSelected] = useState('Technology')
  const [questionSelected, setQuestionSelected] = useState(questions[0])

  return <div className='managePage'>
    <h1>You can configure your survey settings here. Scroll to find tips for improving engagement.</h1>

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

    <div className='tips'>
      <div className='tipsContainer'>
        <span className='tipsHeader low'>Tips / suggestions for when team has low engagement:</span>
        <ul>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Consult employees to determine what about the work may be frustrating or demotivating them. Discuss which elements are challenging for them, and how can they can be supported to increase their investment in the work.</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Consult employees to get an understanding of why they may struggle to concentrate at work. Determine what is contributing to lower concentration - are these related to personal circumstances, work environment, or the tasks?</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Consult employees to determine how they would prefer the culture or team dynamics to be. Probe how the current values, styles of interaction, and communication lines are impacting them, and what would their suggestions for improvement be.</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Consult employees to determine how their ideal approach to working with others and team meetings would be. Probe on what do they prefer in terms of cooperation, support, and voicing of ideas.</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Consult employees to get a better understanding of how they may want the direction of the company to be. Probe on suggestions for goals, objectives, and overall focus of the company.</li>
        </ul>
      </div>
      <div className='tipsContainer'>
        <span className='tipsHeader high'>Tips / suggestions for how to maintain high team engagement:</span>
        <ul>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Employees are very satisfied with their current projects and tasks. Keep in mind their current interests and strengths before assigning additional tasks.</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Your team enjoys working with their current team. Ensure to provide frequent opportunities to voice their concerns should they have the need.</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Your team is satisfied with the current approach to working with others and with the frequency of meetings. Ensure to monitor satisfaction should there be changes to team structure.</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Your team is onboard with the current strategic direction of the company. Ensure to provide clear feedback if there should be changes on strategies and objectives, keeping everyone involved with new developments.</li>
          <li className={Math.random() > 0.5 ? 'selected' : ''}>Your employees find it easy to concentrate on their work. Ensure to keep supporting them through the type of work environment and tasks provided to them</li>
        </ul>
      </div>
    </div>
  </div>;

}


export default ManagerPage;