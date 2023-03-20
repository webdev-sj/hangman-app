// Import React library
import React from 'react';

// function Letters, which takes in several props including handleGuess, guesses, isGameOver, wrongLetters, and correctLetters
const Letters = ({ handleGuess, guesses, isGameOver, wrongLetters, correctLetters }) => {
  // the alphabet string as a variable and split it into an array of letters
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  // Return a div containing buttons for each letter of the alphabet
  return (
    <div className="letters">
      {alphabet.map((letter) => (
        <button
          key={letter}
          onClick={() => handleGuess(letter)}
          // disable the button if the letter has already been guessed or the game is over
          disabled={guesses.includes(letter) || isGameOver}
          // apply different classes based on whether the letter is in the wrong guesses, correct, or neither
          className={`letter-button ${wrongLetters.includes(letter) ? 'wrong bg-wrong' : correctLetters.includes(letter) ? 'correct bg-correct' : ''}`}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

// export Letters
export default Letters;
