import { useState } from 'react';

import './styles.scss'

const KudosForm = ({ onHandleClose }) => {

  const [selectedIndividual, setSelectedIndividual] = useState(null)
  const [selectedKudos, setSelectedKudos] = useState([])


  const onKudosSelected = (e) => {
    const { value } = e.target

    if (selectedKudos?.find(v => v === value)) {
      setSelectedKudos(selectedKudos?.filter(v => v !== value))
    } else {
      setSelectedKudos([...selectedKudos, value])
    }
  }

  return <div className='KudosForm'>
    <h2>Send Kudos to a fellow colleague!</h2>
    <label >Recipient: <input list="organisation" placeholder="Start typing..." onChange={e => setSelectedIndividual(e.target.value)} /> </label>
    <datalist id="organisation">
      <option>Alex Clinton</option>
      <option>Alex Perez</option>
      <option>Alexis Mead</option>
      <option>Aneela Khalid</option>
      <option>Phil Davis</option>
      <option>Jack Sinclair</option>
      <option>Sune du Plessis</option>
      <option>Paul Langley</option>
      <option>Brom Sulaiman</option>
      <option>Thomas Rixon</option>
      <option>Livi Connolly</option>
      <option>Christopher Greeves</option>
      <option>Kyle Julian</option>
    </datalist>

    {selectedIndividual && <h4>{`You are sending kudos to ${selectedIndividual}`}</h4>}

    {selectedIndividual && (<>
      <fieldset>
        <legend>Choose what to include in your message:</legend>

        <div>
          <input type="checkbox" id='thanks' name='thanks' value="Thank you!" onChange={onKudosSelected} />
          <label htmlFor="thanks">Thank you!</label>
        </div>
        <div>
          <input type="checkbox" id='greatJob' name='greatJob' value="You have done a great job!" onChange={onKudosSelected} />
          <label htmlFor="greatJob">You have done a great job!</label>
        </div>
        <div>
          <input type="checkbox" id='teamPlayer' name='teamPlayer' value="You are an awesome team player!" onChange={onKudosSelected} />
          <label htmlFor="teamPlayer">You are an awesome team player!</label>
        </div>
        <div>
          <input type="checkbox" id='above' name='above' value="You went above and beyond!" onChange={onKudosSelected} />
          <label htmlFor="above">You went above and beyond!</label>
        </div>
        <div>
          <input type="checkbox" id='supportive' name='supportive' value="You are so supportive!" onChange={onKudosSelected} />
          <label htmlFor="supportive">You are so supportive!</label>
        </div>
      </fieldset>

      <h4>Your message will look like this: </h4>

      <div>{`Hey ${selectedIndividual}, XXXX wants to tell you something!`}</div>

      {selectedKudos?.map(e => {
        return <div>{e}</div>
      })}

      <textarea placeholder="Do you want to add some personalize message to your colleague?" />
      <div className='buttonContainer'>
        <button className='send' onClick={() => {
          setSelectedIndividual(null)
          setSelectedKudos([])
          onHandleClose()
        }}>Send kudos!</button>
      </div>
    </>)}
  </div>;

}


export default KudosForm;