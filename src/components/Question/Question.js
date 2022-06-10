import { useState } from 'react'
import './styles.scss';

const Question = ({ questionId, questionText, showKudosPopup, handleSendKudosPressed }) => {

  const [value, setValue] = useState(null)
  const [commentValue, setCommentValue] = useState("")
  const [_, setVisibleTo] = useState('all')

  const onAnswerSelected = (id) => {
    setValue(value !== id ? id : null)
  }

  const handleRadioChange = (e) => {
    setVisibleTo(e.target.value)
  }

  return <div className='questionContainer'>
    <div className='question'>
      {questionText}
    </div>
    <div className='answers'>
      <div className={`answerBox box-1 ${value === 1 ? 'selected' : ''}`} onClick={() => { onAnswerSelected(1) }}>
        😡
        <span>Strongly disagree</span>
      </div>
      <div className={`answerBox box-2 ${value === 2 ? 'selected' : ''}`} onClick={() => { onAnswerSelected(2) }}>
        😞
        <span>Disagree</span>
      </div>
      <div className={`answerBox box-3 ${value === 3 ? 'selected' : ''}`} onClick={() => { onAnswerSelected(3) }}>
        😐
        <span>Neutral</span>
      </div>
      <div className={`answerBox box-4 ${value === 4 ? 'selected' : ''}`} onClick={() => { onAnswerSelected(4) }}>
        🙂
        <span>Agree</span>
      </div>
      <div className={`answerBox box-5 ${value === 5 ? 'selected' : ''}`} onClick={() => { onAnswerSelected(5) }}>
        😄
        <span>Strongly agree</span>
      </div>
    </div>
    <div className={`commentsSection ${value !== null ? 'open' : ''}`}>
      <div className='title'>
        {(value === 1 || value === 2) && (<b className='subtitle'>{`Please share why you ${value === 1 ? 'strongly disagree' : 'disagree'} with this statement`}</b>)}
        <span>Feedback helps us improve the workspace for you</span>
        {showKudosPopup && (value === 4 || value === 5) && (<button onClick={() => { handleSendKudosPressed() }}> Send Kudos </button>)}
      </div>
      <div className='commentsContainer'>
        <div className='comments'>
          <textarea placeholder="Why?" value={commentValue} onChange={e => setCommentValue(e.target.value)} />
        </div>
        <div className='visibility'>
          <label>Visible to:</label>
          <div>
            <input type="radio" id={`manager-${questionId}`} name={`visibility-${questionId}`} value="manager" onChange={handleRadioChange} />
            <label htmlFor={`manager-${questionId}`}>Manager</label>
          </div>
          <div>
            <input type="radio" id={`all-${questionId}`} name={`visibility-${questionId}`} value="all" defaultChecked onChange={handleRadioChange} />
            <label htmlFor={`all-${questionId}`}>All</label>
          </div>
        </div>
      </div>
    </div>
  </div>;

}


export default Question;