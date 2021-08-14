import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { AuthProvider } from './components/AuthContext'
import Routes from './routes/routes'

// Global styles (Should be at top, else it will override component specific styles)
import './assets/styles/global.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </AuthProvider>
  )
}

export default App
