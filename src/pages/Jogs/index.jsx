import React, { useEffect, useState } from "react";
import './Jogs.scss';
import sadEmoticon from '../../assets/sadEmoticon.png';
import { Link } from 'react-router-dom';
import JogDetails from "../../components/JogDetails";
import addBtn from '../../assets/add-btn.png'
import { useHistory } from "react-router-dom";
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;
export default function Jogs({ getJogs, showPicker }) {
  const [ jogs, setJogs ] = useState([])
  const [ datePicker, setDatePicker ] = useState()
  useEffect(() => {
    setDatePicker(showPicker)
  })
  useEffect(() => {
    const fetchData = async () => {
      const jogsList = await getJogs();
      setJogs(jogsList.response.jogs);
    }
    fetchData();
  }, [ getJogs ])
  const history = useHistory();
  const handleClick = () => {
    history.push('/add')
  }
  const test = (dates) => {
    if(dates[1]!==null) {
      const dateFrom = Date.parse(dates[0]._d)
      const dateTo = Date.parse(dates[1]._d)
      const filtredJogs = jogs.filter((item) =>
        item.date > dateFrom && item.date < dateTo
      )
      setJogs(filtredJogs)
    }
    console.log(dates)
  }
  const emptyJog = (
    <div className='page'>
      <div className='Jogs-empty'>
        <div className='Jogs-empty__sad'>
          <img src={sadEmoticon} alt="sad-emoticon"/>
          <p>Nothing is there</p>
        </div>
        <button><Link to='/add'>Create your jog first</Link></button>
      </div>
    </div>
  )
  const jogsArray = jogs.map((item, i) => {
    return (
      <div key={i} className='jogs-wrapper'>
        <JogDetails data={item}/>
      </div>
    )
  })
  return (
    <>
      {datePicker && <RangePicker className='date-picker' onCalendarChange={test}/>}
      {/*{emptyJog}*/}
      {jogs.length === 0 ? emptyJog : jogsArray}
      <img src={addBtn} alt="add-button" className='jogs-wrapper-add' onClick={handleClick}/>
    </>
  )
}