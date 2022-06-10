import React from 'react';

import './styles.scss';

const KudosMessage = ({ name, date, from, message }) => {

  return <div className='kudosMessage'>
    <div className='header'>
      <div className='name'>{name}</div>
      <div className='date'>{new Date(date).toDateString()}</div>
    </div>
    <div className='message'>{message}</div>
    <div className='from'>Given by <span className='given'>{from}</span></div>
  </div>;

}


export default KudosMessage;