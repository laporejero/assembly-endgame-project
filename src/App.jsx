import { useState } from 'react'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import { languages } from '../languages.js'
import './App.css'

function App() {

  const languageElements = languages.map((lang) => {
    return (
      <span 
        className='language-chip' 
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })


  return (
    <>
      <Header />
      <Status />
      <div className='language-chips-container'>
        {languageElements}
      </div>
    </>
  )
}

export default App