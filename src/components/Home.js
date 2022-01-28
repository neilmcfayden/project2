import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  
  <div className="hero text-center">
    <div className='hero-overlay'>
      <h1 className='display-4'>
        Crypto Updates
      </h1>
      <p className='home'>This site provides cryptocurrency price updates every 30 seconds.</p>
      <Link to="cryptoindex" className='btn btn-info' id="button" size="xl">Discover Crypto</Link>
    </div>
  </div>
)
export default Home