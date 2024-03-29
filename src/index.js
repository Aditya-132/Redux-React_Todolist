// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducer from './components/reducers';

const store = createStore(reducer);

const root = document.getElementById('root');

// Use createRoot from "react-dom/client"
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

createRoot(root).render(rootComponent);
