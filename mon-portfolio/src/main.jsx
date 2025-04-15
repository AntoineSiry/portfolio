import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { cn } from './utils/style.js'
import React from 'react'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

// document.getElementById('root').className ="min-h-screen bg-background scroll-smooth py-12 sm:py-16 px-8 sm:px-20 md:px-32 lg:px-60 xl:px-80 2xl:px-[30rem] text-primary"
