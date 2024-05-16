import { useEffect, useState } from 'react'

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import MainContentTwo from './components/MainContentTwo'


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <MainContentTwo />
      <Footer />
    </div>
  )
}

export default App
