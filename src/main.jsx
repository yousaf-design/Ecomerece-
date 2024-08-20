import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ShopContextProvider from './Context/ShopContext.jsx';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
  </React.StrictMode>,

)
