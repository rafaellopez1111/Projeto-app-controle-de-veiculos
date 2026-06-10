import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Ponto de entrada do app. Pega a div #root do index.html e manda o React
// renderizar o componente <App/> dentro dela. É o equivalente moderno do
// <script src="script.js"> que ficava no final do HTML original.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
