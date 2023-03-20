// import React library
import React from 'react';


// function GuessWord with props selectedWord and correctLetters
const GuessWord = ({ selectedWord, correctLetters }) => {
// render a span with class name "letter" and a unique key for each letter in the array
  return (
    <div className="word">
      {selectedWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

// export GuessWord
export default GuessWord;