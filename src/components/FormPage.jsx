import React, { useState } from 'react'
import './FormPage.css'
import { useNavigate } from 'react-router-dom'

const FormPage = (props) => {

  function handleTone(e){
    props.setTone(e.target.value);
    console.log(e.target.value);
  }

  function handleLang(e){
    props.setLang(e.target.value);
    console.log(e.target.value);
  }

  function handleMore(e){
    props.setMore(e.target.value);
    console.log(e.target.value);
  }
  
  function handleName(e){
    props.setName(e.target.value);
    console.log(e.target.value);
  }

  const navigate = useNavigate();

  function handlesubmit(e){
    e.preventDefault();
    navigate('/chat');
  }

  return (
    <div className='formpage_container'>
      <div className='form_div'>
        <h2>Create Your AlterEgo</h2>
        <hr />

        <form className="form_content"  onSubmit={handlesubmit}>

          <p className='name_div'>
            <label>Name:</label>
            <input 
              type="text" 
              name="name"
              defaultValue="XYZ"
              onChange={handleName}
              required
            />
          </p>

          <p className="row">
            <label className='tone_div'>Tone:</label>
            <span>
              <input type="radio" name="tone" value="funny" onChange={handleTone} checked={props.tone === "funny"}/> Funny
              <input type="radio" name="tone" value="serious" onChange={handleTone} checked={props.tone === "serious"} /> Serious
              <input type="radio" name="tone" value="savage" onChange={handleTone} checked={props.tone === "savage"}/> Savage 😈
              <input type="radio" name="tone" value="chill" onChange={handleTone} checked={props.tone === "chill"}/> Chill
            </span>
          </p>

          <p className="row">
            <label className='lang_div'>Language:</label>
            <span>
              <input type="radio" name="lang" value="hinglish" onChange={handleLang} checked={props.lang === "hinglish"}/> Hinglish
              <input type="radio" name="lang" value="english" onChange={handleLang} checked={props.lang === "english"}/> English
            </span>
          </p>

          <p className="row column">
            <label>Description:</label>
            <textarea 
              name="desc"
              placeholder="I talk casually, use slang..." 
              rows="5"
             onChange={handleMore}></textarea>
          </p>

          <hr />

          <button type="submit" className="form_btn">
            Start Chat
          </button>

        </form>
      </div>
    </div>
  )
}

export default FormPage