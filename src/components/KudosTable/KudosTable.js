import React from 'react';
import data from '../../data/kudos'

import './styles.scss';

import { filterByDate } from '../../data/dates';

const KudosTable = ({ team = 'Technology', date = 'Past month' }) => {


  return <table className='kudosTable' >

    <thead className='header'>
      <tr>
        <th className='name'>Name</th>
        <th className='team'>Team</th>
        <th className='number'>Kudos</th>
      </tr>
    </thead>
    <tbody className='body'>
      {data?.filter(d => {
        return d.team === team
      })?.sort((d1, d2) => {
        const kudos1 = d1?.kudos?.filter(value => { return filterByDate(value, date) })
        const kudos2 = d2?.kudos?.filter(value => { return filterByDate(value, date) })


        if (kudos1?.length < kudos2?.length) return 1
        if (kudos1?.length > kudos2?.length) return -1
        return 0
      })?.map(d => {
        return (<tr className='row' key={d.id}>
          <td className='name'>{d.name}</td>
          <td className='team'>{d.team}</td>
          <td className='number'>{d?.kudos?.filter(value => { return filterByDate(value, date) })?.length || 0}</td>
        </tr>)
      })}
    </tbody>
  </table >;

}


export default KudosTable;