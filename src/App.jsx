import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import { languages } from '../languages.js'
import './App.css'

function App() {

  const [currentWord, setCurrentWord] = useState("react")

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const [guessedLetters, setGuessedLetters] = useState([])
  console.log(guessedLetters);

  function addGuessedLetter(letter) {
    setGuessedLetters(prev => {
        if (prev.includes(letter)) return prev
        return [...prev, letter]
        // prev.includes(letter) ? prev : [...prev, letter]
      }
    )

    if (currentWord.includes(letter)) {
      console.log("correct!")
    } else {
      console.log(`${letter} not found`)
    }
  }

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

  const keyboardElements = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)
    const isWrong = isGuessed && !currentWord.includes(letter)
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong
    })

    return (
      <button 
        className={className}
        key={letter}
        onClick={() => addGuessedLetter(letter)}
      >
        {letter.toUpperCase()}
      </button>
    )
  })

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