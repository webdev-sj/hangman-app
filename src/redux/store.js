// Import the createStore function from the Redux library
import { createStore } from 'redux';

// Import the gameReducer function from the ./reducers module
import gameReducer from './reducers';

// Create the Redux store using the gameReducer function and enable the Redux DevTools extension in the browser (if available)
const store = createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Export the store as the default export of this module
export default store;

