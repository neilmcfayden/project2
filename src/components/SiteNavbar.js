import React from 'react'
import { Link } from 'react-router-dom'

// Import React Bootstrap Components
// import { Navbar, Nav, Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const SiteNavbar = () => {
  return (
    <Navbar expand="sm" bg="light">
      <Container>
        {/* Navbar Brand Icon */}
        <Navbar.Brand>
          <Link to="/" className="btn btn-info" id="button"> 🏠 </Link>
        </Navbar.Brand>
        {/* Toggler */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Nav to collapse on mobile/tablet */}
        <Navbar.Collapse className='justify-content-end'>
          <Link to="/cryptoindex" className="btn btn-info" id="button">Discover Crypto</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  }
  
  export default SiteNavbar