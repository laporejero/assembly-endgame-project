import { useState, useEffect } from 'react'
import clsx from 'clsx'
import Header from './components/Header.jsx'
import Status from './components/Status.jsx'
import { languages } from '../languages.js'
import { getFarewellText, getRandomWord } from '../utils.js'
import './App.css'

function App() {
  // State values
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  // Derived values
  const wrongGuessCount = 
    guessedLetters.filter(letter => !currentWord.includes(letter)).length
  console.log(wrongGuessCount)
  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter))
  const isGameLost = wrongGuessCount >= languages.length - 1
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)

  // Static values
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  function addGuessedLetter(letter) {
    setGuessedLetters(prev => {
        if (prev.includes(letter)) return prev
        return [...prev, letter]
        // prev.includes(letter) ? prev : [...prev, letter]
      }
    )
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
        aria-disabled={guessedLetters.includes(letter)}
        aria-label={`Letter ${letter}`}
        disabled={isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    )
  })

  function startNewGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect
  })

  return (
    <>
      <Header />
      <section aria-live='polite' role='status' className={gameStatusClass}>
        {
          !isGameOver && isLastGuessIncorrect ? (
            <Status message={getFarewellText(languages[wrongGuessCount - 1].name)} class='farewell-message' />
          ) : isGameWon ? (
            <Status headline='You win!' message='Well done! 🎉' /> 
          ) : isGameLost && (
            <Status headline='Game over!' message='You lose! Better start learning Assembly 😭' />
          )
        }
      </section>
      
      <div className='language-chips-container'>
        {languageElements}
      </div>
      <section className='word'>
        {letterElements}
      </section>
      <section className='sr-only' aria-live='polite' role='status'>
        <p>
          {currentWord.includes(lastGuessedLetter) ? `Correct! The letter ${lastGuessedLetter} is in the word.` : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
          You have {languages.length - 1} attempts left.
        </p>
        <p>Current word: {currentWord.split("").map(letter => guessedLetters.includes(letter) ? letter + "." : "blank.").join(" ")}</p>
      </section>
      <section className='keyboard'>
        {keyboardElements}
      </section>
      {isGameOver && <button className='new-game' onClick={startNewGame}>New Game</button>}
    </>
  )
}

export default App