import * as actionTypes from './actionTypes';

const initialState = {
  playable: true,
  correctLetters: [],
  wrongLetters: [],
  showRules: false,
  showHistory: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYABLE:
      return { ...state, playable: action.payload };
    case actionTypes.SET_CORRECT_LETTERS:
      return { ...state, correctLetters: action.payload };
    case actionTypes.SET_WRONG_LETTERS:
      return { ...state, wrongLetters: action.payload };
    case actionTypes.SET_SHOW_RULES:
      return { ...state, showRules: action.payload };
    case actionTypes.SET_SHOW_HISTORY:
      return { ...state, showHistory: action.payload };
    default:
      return state;
  }
};

export default gameReducer;
