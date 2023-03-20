// Import React, ReactDOM, the Provider component from react-redux, the Redux store, and the App component
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

// Get the root element of the HTML document
const rootElement = document.getElementById('root');

// Render the App component wrapped in a Provider component with the Redux store, inside a root element
createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
