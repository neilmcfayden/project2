import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Custom components
import SiteNavbar from './components/SiteNavbar'
import Home from './components/Home'
import CryptoIndex from './components/CryptoIndex'
import CryptoDetails from './components/CryptoDetails'

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cryptoindex" element={<CryptoIndex />} />
          <Route path="cryptos/:cryptoId" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  }
  
export default App
