// React and Third-party libraries imports
import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Local imports
import { store } from './store';
import App from './App';
import './index.css';
import  { useEffect, useState } from "react";

const container = document.getElementById('root');
const root = createRoot(container);


// Render the main app
root.render(
  <Provider store={store}>
    <BrowserRouter>
    {/* <CreateForm/> */}
      <App />

    </BrowserRouter>
  </Provider>
);
