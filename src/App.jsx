import { useState } from 'react'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import { languages } from '../languages.js'
import './App.css'

function App() {

  /**
 * Goal: Allow the user to start guessing the letters
 * 
 * Challenge: TBA
 * 
 * Think: what would be the best way to store the user's
 * guessed letters?
 */

  const [currentWord, setCurrentWord] = useState("react")

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

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

  const keyboardElements = alphabet.split("").map((letter) => (
    <button key={letter} className='keyboard-btn'>{letter.toUpperCase()}</button>
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
      <section className='keyboard'>
        {keyboardElements}
      </section>
      <button className='new-game'>New Game</button>
    </>
  )
}

export default App