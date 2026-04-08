import React from 'react'
import Chat from './Chat'
import './MainBox.css'

const MainBox = (props) => {
  return (
    <div className='main_b_chat'>
      <Chat tone={props.tone} lang={props.lang} more={props.more} name={props.name}/>
    </div>
  )
}

export default MainBox
