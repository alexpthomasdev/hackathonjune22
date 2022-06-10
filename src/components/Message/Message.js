import React from 'react';

import './styles.scss';

const Message = ({ onlyManager, text, date, vote }) => {

  const getVote = () => {

    if (vote === 1) return "😡";
    if (vote === 2) return "😞";
    if (vote === 3) return "😐";
    if (vote === 4) return "🙂";
    if (vote === 5) return "😄";

  }

  return <div className={`message ${onlyManager ? 'manager' : ''}`}>
    <div className='headerMessage'>
      <div className='vote'>
        {getVote()}
      </div>
      <div className='date'>
        {new Date(date).toDateString()}
      </div>
    </div>
    <div className='messageText'>{text}</div>
  </div>;

}


export default Message;