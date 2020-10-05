import React, { useState } from "react";
import './AddJog.scss'
import closeButton from '../../assets/closebtn.png';
import { useHistory } from "react-router-dom";

export default function AddJog({ addJog }) {
  const [ distance, setDistance ] = useState(null)
  const [ time, setTime ] = useState(null)
  const [ date, setDate ] = useState('')
  const [valid,setValid] = useState('')
  const history = useHistory();
  const dateRegEx = new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
  const handleClick = () => {
    history.push('/jogs')
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addJog(distance, time, date)
  }
  const handleDistanceChange = (event) => {
    setDistance(
      event.target.value
    )
  }
  const handleTimeChange = (event) => {
    setTime(
      event.target.value
    )
  }
  const handleDateChange = (event) => {
    dateRegEx.test(event.target.value) ? setValid('') : setValid('wrong')
    setDate(
      event.target.value
    )
  }
  return (
    <div className='page'>
      <div className="add-jog">
        <img src={closeButton} alt="close button" className='add-jog__close' onClick={handleClick}/>
        <form className="add-jog__form" onSubmit={handleSubmit}>
          <label htmlFor="distance">Distance</label>
          <input type="text" id='distance' required={true} onChange={handleDistanceChange}/>
          <label htmlFor="time">Time</label>
          <input type="text" id='time' required={true} onChange={handleTimeChange}/>
          <label htmlFor="date">Date</label>
          <input type="text" id='date' required={true} onChange={handleDateChange} placeholder='YYYY-MM-DD'
                 className={valid}/>
          <input type='submit' value='Save'/>
        </form>
      </div>
    </div>
  )
}