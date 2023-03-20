// function checkWin, correct, wrong, word as props
 const checkWin = (correct, wrong, word) => {
  let status = 'win';

  // check for win
  for (const letter of word) {
    if (!correct.includes(letter)) {
      status = '';
      break;
    }
  }

  // check for lose
  if (wrong.length === 6) {
    status = 'lose';
  }

  return status;
}

// export checkwin
export { checkWin };
