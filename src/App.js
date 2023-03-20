// Import React and the necessary components from the react-redux and local modules
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setPlayable,
  setCorrectLetters,
  setWrongLetters,
  setShowRules,
  setShowHistory,
} from './redux/actions';
import Header from './components/Header';
import StickFigure from './components/StickFigure';
import GuessWord from './components/GuessWord';
import Popup from './components/Popup';
import Letters from './components/Letters';
import './App.css';

// Define an array of possible words for the game
const words = ['python', 'javascript', 'html', 'css', 'php', 'kotlin', 'react', 'typescript', 'ruby', 'mongodb', 'redux', 'react', 'vue', 'node', 'sql', 'django', 'java', 'swift'];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // Initialize the Redux store and select the game state values using the useSelector hook
  const dispatch = useDispatch();
  const playable = useSelector((state) => state.playable);
  const correctLetters = useSelector((state) => state.correctLetters);
  const wrongLetters = useSelector((state) => state.wrongLetters);
  const showRules = useSelector((state) => state.showRules);
  const showHistory = useSelector((state) => state.showHistory);

  // Define functions for toggling the display of the rules and history components
  function toggleRules() {
    dispatch(setShowRules(!showRules));
  }

  function toggleHistory() {
    dispatch(setShowHistory(!showHistory));
  }

  // Handle keyboard input and dispatch actions to update the game state accordingly
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            dispatch(setCorrectLetters([...correctLetters, letter]));
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            dispatch(setWrongLetters([...wrongLetters, letter]));
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, [playable, dispatch, correctLetters, wrongLetters]);
  
  // Handle letter input and dispatch actions to update the game state accordingly
  function handleGuess(letter) {
    if (playable) {
      if (selectedWord.includes(letter)) {
        if (!correctLetters.includes(letter)) {
          dispatch(setCorrectLetters([...correctLetters, letter]));
        }
      } else {
        if (!wrongLetters.includes(letter)) {
          dispatch(setWrongLetters([...wrongLetters, letter]));
        }
      }
    }
  }

  // Reset the game state to start a new game
  function playAgain() {
    dispatch(setPlayable(true));
    dispatch(setCorrectLetters([]));
    dispatch(setWrongLetters([]));
    selectedWord = words[Math.floor(Math.random() * words.length)];
  }

  // Render the game components and pass in the necessary props
  return (
    <>
      <Header
        showRules={showRules}
        toggleRules={toggleRules}
        showHistory={showHistory}
        toggleHistory={toggleHistory}
      />
      {showRules && (
        <div className="help">
          <h2>Help</h2>
            <p>To find the hidden word, enter a letter at a time.</p>
            <p>You have 6 tries to guess the word correctly before the man is hung.</p>
            <p>You can use your keyboard or the letters on the screen to input aletter.</p>
            <p>Good luck!</p>
            <p>*words are to do with programming</p>
          </div>
          )
        }
      {showHistory && (
        <div className="history">
          <h2>History</h2>
            <p>In 17th and 18th century Europe, criminals who were sentenced to death by hanging could demand the "Rite of Words and Life."</p>
            <p>In the "Rite of Words and Life" a criminal to be hanged was strung up over a 5 legged stand, and a board with a series of short ropes representing a word was displayed. The Executioner would pick the word, and would use charcoal to mark correctly guessed letters on the dashes of the board, and incorrect letters to the side. At every incorrect guess the executioner would use a sledge hammer or axe to knock away a single leg of the stand. 5 wrong guesses, and the criminal was hanged. If the entire word was filled in correctly or guessed, the condemned would be set free from that sentence and not tried again on that crime.</p>
            <p>With the little evidence we have, we decided to pin the birth of "hangman" as we know it to 1902.</p>
            <p>Hope you enjoy the game!</p>
          </div>
          )
        }
        
      <div className="game-container">
        <StickFigure wrongLetters={wrongLetters} />
        <GuessWord selectedWord={selectedWord} correctLetters={correctLetters} />
        <Letters
          handleGuess={handleGuess}
          guesses={[...correctLetters, ...wrongLetters]}
          isGameOver={!playable}
          wrongLetters={wrongLetters}
          correctLetters={correctLetters}
          />
        </div>
        <Popup
            correctLetters={correctLetters}
            wrongLetters={wrongLetters}
            selectedWord={selectedWord}
            setPlayable={setPlayable}
            playAgain={playAgain}
          />
      </>
    );
  }
// export App
export default App;