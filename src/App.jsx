import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import { languages } from '../languages.js'
import './App.css'

function App() {
  // State values
  const [currentWord, setCurrentWord] = useState("react")
  const [guessedLetters, setGuessedLetters] = useState([])

  // Derived values
  const wrongGuessCount = 
    guessedLetters.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessCount)
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  let isGameOver = isGameWon || isGameLost

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

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

  const languageElements = languages.map((lang, index) => {
    return (
      <span 
        className={clsx('language-chip', index < wrongGuessCount && "lost")} 
        style={{ backgroundColor: lang.backgroundColor, color: lang.color }}
        key={lang.name}
      >
        {lang.name}
      </span>
    )
  })

  const letterElements = currentWord.split("").map((letter, index) => {
    const isReaveled = guessedLetters.includes(letter)
    return (
      <span key={index} className='box'>
        {isReaveled ? letter.toUpperCase() : ""}
      </span>
    )
  })

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
      {isGameOver && <button className='new-game'>New Game</button>}
    </>
  )
}

export default App