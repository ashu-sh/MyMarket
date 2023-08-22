import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import logo from '../assets/pngwing.com.png'

function Footer() {
  return (
    <Navbar bg="dark" data-bs-theme="dark"style={{top:"60rem",textAlign:"center"}}>
        <Container>
          <Navbar.Brand href='/'><img src={logo} style={{width:"40px",borderRadius:"5px"}}alt='flipmart'></img></Navbar.Brand>
          <Nav className="mt-5 mb-5">
            <p style={{color:"#999999"}}><h5><i style={{color:"#fff"}}>flipMart</i></h5>&nbsp;&nbsp;© Copyright 2023 India <br/> Designed & Developed by Ashutosh</p>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Footer