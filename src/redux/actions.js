import * as actionTypes from './actionTypes';

// Define action creators for setting various game state values
export const setPlayable = (playable) => ({ type: actionTypes.SET_PLAYABLE, payload: playable });
export const setCorrectLetters = (letters) => ({ type: actionTypes.SET_CORRECT_LETTERS, payload: letters });
export const setWrongLetters = (letters) => ({ type: actionTypes.SET_WRONG_LETTERS, payload: letters });
export const setShowRules = (show) => ({ type: actionTypes.SET_SHOW_RULES, payload: show });
export const setShowHistory = (show) => ({ type: actionTypes.SET_SHOW_HISTORY, payload: show });
