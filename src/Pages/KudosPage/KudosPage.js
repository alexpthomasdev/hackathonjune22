import React, { useState } from 'react';
import data from '../../data/kudos'

import KudosTable from '../../components/KudosTable';
import KudosMessage from '../../components/KudosMessage';

import KudosForm from '../../components/KudosForm'
import Reveal from '../../components/Reveal'


import teams from '../../data/teams';
import dates, { filterByDate } from '../../data/dates';

import './styles.scss'

const KudosPage = () => {
  const [teamSelected, setTeamSelected] = useState('Technology')
  const [dateSelected, setDateSelected] = useState(dates[0])

  const [openKudosModal, setOpenKudosModal] = useState(false)

  const dataFiltered = data?.filter(k => {
    return k.team === teamSelected
  }).reduce((acc, d) => {
    const messages = d?.kudos?.filter((value) => { return filterByDate(value, dateSelected) })
    const messagesObject = messages.map(m => {
      return {
        name: d.name,
        from: m.from,
        message: m.message,
        date: m.createdAt
      }
    })
    return acc.concat(...messagesObject)
  }, [])

  return <div className='' style={{ margin: '20px' }}>
    <div className='headerContainer'>
      <div className=''>
        <label htmlFor='teamSelector'> Select a team: &nbsp;&nbsp;&nbsp;
          <select id="teamSelector" value={teamSelected} onChange={(e) => { setTeamSelected(e.target.value) }}>
            {teams.map(t => {
              return <option key={t} id={t} value={t} >{t}</option>
            })}
          </select>
        </label>
        &nbsp;&nbsp;&nbsp;
        <label htmlFor='dateSelector'> Select a Period of time: &nbsp;&nbsp;&nbsp;
          <select id="dateSelector" value={dateSelected} onChange={(e) => { setDateSelected(e.target.value) }}>
            {dates.map(d => {
              return <option key={d} id={d} value={d} >{d}</option>
            })}
          </select>
        </label>
      </div>
      <div className='sendKudosBanner' onClick={() => { setOpenKudosModal(true) }}>
        Do you want to send Kudos to a colleague? <img src="./Kudos.jpg" alt='kudos' />
      </div>
    </div>
    <div className='KudosPageContainer'>
      <div className='tableContainer'>
        <KudosTable team={teamSelected} date={dateSelected} />
      </div>
      <div className='messages'>
        {dataFiltered?.sort((a, b) => {
          if (a.date < b.date) return 1
          if (a.date > b.date) return -1
          return 0
        })?.map((d, index) => {
          return <KudosMessage key={index} date={d.date} message={d.message} name={d.name} from={d.from} />
        })}
      </div>
    </div>
    <Reveal isOpen={openKudosModal} id='kudos' showCloseButton handleCloseOnOverlayClick handleOnClose={() => setOpenKudosModal(false)}>
      <KudosForm onHandleClose={() => setOpenKudosModal(false)} />
    </Reveal>
  </div>
}


export default KudosPage;