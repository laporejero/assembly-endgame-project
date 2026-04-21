import { useState } from 'react'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import { languages } from '../languages.js'
import './App.css'

function App() {
  /**
   * Goal: Build out the main parts of our app
   * 
   * Challenge: 
   * 1. Save a "currentWord" in state. Initialize as "react".
   * 2. Map over the letters of the word (you'll need to turn 
   *    the string into an array of letters first) and display
   *    each one as a <span>. Capitalize the letters when
   *    displaying them.
   * 3. Style to look like the design. You can get the underline 
   *    effect on the box using `border-bottom`.
   */
  const [currentWord, setCurrentWord] = useState("react")

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

  const letterElements = currentWord.split("").map((letter, index) => (
      <span key={index} className='box'>{letter.toUpperCase()}</span>
  ))

  return (
    <>
      <Header />
      <Status />
      <div className='language-chips-container'>
        {languageElements}
      </div>
      <section className='word'>
        {letterElements}
      </section>
    </>
  )
}

export default App