import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
  
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  // determine the final message and reveal word based on the state of the game
  switch (checkWin(correctLetters, wrongLetters, selectedWord)) {
    case 'win':
      finalMessage = `Congratulations! `;
      finalMessageRevealWord = `You guessed "${selectedWord}"`
      playable = false;
      break;
    case 'lose':
      finalMessage = 'You lose!';
      finalMessageRevealWord = `the word was: "${selectedWord}"`;
      playable = false;
      break;
    default:
  }

  // update the playability of the game
  useEffect(() => {
    setPlayable(playable);
  });

  // listen for the 'Enter' key to trigger the playAgain function
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 13) {
        playAgain();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [playAgain]);

  // render the popup with the final message, reveal word, and play again button
  return (
    <div className="popup-container" style={finalMessage !== '' ? { display: 'flex', backgroundColor: checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ? '#6795ab' : 'black' } : {}}>
     <div className="popup">
        <h2 className='finalMessage'>{finalMessage}</h2>
        <h3 className='revealWord'>{finalMessageRevealWord}</h3>
        
        <button onClick={playAgain} className="replayBtn">Play Again</button>
     </div>
    </div>
  )
}

// export Popup
export default Popup;
